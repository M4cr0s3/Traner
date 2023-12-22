<script setup lang="ts">
import UButton from "~/components/Button/UButton.vue";
import UTitle from "~/components/Title/UTitle.vue";
import type {Advantages, IReview} from "~/types";
import type {IStep} from "~/components/Start/List/List.vue";
import Logo from "~/components/Header/Logo.vue";

useSeoMeta({
    title: 'Traner - сервис для поиска пары для путешествий',
    ogTitle: 'Traner - сервис для поиска пары для путешествий',
    description: 'Наша платформа предлагает вам уникальную возможность найти партнера для совместного путешествия' +
        ' в любую точку планеты.',
    ogDescription: 'Наша платформа предлагает вам уникальную возможность найти партнера для совместного путешествия' +
        ' в любую точку планеты.',
    charset: 'utf-8',
    ogUrl: 'http://localhost:3000/',
    viewport: "width=device-width, initial-scale=1.0",
    ogImage: 'http://localhost:3000/favicon.ico',
    ogLocale: 'ru',
    ogType: "website",
})

const advantages: Advantages = [
    {
        icon: 'individual.svg',
        title: 'Индивидуальный подход к подбору партнеров',
        description: 'Traner выделяется тем, что применяет инновационные методы и технологии для тщательного анализа ' +
            'предпочтений и интересов своих клиентов. Наш подход к подбору партнеров строится на глубоком понимании индивидуальности' +
            ' каждого человека, что позволяет создавать долгосрочные и гармоничные дуэты для различных видов отдыха.'
    },
    {
        icon: 'widespectre.svg',
        title: 'Широкий спектр предложений для разнообразного отдыха',
        description: 'Traner не ограничивается однотипными предложениями. Мы предлагаем клиентам возможность выбора из' +
            ' разнообразных опций для совместных путешествий – от роскошных романтических уикендов до захватывающих' +
            ' приключений в группе.'
    },
    {
        icon: 'service.svg',
        title: 'Комплексный сервис и поддержка',
        description: 'Traner гарантирует полный цикл поддержки от момента выбора партнера до завершения путешествия.' +
            ' Наши клиенты могут рассчитывать на нашу помощь и сопровождение на каждом этапе, что создает уверенность и' +
            ' комфорт во время отдыха. Мы стремимся к тому, чтобы каждая поездка стала незабвенным и приятным опытом.'
    },
    {
        icon: 'community.svg',
        title: 'Создание сообщества единомышленников',
        description: 'Traner не просто предоставляет услуги по поиску партнеров, мы строим настоящее сообщество людей, ' +
            'объединенных общими интересами и ценностями. Это позволяет не только находить отличных спутников, но и ' +
            'строить настоящие дружеские отношения, что делает опыт путешествий еще более насыщенным и удовлетворительным.'
    }
]

const reviews: IReview[] = [
    {
        img: 'review1.png',
        author: 'Елена Иванова',
        content: 'Меня зовут Елена Иванова, и я просто в восторге от опыта использования Traner! Эта платформа не только' +
            ' нашла мне идеального партнера для путешествия, но и создала невероятно комфортные условия для нашего отдыха.' +
            ' Спасибо Traner за яркие воспоминания и за возможность познакомиться с потрясающими людьми!'
    },
    {
        img: 'review2.png',
        author: 'Александр Петров',
        content: 'Просто восторг от Traner! Меня зовут Александр Петров, и благодаря этой платформе я не только нашел ' +
            'отличного попутчика, но и обнаружил множество новых интересов. Traner не просто помог мне организовать' +
            ' путешествие, но и подарил настоящую дружбу. Рекомендую всем, кто ценит яркие впечатления!'
    },
    {
        img: 'review3.png',
        author: 'Дмитрий Козлов',
        content: 'Traner просто изменил мои представления о совместных путешествиях. Эта платформа не просто соединила' +
            ' меня с удивительным спутником, но и подарила невероятные впечатления. Большое спасибо Traner за создание' +
            ' такого потрясающего опыта'
    },
]

