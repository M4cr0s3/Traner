<script setup lang="ts">
import { definePageMeta } from "#imports";

defineProps<{
    label: string
    modelValue: string
    type: string
    placeholder: string
}>()

const generateId = () => {
    return (Math.random() * 1000).toString(16)
}

const id = generateId()



</script>

<template>
    <div>
        <label :for="id" class="block mb-1.5  text-sm font-gilroy-bold gradient">{{ label }}</label>
        <input :type="type" :id="id"
               class="border border-b-yellow gradiented font-semibold text-white text-sm rounded-lg focus:outline-none block w-full p-2.5"
               :placeholder="placeholder" required
               @input="$emit('update:modelValue', $event?.target?.value)"
               :value="modelValue"
        >
    </div>
</template>

<style scoped>
::placeholder {
    color: rgba(255,255,255, .8);
}
</style>