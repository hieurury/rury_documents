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
            <h1 class="text-4xl dark:text-gray-300 uppercase font-semibold my-2 border-b-2 border-gray-300 py-2 w-full text-center">{{ lang === 'vi' ? 'Tích hợp trình biên dịch' : 'Embed Compiler' }}</h1>
            <!-- <EmbedCompilerJS /> -->
             <EmbedCompiler class="w-full" />
        </div>

        <div class="min-h-screen lg:px-0  flex items-center justify-center flex-col lg:p-0 p-4">
            <section class="bg-orange-500 lg:p-6 p-2 rounded-md shadow border-1 border-orange-400 flex items-center justify-center flex-col">
                <h1 class="text-4xl my-2 uppercase text-gray-100 font-semibold">{{ lang === 'vi' ? 'Liên hệ cho tôi' : 'Contact me' }}</h1>
                <p class="lg:text-lg lg:my-0 my-1 italic text-gray-200 text-center">
                    {{ lang === 'vi' ? 'Nếu bạn cũng có những ý tưởng sáng tạo hoặc kiến thức thú vị muốn chia sẻ cho mọi người, hãy liên hệ với tôi.' : 'If you also have creative ideas or interesting knowledge to share with everyone, please contact me.' }}
                </p>
                <a 
                class="my-4 min-w-sm flex items-center justify-center dark:bg-slate-600 bg-slate-50 p-2 shadow-[0px_4px_0px] rounded cursor-pointer dark:text-gray-300
                active:translate-y-1 active:shadow-none transition-all duration-150 active:bg-slate-500/20"
                href="mailto:hieurury007@gmail.com">{{ lang === 'vi' ? 'Liên hệ ->' : 'Contact ->' }}</a>
            </section>
            <div class="w-full text-sm lg:text-base my-6 border-t-2 border-gray-300 py-2 flex items-center justify-center space-x-4">
                <span class="border-b-2 border-gray-300 dark:text-gray-300 hover:text-blue-500 p-1">ZALO: 0329878030</span>
                <span class="border-b-2 border-gray-300 dark:text-gray-300 hover:text-blue-500">
                    <a class="block p-1" href="https://www.facebook.com/hieu.vo.455609/?locale=vi_VN">Facebook (Hiếu Võ)</a>
                </span>
            </div>
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