const steps: IStep[] = [
    {
        icon: 'ph:user-plus',
        title: 'ЗАРЕГИСТРИРУЙТЕСЬ',
        content: 'Пройдите небольшую регистрацию и вы получите доступ к нашей платформе!'
    },
    {
        icon: 'ph:pen-nib',
        title: 'ЗАПОЛНИТЕ СВОЮ АНКЕТУ',
        content: 'Добавьте как можно больше полезной информации о себе, о ваших предпочтениях и желаниях, ' +
            'чтобы найти идеально подходящего партнера'
    },
    {
        icon: 'ph:magnifying-glass',
        title: 'НАЧНИТЕ ПОИСК',
        content: 'Просматривайте анкеты других людей и найдите того самого человека, с которым Ваше путешествие будет отпадно!'
    },
    {
        icon: 'ph:chat-circle',
        title: 'ОБЩАЙТЕСЬ',
        content: 'Находите общие темы, общие интересы, стройте планы, заводите новые знакомства!'
    },
    {
        icon: 'ph:airplane-tilt',
        title: 'ПУТЕШЕСТВУЙТЕ',
        content: 'Как только вы нашли человека, с которым вы планируете провести свой уикенд вместе, ' +
            'то сразу же покупайте билеты и настраивайтесь на самый лучший отдых!'
    },
]

</script>

