<script setup lang="ts">
export interface IAdvantage {
    icon: string
    title: string
    description: string
}


defineProps<IAdvantage>()

</script>

<template>
    <div class="shadow-md flex flex-col items-center bg-white rounded-2xl py-9 px-3">
        <img :src="icon" alt="icon">
        <h3 class="text-base mt-3 gradient text-center font-gilroy-black leading-normal">
            {{ title }}
        </h3>
        <p class="text-xs mt-3 text-brown text-center">
            {{ description }}
        </p>
    </div>
</template>

<style scoped>

</style>