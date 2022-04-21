/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 11:13:56
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 15:24:57
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import web3 from '@/utils/web3'




const app = createApp(App)


app.config.globalProperties.$web3 = web3;



app.use(router).mount('#app')
