<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="cpdForm"
          :rules="changePasswordRules"
      >

        <el-form-item label="用户邮箱" prop="mail">
          <el-input size="large" clearable v-model="cpdForm.mail"/>
        </el-form-item>

        <el-form-item label="新密码" prop="newPassword">
          <el-input size="large" show-password clearable v-model="cpdForm.newPassword"/>
        </el-form-item>
        <el-form-item label="验证码" prop="authCode">
          <div class="auth-code">
            <el-input style="width: 55%" clearable size="large" v-model="cpdForm.authCode"/>
            <el-button text bg type="primary">发送验证码</el-button>
          </div>
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
import {reactive} from "vue";

export default {
  name: "ChangePassword",
  components: {AuthFormCard},
  setup() {
    const cpdForm: ChangePassword = reactive({
      mail: "",
      newPassword: "",
      authCode: ""
    });
    return {
      changePasswordRules,
      cpdForm
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
  font-size: 15px;
}

.auth-code :deep(.el-button) {
  padding: 10px !important;
  margin: 0 !important;
}

</style>