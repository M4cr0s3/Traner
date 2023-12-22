<script setup lang="ts">

export interface IReview {
    img: string
    author: string
    content: string
}

export type ReviewsListProps = {
    reviews: IReview[];
};

const { reviews } = defineProps<ReviewsListProps>()

</script>

<template>
    <div
        class="rounded-3xl border border-orange shadow-md px-4 flex flex-col relative py-9 max-md:w-full md:w-1/2 lg:w-[30%] items-stretch mt-32"
        v-for="review in reviews"
        :key="review.content">
        <ReviewsItem
            :img="review.img"
            :author="review.author"
            :content="review.content"
        />
    </div>
</template>

<style scoped>

</style>