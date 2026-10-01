<template>
    <div>
        <div v-for="row in rows" :key="row.label" class="info-border">
            <div class="info-label">{{ row.label }}</div>
            <div class="info-value"> {{ row.value }} </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        rows:{
            label: string
            value: string
        }[]
    }>()
</script>

<style scoped></style>