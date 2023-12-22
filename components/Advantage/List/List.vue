<script setup lang="ts">
import type {Advantages} from "~/types";

defineProps<{
    data: Advantages
}>()

</script>

<template>
    <div
        class="flex justify-between xs:w-full xs:mb-4 lg:mb-0 max-lg:self-center 2xl:w-1/4 px-5"
        v-for="advantage in data"
        :key="advantage.title"
    >
        <AdvantageItem
            :icon="advantage.icon"
            :title="advantage.title"
            :description="advantage.description"
        />
    </div>

</template>

<style scoped>

</style>