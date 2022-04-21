<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 15:26:04
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 16:37:57
-->
<template>
  <div class="pageHeader">
    <div class="btn" @click="toConnect">Connect</div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { init, connect } from '../common/js/connect'

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
    return {
      state,
      toConnect
    }

  }
}

</script>