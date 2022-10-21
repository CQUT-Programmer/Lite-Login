<template>
  <common-page>
    <AuthFormCard>

      <template v-slot:form>
        <el-form
            label-position="top"
            label-width="100px"
            :model="loginForm"
        >
          <el-form-item label="用户名">
            <el-input clearable size="large" v-model="loginForm.username"/>
          </el-form-item>

          <el-form-item label="密码">
            <el-input show-password size="large" v-model="loginForm.password"/>
          </el-form-item>
        </el-form>

      </template>
      <template v-slot:footer>
        <div>
          <el-button round type="primary">登陆</el-button>
        </div>
        <div>
          <el-button
              round
              type="success">注册
          </el-button>
        </div>
      </template>
    </AuthFormCard>
  </common-page>
</template>

<script lang="ts">
import {reactive} from "vue";
import {LoginUser} from "@/entity/auth/AuthEntity";
import CommonPage from "@/components/common/CommonPage.vue";
import AuthFormCard from "@/components/auth/AuthFormCard.vue";


export default {
  name: "LoginPage",
  components: {
    AuthFormCard,
    CommonPage,
  },
  setup() {

    const loginForm: LoginUser = reactive({
      username: "",
      password: ""
    });

    return {
      loginForm
    };
  }
};
</script>

<style scoped>

</style>