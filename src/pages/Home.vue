<template>
    <div class="lg:py-8">
        <div class="flex min-h-screen">
            <Notify 
                class="w-full"
                :title="lang === 'vi' ? 'Trang tài liệu của rury' : 'Rury documentation'"
                :message="lang === 'vi' ? 'Chào mừng đến với trang tài liệu của hieurury' : 'Welcome to the documentation page of hieurury'"
                :icon="'welcome'"
                :action="{
                    path: '/documents',
                    title: lang === 'vi' ? 'Khám phá ngay' : 'Get started'
                }"
            />
        </div>
        <div class="min-h-screen flex items-center justify-center flex-col lg:p-0 p-4">
            <h1 class="text-4xl font-semibold py-4 dark:text-gray-300 uppercase">{{ lang === 'vi' ? 'Kho tài liệu cho người mới' : 'Documentation for newcomers' }}</h1>
            <p class="text-lg italic dark:text-gray-400">{{ 
            lang === 'vi' ? 'Đa dạng tài liệu được tổng hợp từ nhiều nguồn, nhiều người hoặc đơn giản là do tôi tự soạn 😉'
            : 'A variety of documents are compiled from many sources, many people, or simply created by myself 😉'
             }}</p>
            
            <ul class="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
                <li v-for="doc in sampleDocuments" :key="doc.id">
                    <Card 
                        :title="doc.name[lang]"
                        :description="doc.description[lang]"
                        :path="`/documents/${doc.path}`"
                        :logo="doc.logo"
                        :color="doc.color"
                        :author="doc.author"
                        :countDoc="data[doc.path]?.data?.length || 0"
                    />
                </li>
            </ul>
            <div class="flex w-full my-6 justify-center items-center border-t-2 pt-2 border-gray-300">
                <Button 
                class="lg:min-w-md min-w-xs cursor-pointer" 
                :title="lang === 'vi' ? 'Tất cả' : 'Show all'" 
                link="/documents"
                />
            </div>
        </div>
        <div class="min-h-screen flex items-center justify-center flex-col lg:p-0 p-4">
            <h1 class="text-4xl uppercase font-semibold my-2 border-b-2 border-gray-300 py-2 w-full text-center">{{ lang === 'vi' ? 'Tích hợp trình biên dịch' : 'Embed Compiler' }}</h1>
            <!-- <EmbedCompilerJS /> -->
             <EmbedCompiler class="w-full" />
        </div>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref, computed } from 'vue';
import Notify from '../components/Notify.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import EmbedCompilerJS from '../components/EmbedCompilerJS.vue';
import EmbedCompiler from '../components/EmbedCompiler.vue';
import data from '../data/data.json';
import documents from '../data/documents.json';
import { lang } from '../composable/useLang';


const sampleDocuments = computed(() => {
    return documents.slice(0,3);
})

onMounted(() => {
})
</script>

<style scoped>

</style>