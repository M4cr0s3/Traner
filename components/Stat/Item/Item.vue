<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col">
        <div class="font-gilroy-black gradient text-2xl uppercase">
            <slot name="title"/>
        </div>
        <div class="text-brown font-gilroy-light text-sm">
            <slot name="description"/>
        </div>
    </div>
</template>

<style scoped>

</style>