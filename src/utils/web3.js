/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 11:15:41
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 15:25:13
 */

// window.evmChains: 链列表
import Web3 from 'web3/dist/web3.min.js';

const web3 = window.web3?new Web3(window.web3.currentProvider):null;

window.addEventListener("load", async () => {


  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
    } catch (error) {
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