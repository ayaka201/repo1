<template>
    <button type="button" class="w-full text-xl rounded-lg pt-3 pb-3 pr-8 pl-8 font-bold text-gray-50 bg-primary-500">
        {{ text }}
    </button>

</template>

<script setup lang="ts">
    defineProps<{
        text: string
    }>()
</script>

<style scoped></style>