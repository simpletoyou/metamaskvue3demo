/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 14:43:51
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 14:46:12
 */


// 公共方法定义

// 获取浏览器缓存指定键值
const getLocal = (name) => {
  return localStorage.getItem(name)
}

// 写入浏览器缓存
const setLocal = (name, value) => {
  localStorage.setItem(name, value)
}

export {
  getLocal,
  setLocal
}