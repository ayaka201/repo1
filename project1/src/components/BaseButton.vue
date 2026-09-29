<template>
    <button type="button" class="text-xl rounded-lg p-3 font-bold text-gray-50 bg-primary-500">
        {{ text }}
    </button>

</template>

<script setup lang="ts">
    defineProps<{
        text: string
    }>()
</script>

<style scoped></style>