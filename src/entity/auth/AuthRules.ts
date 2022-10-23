import {FormRules} from "element-plus";
import {reactive} from "vue";
import Regx from "@/utils/Regx";

/**
 * 登陆表单验证规则
 */
const loginRules: FormRules = reactive({
    username: [
        {required: true, message: "用户名不能为空", trigger: "blur"}
    ],
    password: [
        {required: true, message: "密码不能为空", trigger: "blur"}
    ]
});

/**
 * 注册表单验证规则
 */
const registerRules: FormRules = reactive({
    username: [
        {
            required: true,
            pattern: Regx.mail,
            message: "请填写正确的邮箱格式",
            trigger: "blur"
        },
    ],
    nickname: [
        {required: true, min: 3, max: 15, message: "昵称应为长度3-15个字符", trigger: "blur"}
    ],
    password: [
        {required: true, min: 3, max: 12, message: "密码应为长度3-12个字符", trigger: "blur"}
    ],
    confirmPassword: [
        {required: true, validator: undefined, trigger: "blur"}
    ],
    authCode: [
        {required: true, message: "请输入验证码", trigger: "blur"}
    ]
});

const changePasswordRules: FormRules = reactive({
    mail: [
        {
            required: true,
            pattern: Regx.mail,
            message: "请填写正确的邮箱格式",
            trigger: "blur"
        }
    ],
    newPassword: [
        {required: true, min: 3, max: 12, message: "密码应为长度3-12个字符", trigger: "blur"}
    ],
    authCode: [
        {required: true, message: "请填写验证码", trigger: "blur"}
    ]
});

export {
    loginRules,
    registerRules,
    changePasswordRules
};