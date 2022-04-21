<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 15:26:04
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 18:44:56
-->
<template>
  <div class="pageHeader">
    <div class="btn" @click="toConnect">Connect</div>
    <br />
    <div class="btn" @click="toDisConnect">disConnect</div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { init, connect, disConnect } from '../common/js/connect'

export default {
  setup() {

    onMounted(() => {
      init()
    })

    const state = reactive({
      account: ''
    })
    const toConnect = () => {
      connect()
    }
    const toDisConnect = () => {
      disConnect()

    }
    return {
      state,
      toConnect,
      toDisConnect
    }

  }
}

</script>