<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="cpdForm"
          :rules="changePasswordRules"
      >

        <el-form-item label="邮箱" prop="mail">
          <el-input size="large" clearable v-model="cpdForm.mail"/>
        </el-form-item>

        <el-form-item label="新密码" prop="newPassword">
          <el-input size="large" show-password clearable v-model="cpdForm.newPassword"/>
        </el-form-item>
        <el-form-item label="验证码" prop="authCode">
          <auth-code/>
        </el-form-item>
      </el-form>
    </template>

    <template v-slot:footer>
      <div>
        <el-button
            round
            type="success"
            @click="$router.push({name:'login'})">
          返回
        </el-button>
      </div>
      <div>
        <el-button
            round
            type="primary">确认
        </el-button>
      </div>
    </template>
  </AuthFormCard>
</template>

<script lang="ts">
import AuthFormCard from "@/components/auth/AuthFormCard.vue";
import {changePasswordRules} from "@/entity/auth/AuthRules";
import {ChangePassword} from "@/entity/auth/AuthEntity";
import AuthCode from "@/components/auth/AuthCode.vue";
import {reactive} from "vue";

export default {
  name: "ChangePassword",
  components: {AuthFormCard, AuthCode},
  setup() {
    const cpdForm: ChangePassword = reactive({
      mail: "",
      newPassword: "",
    });
    return {
      changePasswordRules,
      cpdForm
    };
  }
};
</script>

<style scoped>
</style>