<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="registerUser"
          :rules="registerRules"
          ref="ruleFormRef"
      >

        <el-form-item label="邮箱" prop="mail">
          <el-input clearable size="large" v-model="registerUser.mail"/>
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

        <el-form-item label="验证码" prop="authCode">
          <auth-code/>
        </el-form-item>

      </el-form>
    </template>
    <template v-slot:footer>
      <div>
        <el-button
            round
            type="primary" @click="registerSubmit(ruleFormRef)">注册
        </el-button>
      </div>
      <div>
        <el-button
            round
            type="success" @click="$router.push({name:'login'})">返回
        </el-button>
      </div>

    </template>
  </AuthFormCard>
</template>

<script lang="ts">
import AuthFormCard from "@/components/auth/AuthFormCard.vue";
import {RegisterUser} from "@/entity/auth/AuthEntity";
import {reactive, ref} from "vue";
import {registerRules} from "@/entity/auth/AuthRules";
import AuthCode from "@/components/auth/AuthCode.vue";
import {FormInstance} from "element-plus";
import {AuthStore} from "@/store/AuthStore";
import {Message} from "@/utils/Message";
import {MailStore} from "@/store/MailStore";
import {storeToRefs} from "pinia";

export default {
  name: "RegisterPage",
  components: {AuthCode, AuthFormCard},
  setup() {

    const authStore = AuthStore();
    const mailStore = MailStore();
    const {authCode} = storeToRefs(mailStore);
    const ruleFormRef = ref<FormInstance>();

    const registerUser: RegisterUser = reactive({
      mail: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      authCode: authCode
    });

    registerRules.confirmPassword = [
      {
        required: true, message: "请再次输入密码", trigger: "blur"
      },
      {
        required: true, validator: (rule, value, callback) => {
          value === registerUser.password ? callback() : callback(new Error("两次输入的密码不一致"));
        },
        trigger: "blur"
      }
    ];


    const registerSubmit = async (formEl: FormInstance | undefined) => {
      formEl?.validate(isValid => {
        if (isValid) {
          authStore.register(registerUser).then(res => {
            Message.success("注册成功");
          }).catch(err => {
            Message.error("注册失败");
          });
        }
      });
    };


    return {
      registerUser,
      registerRules,
      ruleFormRef,
      registerSubmit
    };
  },
};
</script>

<style>
</style>