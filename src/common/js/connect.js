/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 15:21:16
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-22 14:18:30
 */
import web3 from '@/utils/web3'
import { setLocal } from './utils';

const web3Modal = window.Web3Modal.default

const providerOptions = {
  walletconnect: {
    package: window.WalletConnectProvider.default,
    options: {
      infuraId: "9321e08afdc04e2c81cabc499dc5d569",
    },
  },
};
// 选择钱包弹窗
const wModal = new web3Modal({
  network: "mainnet",
  cacheProvider: false,
  disableInjectedProvider: false,
  providerOptions,
});

const metamaskDatas = {
  // 小狐狸默认状态未解锁
  isUnlocked: false,
  // 默认未连接到小狐狸账号
  isConnected: false,
  // 已连接账号列表
  accounts: []
}

const init = (async () => {

  try {
    // 页面初始化查询钱包是否存在连接账号
    if (web3) {
      // 获取小狐狸连接数据
      console.log('window.ethereum._state', window.ethereum._state)
      metamaskDatas.isUnlocked = window.ethereum._state.isUnlocked ? true : false
      metamaskDatas.isConnected = window.ethereum._state.isConnected ? true : false
      metamaskDatas.accounts = window.ethereum._state.accounts.length ? window.ethereum._state.accounts[0] : []

      console.log('metamaskDatas', metamaskDatas)
      if (metamaskDatas.isUnlocked) {
        // 小狐狸已解锁，获取账号数据
        getAccountData()
      } else {
        console.log('小狐狸未解锁')
      }
      // 监听小狐狸账号切换
      web3._provider.on("accountsChanged", (accounts) => {
        getAccountData()
      })
    } else {
      console.log('no web3')
    }


  } catch (e) {
    return;
  }
})

const getAccountData = (async () => {

  if (web3) {
    let chainId = await web3.eth.getChainId();
    let accounts = await web3.eth.getAccounts();
    if (accounts.length) {
      console.log(`当前链ID:${chainId},当前已连接账号：${accounts[0]}`)
      let obj = {
        "chainId": chainId,
        "address": accounts[0]
      }
      setLocal("currentAccount", obj)
    } else {
      console.log('当前无账号连接')
    }
  } else {
    console.log('no web3')
  }

})

const connect = (async () => {
  try {
    await wModal.connect();
    // 调起钱包选择模态窗，用户连接后重新请求账号数据
    getAccountData()

  } catch (e) {
    return;
  }
})


const disConnect = (async () => {
  let obj = {
    "chainId": null,
    "address": ''
  }
  setLocal("currentAccount", obj)


})


export {
  init,
  connect,
  disConnect
}
