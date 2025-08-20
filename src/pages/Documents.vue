<template>
    <div class="py-4 lg:px-[10%] px-8">
        <h1 class="text-4xl uppercase dark:text-gray-300 border-b-2 pb-1 font-semibold my-4">{{ lang === 'vi' ? 'Tài liệu hiện có' : 'Current documents' }}</h1>
        <ul class="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <li v-for="item in documents" :key="item.path">
                <Card 
                    :title="item.name[lang]"
                    :description="item.description[lang]"
                    :path="`/documents/${item.path}`"
                    :logo="item.logo"
                    :color="item.color"
                    :author="item.author"
                    :countDoc="data[item.path]?.data?.length || 0"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import documents from '../data/documents.json';
import data from '../data/data.json';
import Card from '../components/Card.vue';
import { lang } from '../composable/useLang';


onMounted(() => {
    console.log(documents);
});
</script>

<style scoped>

</style>