<template>
    <div v-if="!document" class="">
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
    <div v-else class="lg:px-0 px-8">
        <h1 class="text-4xl uppercase dark:text-gray-300 border-b-2 pb-1 font-semibold my-4">{{ document.name[lang] }}</h1>
        <h3 class="text-2xl flex items-center before:animate-ping dark:text-gray-400 font-semibold my-2">{{ lang === 'vi' ? 'Các tài liệu hiện có' : 'Available documents' }}</h3>
        <ul>
            <li v-for="item in document.data" :key="item.title">
                <Card 
                    :title="item.title[lang]"
                    :description="item.description[lang]"
                    :path="`/markdown/${document.id}/${item.path}`"
                    :logo="item.logo"
                    color="#b3ecf5"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import data from '../data/data.json';
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