<template>
    <section class="flex flex-col items-center justify-center py-12 p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded shadow-md">
        <div>
            <img class="w-24 h-24 animate-bounce" :src="`/notifications/${props.icon}.svg`" alt="">
        </div>
        <div class="text-center my-6">
            <h1 class="text-4xl font-semibold uppercase my-2">{{ props.title }}</h1>
            <p class="text-lg">{{ props.message }}</p>
        </div>
        <Button
        :link="props.action.path"
        :title="props.action.title"
        />
    </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import Button from './Button.vue';
import { lang } from '../composable/useLang.js';

const props = defineProps({
    title: {
        type: String,
        default: 'Thông báo'
    },
    message: {
        type: String,
        default: 'Nội dung thông báo'
    },
    icon: {
        type: String,
        default: 'info'
    },
    action: {
        type: Object,
        default: () => ({})
    }
});

</script>

<style scoped>

</style>