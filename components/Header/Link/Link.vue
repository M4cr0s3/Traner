<script setup lang="ts">

defineProps<{
    to: string
}>()

</script>

<template>
    <NuxtLink class="uppercase text-white font-gilroy-extrabold text-link" :to="to"><slot /></NuxtLink>
</template>

<style scoped>

</style>