import {FormRules} from "element-plus";
import {reactive} from "vue";

const loginRules: FormRules = reactive({
    username: [
        {required: true, message: "用户名不能为空", trigger: "blur"}
    ],
    password: [
        {required: true, message: "密码不能为空", trigger: "blur"}
    ]
});

const registerRules: FormRules = reactive({});

export {
    loginRules,
    registerRules
};