<script setup lang="ts">

defineProps<{
    isGradient: boolean
}>()

</script>

<template>
    <div
        class="text-xl lg:text-2xl xl:text-4xl min-2xl:text-6xl font-gilroy-black uppercase"
        :class="isGradient ? 'gradient' : 'text-white'"
    >
        <h1>
            <slot/>
        </h1>
    </div>

</template>

<style scoped>

</style>