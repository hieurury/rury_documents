<template>
    <div v-if="!document" class="py-8 bg-white dark:bg-slate-700 min-h-screen lg:px-[10%]">
        <Notify 
            :title="lang === 'vi' ? 'Xin lỗi, hiện tài liệu chưa khả dụng!' : 'Sorry, the document is not available yet!'"
            :message="lang === 'vi' ? 'Vui lòng quay lại sau.' : 'Please check back later.'"
            :icon="'alert'"
            :action="{
                path: '/documents',
                title: lang === 'vi' ? 'Về trang tài liệu' : 'Back to documentation'
            }"
        />
    </div>
    <div v-else class="py-8 bg-white text-gray-800 min-h-screen dark:bg-slate-700 lg:px-[10%] px-8">
        <h1 class="text-4xl uppercase dark:text-gray-300 border-b-2 pb-1 font-semibold my-4">{{ document.name[lang] }}</h1>
        <h3 class="text-2xl flex items-center before:animate-ping dark:text-gray-400 font-semibold my-2">{{ lang === 'vi' ? 'Các tài liệu hiện có' : 'Available documents' }}</h3>
        <ul class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
            <li class="" v-for="item in document.data" :key="item.title">
                <Card 
                    :title="item.title[lang]"
                    :description="item.description[lang]"
                    :path="`/markdown/${document.id}/${item.path}`"
                    :logo="item.logo"
                    :color="color"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import data from '../data/data.json';
import documents from '../data/documents.json';
import Card from '../components/Card.vue';
import Notify from '../components/Notify.vue';
import { lang } from '../composable/useLang';
const route = useRoute();

const document = computed(() => {
    console.log(data);
    const name = route.params.id;
    if(data[name])
        return data[name] || [];
})

const color = computed(() => {
    const doc = documents.find(d => d.path === route.params.id);
    return doc ? doc.color : '#b3ecf5';
})


</script>

<style scoped>
    h3:before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        margin-right: 8px;
        border-radius: 50%;
        background: orangered;
    }
</style>