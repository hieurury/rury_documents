<template>
    <section :style="{ backgroundColor: color }" class="relative dark:bg-slate-800 dark:text-gray-300 p-2 rounded shadow-md">
        <span class="absolute w-10 h-10 -top-2 -right-2 rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" :src="logo || '/imgs/default-logo.svg'" alt="">
        </span>
        <h3 class="text-2xl dark:text-gray-700 border-l-2 pl-2 border-slate-500 min-h-16 max-h-24 flex items-center font-semibold">{{ title }}</h3>
        <p class="text-sm my-2 p-1 rounded text-gray-700 italic before:content-['>'] before:mr-2 before:text-orange-500
            dark:bg-gray-400 min-h-12 max-h-16">{{ description }}
        </p>
        <div class="flex mt-4 border-t-2 py-2">
            <Button 
            :title="lang === 'vi' ? 'Đọc thêm' : 'Read more'" 
            :link="`${path}`" />
        </div>
    </section>
</template>

<script setup>
import { defineProps} from 'vue';
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
    }
});
</script>

<style lang="scss" scoped>

</style>