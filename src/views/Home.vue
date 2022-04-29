<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 14:35:01
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-25 16:38:00
-->
<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *
-->

<template>
  <div class="index" style="margin-top:100px;">
    <p-header />
    <router-link  class="nav-list-item active" to="login">
        <i class="nbicon nblvsefenkaicankaoxianban-1"></i>
        <span>Login</span>
      </router-link>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, getCurrentInstance } from 'vue'
import { setLocal, getLocal } from '@/common/js/utils'
import pHeader from './PageHeader.vue'
import MyWeb3 from '@/utils/MyWeb3'

export default {
  name: 'home',
  components: {
    pHeader
  },

  setup() {

    const state = reactive({

      categoryList: [],

    })

     const { proxy } = getCurrentInstance();
      console.log('proxy', proxy.$web3)




    onMounted(() => {
      // 获取绑定在vue原型链变量-$web3
     
      console.log('----------MyWeb3---------', MyWeb3)


      let ethereum = window.ethereum
      if (typeof ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
        MyWeb3.init().then(function (res) {
         getMyZombies()
        })
      } else {
        alert('You have to install MetaMask !')
      }

    })


    const getMyZombies = () => {
      console.log('getMyZombies')
        MyWeb3.getZombiesByOwner().then(function(zombies){
          console.log('zombies',zombies)
          
        })
    }




    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="less" scoped>
.index {}
</style>
