<script setup lang="ts">

import Logo from "~/components/Header/Logo.vue";
</script>

<template>
    <header class="container pt-5 flex justify-between items-center relative z-50">
        <Logo/>
        <div class="flex gap-9 max-xl:hidden">
            <HeaderLink class="opacity-link-active" to="/">Главная</HeaderLink>
            <HeaderLink class="opacity-link-non-active" to="#about_us">О нас</HeaderLink>
            <HeaderLink class="opacity-link-non-active" to="#">ПОЛИТИКА СОГЛАШЕНИЯ</HeaderLink>
            <HeaderLink class="opacity-link-non-active" to="#why_us">ПОЧЕМУ МЫ?</HeaderLink>
        </div>
        <div class="">
            <HeaderLink to="/sign-in" class="flex items-center">
                <Icon name="ph:sign-in" color="#fff" class="mr-1"/>
                Войти
            </HeaderLink>
        </div>
    </header>

</template>

<style scoped>

</style>