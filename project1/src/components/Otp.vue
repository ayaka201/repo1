<template>
    <div class="border rounded-xl border-gray-500 bg-gray-50 w-full flex flex-col items-center px-8 py-9 gap-10">
        <div class="flex flex-col items-center gap-6">
            <div class="flex items-center justify-center rounded-full w-17 h-17 bg-primary-50">
                <span class="bi--phone"></span>
            </div>
            <h1 class="text-[28px] font-bold text-primary-500">輸入驗證碼</h1>
            <div class="text-center text-base leading-[150%] font-normal">
                <p>我們已發送 6 位數驗證碼至您的手機<br> <span class="text-primary-500"> 0912***456 </span>，<br>請在下方輸入以進行驗證。</p>
            </div>
        </div>
        <div class="flex w-92 h-14 gap-4">
            <input class="border min-w-0 border-gray-300 bg-gray-100 rounded-sm" v-for="index in 6" :key="index" type="text">
        </div>
        <div class="flex flex-col text-center text-sm font-normal leading-[170%] gap-2">
            <p>驗證碼將在<span class="text-red-500"> 02:59 </span>後失效</p>
            <a href="#" class="text-gray-600">重新發送驗證碼</a>
        </div>
        <div class="flex w-full gap-7">
            <BaseButton variant="second">取消</BaseButton>
            <BaseButton variant="primary">確定</BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';


</script>

<style scoped></style>