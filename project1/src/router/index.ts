import { createRouter, createWebHistory } from 'vue-router' 

import Go from "@/views/Go.vue";
import Login from "@/views/Login.vue";
import Agreement from '@/views/Agreement.vue';
import SelectDebitAccount from '@/views/SelectDebitAccount.vue';
import CheckInfo from '@/views/CheckInfo.vue';
import OtpVerify from '@/views/OtpVerify.vue';
import OtpSuccess from '@/views/OtpSuccess.vue';

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
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement,
        },
        {
            path: '/selectDebitAccount',
            name: 'selectDebitAccount',
            component: SelectDebitAccount,
        },
        {
            path: '/checkInfo',
            name: 'checkInfo',
            component: CheckInfo,
        },
        {
            path: '/otpVerify',
            name: 'otpVerify',
            component: OtpVerify,
        },
        {
            path: '/otpSuccess',
            name: 'otpSuccess',
            component: OtpSuccess,
        },
    ],
})

export default router