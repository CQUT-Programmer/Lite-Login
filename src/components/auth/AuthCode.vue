<template>
  <div class="auth-code">
    <el-input style="width: 55%" clearable size="large" v-model="authCode"/>
    <el-button text bg type="primary">发送验证码</el-button>
  </div>
</template>

<script lang="ts">

import {ref} from "vue";

export default {
  name: "AuthCode",
  setup() {

    const authCode = ref("");

    return {
      authCode
    };
  }
};
</script>

<style scoped>
.auth-code {
  display: flex;
  justify-content: space-between;
}

.auth-code :deep(.el-button>span) {
  font-size: 14px;
}

.auth-code :deep(.el-button) {
  padding: 20px 10px !important;
  margin: 0 !important;
}
</style>