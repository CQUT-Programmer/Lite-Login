<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="loginForm"
          :rules="loginRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input clearable size="large" v-model="loginForm.username"/>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input show-password size="large" v-model="loginForm.password"/>
        </el-form-item>
      </el-form>

    </template>
    <template v-slot:footer>
      <div>
        <el-button
            round
            type="primary">登陆
        </el-button>
      </div>
      <div>
        <el-button
            round
            type="success"
            @click="$router.push({name:'register'})"
        >注册
        </el-button>
      </div>
      <div>
        <el-button type="success" text round class="forget-password" @click="$router.push({name:'changePassword'})">忘记密码</el-button>
      </div>
    </template>

  </AuthFormCard>
</template>

<script lang="ts">
import {reactive} from "vue";
import {LoginUser} from "@/entity/auth/AuthEntity";
import {loginRules} from "@/entity/auth/AuthRules";
import AuthFormCard from "@/components/auth/AuthFormCard.vue";


export default {
  name: "LoginPage",
  components: {
    AuthFormCard,
  },
  setup() {

    const loginForm: LoginUser = reactive({
      username: "",
      password: ""
    });


    return {
      loginForm,
      loginRules
    };
  }
};
</script>

<style scoped>
.forget-password{
  padding: 15px!important;
}
</style>