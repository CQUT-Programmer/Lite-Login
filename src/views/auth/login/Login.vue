<template>
  <AuthComponent>
    <el-form
        label-position="top"
        label-width="100px"
        :model="loginForm"
    >
      <el-form-item label="UserName">
        <el-input clearable v-model="loginForm.username"/>
      </el-form-item>

      <el-form-item label="Password">
        <el-input show-password v-model="loginForm.password"/>
      </el-form-item>
    </el-form>
  </AuthComponent>
</template>

<script lang = "ts">
import AuthComponent from "@/components/AuthComponent.vue";
import {reactive, ref} from "vue";
import {LoginUser} from "./LoginUser";


export default {
  name: "Login",
  components: {
    AuthComponent
  },
  setup(){

    const loginForm : LoginUser = reactive({
      username:"",
      password:""
    });

    return{
      loginForm
    }
  }
};
</script>

<style scoped>

</style>