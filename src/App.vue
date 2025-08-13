<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { lang } from './composable/useLang';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  //set theme
  const isDark = localStorage.getItem('dark') === 'true';
  document.documentElement.classList.toggle('dark', isDark);
  initFlowbite();
});

</script>

<style scoped>

</style>