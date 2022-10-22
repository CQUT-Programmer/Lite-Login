/**
 * 登录用户抽象接口
 */

interface LoginUser {

    /**
     * 用户名
     */
    username: string;

    /**
     * 密码
     */
    password: string;
}

/**
 * 注册用户抽象接口
 */
interface RegisterUser {

    /**
     * 用户名
     */
    username: string;

    /**
     * 昵称
     */
    nickname: string;

    /**
     * 密码
     */
    password: string;

    /**
     * 确认密码
     */
    confirmPassword: string;
}

/**
 * 修改密码抽象接口
 */
interface ChangePassword {

    /**
     * 用户邮箱
     */
    mail: string;

    /**
     * 新密码
     */
    newPassword: string;

    /**
     * 验证码
     */
    authCode: string;
}

export {
    LoginUser,
    RegisterUser,
    ChangePassword
};