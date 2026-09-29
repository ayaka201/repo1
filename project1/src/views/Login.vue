<template>
    <div class=" flex justify-center p-4">
        <div class=" w-full max-w-[601px] rounded-2xl relative  shadow-[0_10px_32px_rgb(0,0,0,0.1)]">
            <a href="#" class="absolute right-0 p-3.5">
                <CloseMdIcon height="2em" class="block text-gray-500"/>                            
            </a>
            <div class="flex justify-center p-11">
                <img src="https://picsum.photos/167/45?random=1">
            </div>
            <div class="border-b-[3px] border-primary-500 p-3.5">
                <p class="text-center text-sm font-bold text-primary-400">網路銀行登入</p>
            </div>
            <div class="p-8">
                <div class="flex flex-col mb-3">
                    <label for="idNum" class=" text-base mb-2 font-bold text-gray-700">身分證字號</label>
                    <input id="idNum" type="text" placeholder="請輸入身分證字號" class="border font-base rounded-lg p-3 font-medium text-gray-500 border-gray-700">
                </div>
                <div class="flex flex-col mb-3">
                    <label for="num" class=" text-base mb-2 font-bold text-gray-700">使用者代號</label>
                    <div class="relative">
                        <input id="num" type="text" placeholder="請輸入使用者代號" class="border w-full font-base rounded-lg p-3 font-medium text-gray-500 border-gray-700">
                        <button type="button" class="bi--eye-slash-fill absolute right-3 top-1/2 -translate-y-1/2"></button>
                    </div>
                </div>
                <div class="flex flex-col mb-3">
                    <label for="pwd" class=" text-base mb-2 font-bold text-gray-700">網路密碼</label>
                    <div class="flex items-center gap-3">
                        <div class="relative min-w-0 flex-1">
                            <input id="pwd" type="text" placeholder="請輸入網路密碼" class="border w-full font-base rounded-lg p-3 font-medium text-gray-500 border-gray-700">
                            <button type="button" class="bi--eye-slash-fill absolute right-3 top-1/2 -translate-y-1/2"></button>
                        </div>
                        <button type="button" class="w-12 flex items-center justify-center"><span class="fa7-solid--keyboard top-1/2"></span></button>
                    </div>
                </div>
                <div class="flex flex-col mb-3">
                    <label for="idNum" class=" text-base mb-2 font-bold text-gray-700">圖形驗證碼</label>
                    <input v-model="captchaInput" type="text" placeholder="請輸入圖形驗證碼" class="border font-base rounded-lg p-3 font-medium text-gray-500 border-gray-700">
                    <div class="flex justify-center m-3">
                        <div class="flex">
                            <div class="pr-3 border-r">
                                <img src="https://picsum.photos/105/40?random=1">
                            </div>
                            <!-- {{ captchaCode }} -->
                            <div class="flex flex-col items-center pl-3">
                                <span class="griddy-icons--refresh color-[#004095]"></span>
                                <p class="text-[10px] text-[#004095]">重新產生</p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mb-3">
                    <button  class="border text-xl rounded-lg p-3 font-bold text-gray-50 bg-primary-500" @click="checkCaptcha">登入並驗證</button>
                </div>
                <div class="flex flex-col text-[#3C3127] text-xs leading-[170%] font-normal">
                    <p>說明</p>
                    <ol class="list-decimal pl-5">                    
                        <li>網路密碼有區分英文大小寫，請留意輸入。</li>
                        <li>如果您尚未申請本行電子銀行服務，或者「電話語音密碼」、「網銀使用者代號/網路密碼」因遺忘或錯誤次數達上限而遭鎖，您可以利用「<a href="#" class="text-[#004095] font-medium">電子銀行申請/變更</a>」進行電子銀行申請及各項解鎖服務。</li>
                    </ol>        
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import CloseMdIcon from '@iconify-vue/ci/close-md';
    import { ref } from 'vue'

    const captchaInput = ref('')
    const captchaCode = ref('298528')

    const checkCaptcha = () => {
        if(captchaInput.value === captchaCode.value){
            console.log('驗證碼成功')
        }else{
            console.log('驗證碼錯誤')
        }
    }
</script>


<style scoped>

</style>