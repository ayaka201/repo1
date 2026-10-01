<template>
    <div class="flex flex-col px-20 py-12 gap-12 items-center justify-center">
        <StepProgress :current-step="3" class="max-w-[700px]"></StepProgress>
        <Otp class="max-w-116"></Otp>
    </div>
</template>

<script setup lang="ts">
import Otp from '@/components/Otp.vue';
import StepProgress from '@/components/StepProgress.vue';

</script>

<style scoped></style>