/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 14:43:51
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-22 14:19:53
 */


// 公共方法定义

// 获取浏览器缓存指定键值
const getLocal = (name) => {
  return JSON.parse(localStorage.getItem(name))
}

// 写入浏览器缓存
const setLocal = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}

export {
  getLocal,
  setLocal
}