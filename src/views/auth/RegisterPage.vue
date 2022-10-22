<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="registerUser"
          :rules="registerRules"
      >

        <el-form-item label="用户名" prop="username">
          <el-input clearable size="large" v-model="registerUser.username"/>
        </el-form-item>

        <el-form-item label="昵称" prop="nickname">
          <el-input clearable size="large" v-model="registerUser.nickname"/>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input clearable show-password size="large" v-model="registerUser.password"/>
        </el-form-item>

        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input clearable show-password size="large" v-model="registerUser.confirmPassword"/>
        </el-form-item>

      </el-form>
    </template>
    <template v-slot:footer>
      <div>
        <el-button
            round
            type="success" @click="$router.push({name:'login'})">返回
        </el-button>
      </div>
      <div>
        <el-button
            round
            type="primary">注册
        </el-button>
      </div>
    </template>
  </AuthFormCard>
</template>

<script lang="ts">
import AuthFormCard from "@/components/auth/AuthFormCard.vue";
import {RegisterUser} from "@/entity/auth/AuthEntity";
import {reactive} from "vue";
import {registerRules} from "@/entity/auth/AuthRules";

export default {
  name: "RegisterPage",
  components: {AuthFormCard},
  setup() {
    const registerUser: RegisterUser = reactive({
      username: "",
      nickname: "",
      password: "",
      confirmPassword: ""
    });

    registerRules.confirmPassword = [
      {
        required: true, validator: (rule, value, callback) => {
          value === registerUser.password ? callback() : callback(new Error("两次输入的密码不一致"));
        },
        trigger: "blur"
      }
    ];

    return {
      registerUser,
      registerRules
    };
  },
};
</script>

<style scoped>

</style>