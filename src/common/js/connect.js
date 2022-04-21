/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 15:21:16
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 19:03:15
 */
import web3 from '@/utils/web3'

const web3Modal = window.Web3Modal.default

const providerOptions = {
  walletconnect: {
    package: window.WalletConnectProvider.default,
    options: {
      infuraId: "9321e08afdc04e2c81cabc499dc5d569",
    },
  },
};
const wModal = new web3Modal({
  network: "mainnet",
  cacheProvider: false,
  disableInjectedProvider: false,
  providerOptions,
});


const init = (async () => {
  console.log('----------------init-------------', web3)
  console.log('----------------window-------------', window.ethereum)
  // console.log('小狐狸是否已解锁：', window.ethereum._state.isUnlocked)
  try {
    // 页面初始化查询钱包是否存在连接账号
    if (web3) {
      getAccountData()
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
    } else {
      console.log('当前无账号连接')
    }
  } else {
    console.log('no web3')
  }

})

const connect = (async () => {
  console.log('----------------connect-------------')
  try {

    await wModal.connect();
    // 调起钱包选择模态窗，用户连接后重新请求账号数据
    getAccountData()

  } catch (e) {
    return;
  }
})


const disConnect = (async () => {
  console.log('click to disConnect')

  // await window.ethereum.request({
  //   method: "disconnect"
  // })

  // 需要执行小狐狸断开连接

  // window.ethereum.on("disconnect", (res) => {
  //   console.log('res')
  // });
  // try {

  //   // web3._provider.on("disconnect", (res) => {
  //   //   console.log('------disconnect-------------')
  //   // })

  //   window.ethereum.on("disconnect", (res) => {
  //     console.log('------disconnect-------------')
  //   })

  // } catch (e) {
  //   return;
  // }
})


export {
  init,
  connect,
  disConnect
}

console.log('---------app-------------', app)