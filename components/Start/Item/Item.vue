<script setup lang="ts">

defineProps<{
    i: number
    icon: string
    title: string
    content: string
}>()

</script>

<template>
    <div class="flex flex-col sm:flex-row items-center max-md:justify-center">
        <Icon
            :name="icon"
            height="48px"
            width="48px"
            :color="i % 2 === 0 ? '#FF4C00' : '#FFF'"

        />
        <h3
            class="sm:text-base md:text-xl lg:text-2xl xl:text-3xl max-md:ml-0 max-md:text-center ml-3 xl:ml-9
            font-gilroy-semibold"
            :class="i % 2 === 0 ? 'gradient' : 'text-white'"
        >
            {{ title }}
        </h3>
    </div>
    <div class="flex items-center">
        <p
            class="max-lg:text-xs text-sm font-gilroy-light max-md:text-center"
            :class="i % 2 === 0 ? 'text-brown' : 'text-white'"
        >
            {{ content }}
        </p>
    </div>

</template>

<style scoped>
</style>