<script setup lang="ts">

import Logo from "~/components/Header/Logo.vue";
import UIButton from "~/components/Button/UIButton.vue";
</script>

<template>
    <footer
        class="pb-12 pt-8 flex items-center xs:mt-[170px] sm:mt-[230px] md:mt-[260px] lg:mt-[350px] bg-no-repeat bg-cover bg-center">
        <div class="container sm:w-full md:w-11/12 max-lg:flex-col xl:w-4/5 2xl:w-3/4 flex flex-col">
            <div class="grid grid-cols-5 max-md:grid-cols-3 gap-4 max-sm:grid-cols-2 max-s:grid-cols-1">
                <Logo class="max-s:justify-center"/>
                <div class="flex flex-col pt-5 max-s:items-center">
                    <h4 class="text-xl font-gilroy-black text-white mb-1">Компания</h4>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Контакты</NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Новости</NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Вакансии</NuxtLink>
                </div>
                <div class="flex flex-col pt-5 max-s:items-center">
                    <h4 class="text-xl font-gilroy-black text-white mb-1">Быстрые ссылки</h4>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Центр поддержки</NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Статус сервиса</NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Безопасность</NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Блог</NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Обзоры</NuxtLink>
                </div>
                <div class="flex flex-col pt-5 max-s:items-center">
                    <h4 class="text-xl font-gilroy-black text-white mb-1">Быстрые ссылки</h4>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Соглашение о конфиденциальности
                    </NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Правила использования</NuxtLink>
                </div>
                <div class="flex flex-col pt-5 max-s:items-center">
                    <h4 class="text-xl font-gilroy-black text-white mb-1">Есть вопрос?</h4>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Имеется вопрос для агента
                        поддержки?
                    </NuxtLink>
                    <UIButton onClick="" class="bg-white text-orange max-s:py-2 py-3">
                        Напишите
                    </UIButton>
                </div>
            </div>
            <div class="flex items-center justify-between mt-14 max-s:flex-col gap-2">
                <div class="font-gilroy-regular text-base text-white">
                    ©2023 Traner | Все права защищены
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex items-center">
                        <Icon name="ph:telegram-logo" color="#fff" size="1.5em"/>
                        <h3 class="text-white font-gilroy-extrabold text-sm ml-2">tg</h3>
                    </div>
                    <div class="flex items-center">
                        <NuxtImg
                            src="vk_logo_white.svg"
                            format="webp"
                            height="14"
                            width="24"
                        />
                        <h3 class="text-white font-gilroy-extrabold text-sm ml-2">vk</h3>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-image: url('~/assets/images/footer_bg.webp');
}
</style>