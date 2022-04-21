/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 15:21:16
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 16:50:01
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
  try {
    // 页面初始化查询钱包是否存在连接账号
    let chainId = await web3.eth.getChainId();
    let accounts = await web3.eth.getAccounts();
    console.log(`当前链ID:${chainId},当前已连接账号：${accounts[0]}`)
    // 监听小狐狸账号切换
    web3._provider.on("accountsChanged", (accounts) => {
      console.log('账号已切换：', accounts)
    })

  } catch (e) {
    return;
  }
})


const connect = (async () => {
  console.log('----------------connect-------------')
  try {

    await wModal.connect();
    // 调起钱包选择模态窗，用户连接后重新请求账号数据
    let chainId = await web3.eth.getChainId();
    console.log('chainId', chainId)
    let accounts = await web3.eth.getAccounts();
    console.log('accounts', accounts)

  } catch (e) {
    return;
  }
})


export {
  init,
  connect
}

console.log('---------app-------------', app)