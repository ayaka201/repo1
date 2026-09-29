<template>
    <div class="flex">
        <template v-for="(step, index) in steps" :key="step">
            <div class="flex flex-col items-center w-25">    
                <div 
                class="border-2 flex justify-center items-center w-10 h-10 rounded-full font-medium" 
                :class="index + 1 === currentStep ? 'text-primary-500 bg-gray-50 border-primary-500' : index + 1 <= currentStep ? 'text-gray-50 bg-primary-500 border-primary-500' : 'text-gray-300 bg-gray-50 border-gray-300'">
                    {{ String(index + 1).padStart(2, '0') }}
                </div>
                <p
                class="text-base font-medium"
                :class="index + 1 <= currentStep ? 'text-primary-500' : 'text-gray-300'">
                    {{ step }}
                </p>
            </div>
            <div class="max-h-10 flex items-center"> 
                <div
                class="w-25 border"
                v-if = "index < step.length - 1" :class="index + 1 < currentStep ? 'border-primary-500' : 'border-gray-300'"></div>

            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        currentStep: number
    }>()

    const steps = [
        '選擇扣款帳戶',
        '資料確認',
        'OTP驗證',
        '驗證結果'
    ]
</script>

<style scoped></style>