<template>
    <div class="wrapper">
        <div class="container mx-auto sm:w-full md:w-11/12 max-lg:flex-col xl:w-4/5 2xl:w-3/4 flex items-center">
            <div class="md:w-1/2 flex flex-col 2xl:pr-10 max-lg:items-center">
                <h1 class="text-white font-gilroy-black text-5xl">Находите.</h1>
                <h1 class="text-white font-gilroy-black text-5xl mt-3">Путешествуйте</h1>
                <p class="text-white font-gilroy-light leading-8 text-2xl mt-9 max-lg:text-center">
                    Наша платформа предлагает вам уникальную возможность найти партнера
                    для совместного путешествия в любую точку планеты.
                </p>
                <div class="flex mt-9 max-lg:flex-col w-full max-lg:justify-around">
                    <UButton
                        onClick=""
                        class="text-orange bg-white max-lg:mr-0 max-lg:mb-4 mr-7"
                    >
                        Начать поиск партнера
                    </UButton>
                    <UButton
                        onClick=""
                        class="text-white bg-yellow"
                    >
                        Узнать больше
                    </UButton>
                </div>

            </div>
            <div class="w-1/2 relative z-50">
                <NuxtImg
                    format="webp"
                    loading="eager"
                    src="/phone.png"
                    width="761px"
                    height="840px"
                    alt="phone"
                    class="max-lg:w-full max-lg:mt-3 max-lg:hidden"
                    quality="100"
                    sizes="sm:200px md:400px lg:800px"
                />
            </div>
        </div>
        <div class="ellipses max-md:hidden"></div>
    </div>
    <main>
        <section id="about_us" class="mt-[100vh] pb-[120px]">
            <div class="about-us container sm:w-full md:w-11/12
        max-lg:flex-col xl:w-4/5 2xl:w-3/4 flex items-center">
                <div class="w-1/2 relative">
                    <NuxtImg
                        src="/partners.png"
                        format="webp"
                        loading="lazy"
                        alt="partners"
                        class="w-full"
                    />
                    <NuxtImg
                        src="/pattern.png"
                        format="webp"
                        loading="lazy"
                        alt="partners"
                        class="w-full absolute xl:top-8 xl:right-10 2xl:top-10 2xl:right-[3.5rem] z-[-1]"
                    />

                </div>
                <div class="w-1/2 flex flex-col px-10">
                    <UTitle :isGradient="true">
                        О нас
                    </UTitle>
                    <p class="leading-8 font-gilroy-light text-brown mt-1">
                        Добро пожаловать в мир Traner – вашего идеального партнера в создании незабываемых моментов
                        отдыха
                        и приключений! Мы являемся специализированной компанией, посвященной поиску и созданию идеальных
                        партнерств для совместного отдыха и путешествий.
                    </p>
                    <UButton
                        class="bg-yellow text-white center self-start mt-6"
                        onClick=""
                    >
                        расскажите подробнее
                    </UButton>
                </div>
            </div>
        </section>
        <section id="why_us" class="py-16 gradient-bg">
            <div class="flex flex-col items-center mb-12">
                <UTitle
                    :isGradient="false"
                >
                    наши преимущества
                </UTitle>
                <Description>
                    Чем наша компания отличается конкурентов на рынке?
                </Description>
            </div>
            <div class="container sm:w-full md:w-11/12 max-lg:flex-col xl:w-4/5 2xl:w-3/4 flex">
                <AdvantageList :data="advantages"/>
            </div>
        </section>
        <section class="py-16">
            <UTitle :isGradient="true" class="text-center">
                нас выбирают
            </UTitle>
            <div
                class="container sm:w-full md:w-11/12 max-lg:flex-col xl:w-4/5 2xl:w-3/4 flex items-center
                 flex-wrap lg:items-stretch justify-between xl:mt-8">
                <ReviewsList :reviews="reviews"></ReviewsList>
                <UButton
                    onClick=""
                    class="bg-yellow text-white mt-10"
                >
                    Все отзывы
                </UButton>
            </div>
        </section>
        <section class="how-to-start py-16">
            <UTitle :isGradient="false" class="text-center">
                Как начать?
            </UTitle>
            <Description>
                Все очень просто! Выполните следующие шаги и ищите себе партнера!
            </Description>
            <div class="flex flex-col mt-7 items-center">
                <StartList :steps="steps"/>
            </div>
        </section>
        <section class="pt-16 pb-8 overflow-hidden">
            <div class="container sm:w-full md:w-11/12 max-lg:flex-col xl:w-4/5 2xl:w-3/4 flex items-center xl:pr-20">
                <div class="lg:w-1/2 flex justify-center">
                    <NuxtImg
                        src="stat.png"
                        format="webp"
                        loading="lazy"
                        alt="red-haired man"
                        :placeholder="[200, 456, 80, 5]"
                        sizes="sm:100px md:200px lg:250px xl:300px"
                        class="xs:w-[120px] md:w-[200px]"
                    />
                </div>
                <div class="lg:w-1/2">
                    <UTitle :isGradient="true" class="normal-case">
                        О нас в цифрах
                    </UTitle>
                    <div class="text-brown text-start font-gilroy-light">
                        Мы молодая компания, но уже успели достигнуть высоких результатов.
                        С помощью нашего сервиса было образовано большое количество единомышленников, друзей и даже
                        пар!
                    </div>
                    <div class="grid s:grid-rows-2 s:grid-cols-2 gap-8 mt-5">
                        <StatItem>
                            <template v-slot:title>
                                10 000 пользователей
                            </template>
                            <template v-slot:description>
                                Каждый месяц регистрируется на нашем сервисе, чтобы найти себе партнеров для очередного
                                путешествия!
                            </template>
                        </StatItem>
                        <StatItem>
                            <template v-slot:title>
                                5 500 ПУТЕШЕСТВИЙ
                            </template>
                            <template v-slot:description>
                                Именно такое количество путешествий было организовано при помощи Traner.
                            </template>
                        </StatItem>
                        <StatItem>
                            <template v-slot:title>
                                600 000 ЗАПРОСОВ
                            </template>
                            <template v-slot:description>
                                Каждый час обрабатывается баснословное количество запросов на нашем сервере!
                            </template>
                        </StatItem>
                        <StatItem>
                            <template v-slot:title>
                                1 500 000 ПОСЕЩЕНИЙ
                            </template>
                            <template v-slot:description>
                                Каждый месяц наш сервис посещает около полутора миллионов уникальных пользователей.
                            </template>
                        </StatItem>
                    </div>
                </div>
            </div>
            <div class="gradiented py-8 flex overflow-x-hidden mt-8">
                <div class="flex flex-row text-white font-gilroy-semibold text-3xl items-center whitespace-nowrap">
                    <div class="flex loop-text items-center">
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Стараемся ради ваших эмоций</h1>
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Помогаем обрести счастье</h1>
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Страстно любим свое дело</h1>
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Знакомим вас с новыми людьми</h1>
                    </div>
                    <div class="flex loop-text items-center">
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Стараемся ради ваших эмоций</h1>
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Помогаем обрести счастье</h1>
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Страстно любим свое дело</h1>
                        <div class="mr-8 rounded-full h-[9px] w-[9px] bg-white"/>
                        <h1 class="mr-8">Знакомим вас с новыми людьми</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-16">
            <div class="relative z-50">
                <UTitle :isGradient="true" class="text-center">
                    поговорим вместе?
                </UTitle>
                <NuxtImg
                    src="lets_talk.png"
                    format="webp"
                    sizes="sm:200px md:300px lg:360px"
                    quality="80"
                    :placeholder="[360, 360, 80, 5]"
                    class="absolute top-4 left-1/2 transform -translate-x-1/2 z-[-1] xs:w-[200px] s:w-[250px] sm:w-[280px]  md:w-[300px] lg:w-[383px]"
                />
                <div class="flex items-center absolute xs:top-20 xs:left-[5%] s:top-[6rem] s:left-[13%] sm:top-[6.8rem] sm:left-[17%] md:top-32 md:left-[20%] xl:left-[30%] lg:top-40">
                    <Icon name="ph:telegram-logo" color="#0A89FF" size="3em"/>
                    <h3 class="gradient-blue font-gilroy-extrabold xs:text-xl md:text-2xl lg:text-3xl ml-2">tg</h3>
                </div>
                <div class="flex items-center absolute xs:top-[5.3rem] xs:right-[5%] s:top-[6.2rem] s:right-[13%] sm:top-28 sm:right-[17%] md:top-32 md:right-[20%] lg:top-40 xl:right-[30%] xl:top-40">
                    <NuxtImg
                        src="vk_logo.svg"
                        format="webp"
                        height="28"
                        width="48"
                    />
                    <h3 class="gradient-blue font-gilroy-extrabold xs:text-xl md:text-2xl lg:text-3xl ml-2">vk</h3>
                </div>
            </div>
        </section>
    </main>
    <footer class="pb-12 pt-8 flex items-center xs:mt-[170px] sm:mt-[230px] md:mt-[260px] lg:mt-[350px] bg-no-repeat bg-cover bg-center">
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
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Соглашение о конфиденциальности</NuxtLink>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Правила использования</NuxtLink>
                </div>
                <div class="flex flex-col pt-5 max-s:items-center">
                    <h4 class="text-xl font-gilroy-black text-white mb-1">Есть вопрос?</h4>
                    <NuxtLink to="#" class="font-gilroy-light text-sm mb-2 text-white">Имеется вопрос для агента поддержки?</NuxtLink>
                    <UButton onClick="" class="bg-white text-orange max-s:py-2 py-3">
                        Напишите
                    </UButton>
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
.wrapper {
    background-image: url('~/assets/images/main_bg.webp');
    @apply absolute h-screen w-full top-0 left-0 bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center
}

.ellipses {
    background-image: url('~/assets/images/ellipses.webp');
    @apply absolute h-screen w-[1000px] top-0 right-0 bg-no-repeat bg-cover
}

.gradient-bg {
    background: linear-gradient(77deg, #FF4D00 10.56%, #EC9F05 77.23%);
}

.how-to-start {
    background-image: url('~/public/background_how_to_start.webp');
    @apply bg-no-repeat bg-cover
}

.loop-text {
    animation: marquee 30s infinite linear;
}

.loop-text:hover {
    animation-play-state: paused;
}

@keyframes marquee {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
}

footer {
    background-image: url('~/assets/images/footer_bg.webp');
}

</style>