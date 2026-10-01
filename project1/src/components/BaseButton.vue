<template>
    <button type="button" class="border w-full text-xl rounded-lg pt-3 pb-3 pr-8 pl-8 font-bold  border-primary-500"
    :class="props.variant === 'second' ? 'text-primary-500 bg-gray-50' : 'text-gray-50 bg-primary-500'">
    
        <slot></slot>   
    </button>

</template>

<script setup lang="ts">
    const props = defineProps<{
        variant ?: 'primary' | 'second'
    }>()
</script>

<style scoped></style>