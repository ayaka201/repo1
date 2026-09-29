import { createRouter, createWebHistory } from 'vue-router' 

import Go from "@/views/Go.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'go',
            component: Go,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    ],
})

export default router