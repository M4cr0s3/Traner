<script setup lang="ts">

export interface IStep {
    icon: string
    title: string
    content: string
}

export type StartListProps = {
    steps: IStep[]
}

const { steps } = defineProps<StartListProps>()

</script>

<template>
    <div class="grid-cols-2 grid px-9 py-8 rounded-2xl w-2/3 shadow-md max-md:flex max-md:flex-col"
         v-for="(step, i) in steps"
         :key="step.title"
         :class="i % 2 === 1 ? 'gradiented' : 'bg-white'"
    >
        <StartItem
           :i="i"
           :icon="step.icon"
           :title="step.title"
           :content="step.content"
        />
    </div>
</template>

<style scoped>

</style>