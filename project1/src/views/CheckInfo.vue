<template>
    <div class="flex flex-col items-center px-20 py-12 gap-12">
        <StepProgress :current-step="2" class="max-w-[700px]"></StepProgress>
        <div class="flex flex-col gap-8 w-full">
            <div class="text-primary-600 font-bold text-[28px]">
                <p>選擇扣款帳號</p>
            </div>
            <div class="border border-gray-400">
                <Info :rows="rows"></Info>
            </div>
        </div>

        <BaseButton text="下一步" class="max-w-70"></BaseButton>
    </div>
</template>

<script setup lang="ts">
    import BaseButton from '@/components/BaseButton.vue';
    import Info from '@/components/Info.vue';
    import StepProgress from '@/components/StepProgress.vue';

    const rows =[
        
        {
            label: '扣款帳號',
            value: '123456789'
        },
        {
            label: '發動者名稱',
            value: 'OO保險'
        },
        {
            label: '交易項目',
            value: '704人壽保險'
        },
        {
            label: '用戶號碼',
            value: '12345678901'
        },
        {
            label: '申請時間',
            value: '20261001 10:00'
        },
        {
            label: '資料狀態',
            value: '授權申請中'
        }
    ]


</script>

<style scoped></style>