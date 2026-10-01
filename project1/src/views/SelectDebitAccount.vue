<template>
    <div class="flex flex-col items-center py-12 px-20 gap-12">
        <StepProgress :current-step="1" class="max-w-[700px]"/>
        <div class="flex flex-col w-full gap-8">

            <div class="text-primary-600 font-bold text-[28px]">
                <p>選擇扣款帳號</p>
            </div>
            <div class="border border-gray-400">
                <div class="info-border">
                    <div class="info-label">
                        扣款帳號
                    </div>
                    <div class="info-value">
                        <select name="" id="">
                            <option value="">選擇扣款帳號</option>
                            <option value="">12345678</option>
                            <option value="">23456789</option>
                        </select>
                    </div>
                </div>
                
            <Info :rows="rows"/>
        </div>
        </div>
        <div class="w-70">
            <BaseButton>下一步</BaseButton>  
        </div>
    </div>
    
</template>

<script setup lang="ts">
    import StepProgress from '@/components/StepProgress.vue';
    import Info from '@/components/Info.vue';
    import BaseButton from '@/components/BaseButton.vue';

    const rows = [
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