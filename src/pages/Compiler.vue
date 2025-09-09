<template>
  <header class="dark:bg-slate-800 bg-white text-gray-800 py-6 shadow-md border-b-2 border-gray-300">
    <nav class="flex justify-between items-center px-4">
      <div class="flex items-center justify-between">
        <div class="flex justify-center items-center text-lg font-semibold dark:text-slate-300 group">
          <span class="group-hover:text-orange-500">
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
            </svg>
          </span>
          <router-link to="/" class="group-hover:translate-x-2 transition-all duration-100">{{ lang === 'vi' ? 'Trở lại trang chủ' : 'Back to home' }}</router-link>
        </div>
      </div>

      <!--  -->
      <div class="flex items-center space-x-4">
          <div class="lg:flex hidden justify-center items-center space-x-4">
              <button class="dark:text-gray-300 text-gray-800 cursor-pointer" @click="setLang('javascript')">JavaScript</button>
              <button class="dark:text-gray-300 text-gray-800 cursor-pointer" @click="setLang('html')">HTML</button>
              <button class="dark:text-gray-300 text-gray-800 cursor-pointer" @click="setLang('css')">CSS</button>
              <button class="dark:text-gray-300 text-gray-800 cursor-pointer" @click="setLang('vue')">Vue</button>
              <button class="dark:text-gray-300 text-gray-800 cursor-pointer" @click="setLang('node')">Node.js</button>

          </div>
          <div class="flex items-center space-x-4 border-l-2 pl-2 dark:border-gray-600">
              <button @click="toggleLang">
                  <span v-if="lang === 'vi'" class="flex items-center space-x-1 dark:text-gray-300">
                      <img class="w-10 h-10 object-cover" src="/imgs/vie-flag.svg" alt="">
                      <span>Vie</span>
                  </span>
                  <span v-else class="flex items-center space-x-1 dark:text-gray-300">
                      <img class="w-10 h-10 object-cover" src="/imgs/en-flag.svg" alt="">
                      <span>Eng</span>
                  </span>
              </button>
              <button @click="toggleTheme" class="">
                  <span v-if="!isDark">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
                      </svg>
                  </span>
                  <span v-else>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
                      </svg>
                  </span>
              </button>
          </div>
      </div>
    </nav>
  </header>
    <div class="dark:bg-slate-800 bg-white text-gray-800 min-h-screen lg:px-0 px-4">
        <div v-if="!selectedLanguage" class="lg:px-[10%] py-4">
            <h1 class="lg:text-4xl text-2xl uppercase my-4 font-semibold dark:text-slate-300">{{ lang === 'vi' ? 'Trình biên dịch tích hợp' : 'Integrated Compiler' }}</h1>
            <h3 class="lg:text-2xl text-lg my-2 font-semibold dark:text-slate-300">{{ lang === 'vi' ? 'Chọn loại ngôn ngữ bắt đầu' : 'Select a programming language to start' }}</h3>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-2 border-t-2 pt-4 border-gray-300">
                <button class="text-lg hover:scale-105 transition-all duration-100 cursor-pointer uppercase font-bold tracking-wider text-gray-700 min-h-36 px-4 py-2 border rounded bg-contain bg-amber-300 bg-no-repeat bg-[url('/imgs/js-logo.svg')]" @click="setLang('javascript')">JavaScript</button>
                <button class="text-lg hover:scale-105 transition-all duration-100 cursor-pointer uppercase font-bold tracking-wider text-gray-700 min-h-36 px-4 py-2 border rounded bg-amber-600 bg-contain bg-no-repeat bg-[url('/imgs/html-logo.svg')]" @click="setLang('html')">HTML</button>
                <button class="text-lg hover:scale-105 transition-all duration-100 cursor-pointer uppercase font-bold tracking-wider text-gray-700 min-h-36 px-4 py-2 border rounded bg-sky-500 bg-contain bg-no-repeat bg-[url('/imgs/css-logo.svg')]" @click="setLang('css')">CSS</button>
                <button class="text-lg hover:scale-105 transition-all duration-100 cursor-pointer uppercase font-bold tracking-wider text-gray-700 min-h-36 px-4 py-2 border rounded bg-emerald-400 bg-contain bg-no-repeat bg-[url('/imgs/vue-logo.svg')]" @click="setLang('vue')">Vue</button>
                <button class="text-lg hover:scale-105 transition-all duration-100 cursor-pointer uppercase font-bold tracking-wider text-gray-700 min-h-36 px-4 py-2 border rounded bg-green-700 bg-contain bg-no-repeat bg-[url('/imgs/node-logo.svg')]" @click="setLang('node')">Node.js</button>
            </div>
        </div>
        <div class="relative w-full grid grid-cols-4 shadow-md py-2">
            <div :id="containerId" class="lg:col-span-3 col-span-4"></div>
            <div class="col-span-1"></div>
            <div v-if="loading && selectedLanguage" class="absolute inset-0 flex flex-col items-center justify-center bg-white/70 dark:bg-gray-800/70 z-10">
                <Loader />
                <span class="text-lg dark:text-gray-300">{{ lang === 'vi' ? 'Đang dựng trình biên dịch...' : 'Building compiler...' }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import sdk from '@stackblitz/sdk'
import { lang, toggleLang } from '../composable/useLang';
import { isDark, toggleTheme } from '../composable/useTheme';
import { programingConfig } from '../composable/usePrograming';
import Loader from '../components/Loader.vue';


const selectedLanguage = ref(null);
const setLang = (lang) => {
    selectedLanguage.value = lang;
};
const containerCounterId = ref(0);
const loading = ref(true);

const containerId = ref(`container-${containerCounterId.value++}`);

//dữ liệu để cấu hình cho trình biên dịch theo từng loại ngôn ngữ
const config = programingConfig;

let vm;

//setup compiler
const loadCompiler = async (language) => {
  loading.value = true;

  containerCounterId.value++;
  
  // Đợi next tick để DOM cập nhật với container ID mới
  await nextTick();
  
  // Lấy container với ID mới
  const containerEl = document.getElementById(containerId.value);
    try {
        vm = await sdk.embedProject(
            containerEl,
            {
                title: 'RuryDocs Playground',
                description: 'Editable JS playground',
                template: config[language].lang,
                files: {
                    ...config[language].files
                },
            },
            {
                height: 720,
                hideExplorer: false,
                hideNavigation: false,
                view: 'both',
            }
        )
        await vm.editor.openFile(config[language].action);
        loading.value = false;
    } catch (error) {
        console.error('Error loading compiler:', error);
    }
}

//lắng nghe đổi ngôn ngữ để setup lại compiler
watch(selectedLanguage, (newLang) => {
    if(newLang) {
        loadCompiler(newLang);
    }
});
</script>

<style scoped>

</style>