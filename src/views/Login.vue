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
  <div>LOGIN-------{{ type }}</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      username: '',
      password: '',
      username1: '',
      password1: '',
      type: 'login',
      imgCode: '',
      verify: ''
    })




    return {
      ...toRefs(state),

    }
  },

}
</script>

<style lang="less">
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }

  .login-body {
    padding: 0 20px;
  }

  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }

  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }

  .verify-bar-area {
    margin-top: 24px;

    .verify-left-bar {
      border-color: #1baeae;
    }

    .verify-move-block {
      background-color: #1baeae;
      color: #fff;
    }
  }

  .verify {
    >div {
      width: 100%;
    }

    display: flex;
    justify-content: center;

    .cerify-code-panel {
      margin-top: 16px;
    }

    .verify-code {
      width: 40% !important;
      float: left !important;
    }

    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;

      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }

      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>
