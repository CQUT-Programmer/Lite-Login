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
}


export {
    LoginUser,
    RegisterUser
};