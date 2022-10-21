import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import "../views/auth/login/Login.vue";
import Login from "@/views/auth/login/Login.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect:"/login"
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/auth/Register.vue")
    },
    {
        path: "/changePassword",
        name: "changePassword",
        component: () => import("../views/auth/ChangePassword.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
