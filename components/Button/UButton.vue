<script setup lang="ts">

defineProps<{
    onClick: Function | string
}>()

</script>

<template>
    <button
        @click.prevent="onClick"
        class="rounded-lg shadow-md px-5 py-[1.0625rem]"
    >
        <span class="font-gilroy-semibold text-xl uppercase">
            <slot/>
        </span>
    </button>
</template>

<style scoped>

</style>