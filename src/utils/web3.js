/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 11:15:41
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-22 14:14:01
 */

// window.evmChains: 链列表
import Web3 from 'web3/dist/web3.min.js';
const web3 = window.web3?new Web3(window.web3.currentProvider):null;
window.addEventListener("load", async () => {

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      // 页面加载后，在这里会调起小狐狸窗口
      await window.ethereum.enable();
    } catch (error) {
      console.log('Error: User rejected the request.')
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
  }
  // Non-dapp browsers...
  else {
    console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }
});

export default web3;