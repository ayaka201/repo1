<template>
    <div class="flex flex-col items-center gap-6 pt-15 pb-15 pr-20 pl-20">
        <div class="flex flex-col gap-6">
            <div class="border flex flex-col pt-8 pb-8 pr-7 pl-7 bg-primary-50 border-primary-300 rounded-sm">
                <div class="">
                    <div class="border flex justify-center pt-2 pb-2 bg-gray-50 border-primary-300 text-primary-600 font-bold text-xl">
                        <p>委託轉帳代繳業務費用「電子化授權（eDDA）」服務約定及告知事項</p>
                    </div>
                    <div class="p-3 font-sm font-normal leading-[170%]">
                        <ol>
                            <li>
                                一、申請人（即委繳戶）為辦理銀行帳戶授權服務之需，向聯邦商業銀行股份有限公司申請「電子化授權（eDDA）」服務（以下簡稱本服務），申請人勾選「本人已詳閱及瞭解約定事項並同意遵守」後，即表示申請人已於合理時間內閱讀並同意遵照下列約定事項之內容：申請人茲同意發動者（扣款單位/公司/機構）透過台灣票據交換所媒體交換業務（ACH）或ACH圈存扣款機制，依照申請本服務資料，授權自申請人存款帳戶劃付費用，並遵守扣款金融機構及台灣票據交換所有關規定。申請人亦同意發動者將本服務申請資料提供予發動行、扣款金融機構及台灣票據交換所，以辦理本項自動扣款轉帳業務。
                            </li>
                            <li>
                                二、申請人茲同意以 eDDA 方式授權本行以存款帳號認證（免插卡）、網路銀行雙因認證機制等方式進行身分驗證，若非經驗證為申請人本人者，不發生授權之效力，本行及扣款行無須另行通知申請人，申請人須以其他繳款方式自行繳款，其因此所發生之一切損失及責任概由申請人自行負擔。
                            </li>
                            <li>
                                三、申請人瞭解並同意本行就本服務之申請保留核准與否之權利。   
                            </li>
                            <li>
                                四、扣款行如發生合併等事宜而經轉換者，申請人同意本行得就申請人轉換後之新帳戶續行自動轉帳扣款程序，並以本約定條款為授權之依據。                           
                            </li>
                            <li>
                                五、申請人得指定自本人於本行開立「活期存款」或「活期儲蓄存款」（排除數位存款）之台幣活期性存款帳戶（帳戶狀態須為正常，未結清且非為問題帳戶）自動扣繳費用。
                                
                            </li>
                            <li>
                                六、嗣後約定條款如有修訂，申請人同意本行得以書面或其他方式(包括但不限於簡訊或電子郵件) 告知修訂後之內容，屆時，申請人同意自行詳閱修訂後之內容。                            
                            </li>
                            <li>
                                七、本條款未盡事宜，悉依本行相關規定、台灣票據交換所規範及相關法令辦理。    
                            </li>
                            <li>
                                八、本約定條款若有調整，以本行官方網站公告為準。                            
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="flex gap-3 items-center text-red-500">
                <input type="checkbox" class="w-4 h-4 appearance-none bg-gray-50 border-gray-300 border rounded-xs">
                <p>本人已詳閱「聯邦銀行帳戶綁定Maicoin進行授扣服務同意條款」服務約定及告知事項」</p>
            </div>

        </div>
        <BaseButton>已了解並同意上列注意事項，下一步</BaseButton>
    </div>
</template>

<script setup lang="ts">
    import BaseButton from '@/components/BaseButton.vue';
</script>

<style scoped></style>