<template>
    <section :style="{ backgroundColor: color }" class="relative dark:bg-slate-800 dark:text-gray-300 p-2 rounded shadow-md">
        <span class="absolute w-10 h-10 -top-2 -right-2 rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" :src="logo || '/imgs/default-logo.svg'" alt="">
        </span>
        <h3 class="text-2xl text-gray-100 dark:text-gray-700 border-l-2 pl-2 border-slate-500 min-h-16 max-h-24 flex items-center font-semibold">{{ title }}</h3>
        <p class="text-sm my-2 p-1 rounded text-gray-700 italic before:content-['>'] before:mr-2 before:text-orange-500
            dark:bg-gray-400 min-h-12 max-h-16">{{ description }}
        </p>
        <div 
        v-if="author"
        class="flex flex-1 justify-between items-center dark:text-gray-200 italic text-sm border-t-2 py-2">
            <a class="hover:before:content-['>'] before:mr-1 hover:text-blue-500" :href="`mailto:${author.email}`">{{ author.name }}</a>
            <span class="border-l-2 pl-2">{{ countDoc }} docs</span>
        </div>
        <div class="flex flex-col justify-center items-start space-y-2">
            <Button 
            :title="lang === 'vi' ? 'Đọc thêm' : 'Read more'" 
            :link="`${path}`" />
        </div>
    </section>
</template>

<script setup>
import { defineProps} from 'vue';
import data from '../data/documents.json';
import { lang } from '../composable/useLang';
import Button from '../components/Button.vue';


const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    path: {
        type: String,
    },
    logo: {
        type: String,
        default: '/imgs/default-logo.svg'
    },
    color: {
        type: String,
    },
    author: {
        type: Object,
        default: null
    },
    countDoc: {
        type: Number,
        default: 0
    }
});
</script>

<style scoped>


</style>