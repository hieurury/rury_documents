<template>
    <div class="py-8">
        <Notify 
            :title="lang === 'vi' ? 'Trang tài liệu của rury' : 'Rury documentation'"
            :message="lang === 'vi' ? 'Chào mừng đến với trang tài liệu của hieurury' : 'Welcome to the documentation page of hieurury'"
            :icon="'welcome'"
            :action="{
                path: '/documents',
                title: lang === 'vi' ? 'Khám phá ngay' : 'Get started'
            }"
        />
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Notify from '../components/Notify.vue';
import Button from '../components/Button.vue';
import data from '../data/documents.json';
import { lang } from '../composable/useLang';


onMounted(() => {
})
</script>

<style scoped>

</style>