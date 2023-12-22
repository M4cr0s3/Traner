<script setup lang="ts">

const {img, author, content} = defineProps<{
    img: string
    author: string
    content: string
}>()

</script>

<template>
    <NuxtImg
        :src="img"
        format="webp"
        sizes="s:100px sm:120px md:140px lg:145x xl:170px"
        loading="lazy"
        class="absolute xs:top-[-6rem] s:top-[-5.5rem] sm:top-[-5rem] md:top-[-5rem] xs:w-[120px] s:w-[120px] xl:w-[170px] max-s:top-[-3.2rem] xl:top-[-7.5rem] left-1/2 transform -translate-x-1/2"
    />
    <h3 class="gradient font-gilroy-semibold text-2xl md:mt-5">
        {{ author }}
    </h3>
    <p class="text-brown text-sm leading-normal flex-1">
        {{ content }}
    </p>
</template>

<style scoped>

</style>