<template>
<el-container>
  <el-main  class="auth-card">
    <slot></slot>
  </el-main>
</el-container>
</template>

<script lang="ts">
export default {
  name: "AuthComponent"
};
</script>

<style scoped>
.auth-card{
  width: 500px;
}
</style>