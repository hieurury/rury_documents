<template>
    <header class="flex flex-col bg-white dark:bg-gray-800 shadow-md px-[10%]">
        <nav class="flex items-center justify-between p-4">
            <div class="flex items-center lg:space-x-4 space-x-2">
                <span class="lg:w-16 lg:h-16 w-8 h-8 block rounded-full bg-orange-300 overflow-hidden">
                    <img class="w-full h-full object-cover" src="/imgs/logo-nobg.png" alt=""></img>
                </span>
                <span class="lg:text-lg text-sm font-semibold dark:text-slate-300">RuryDocs</span>
            </div>
            <div class="flex items-center space-x-4">
                <ul class="lg:flex hidden justify-center items-center space-x-4">
                    <li><a href="/" class="dark:text-gray-300">{{ lang == 'vi' ? 'Trang chủ' : 'Home' }}</a></li>
                    <li><a href="/documents" class="dark:text-gray-300">{{ lang == 'vi' ? 'Tài liệu' : 'Documents' }}</a></li>
                    <li><a href="/compiler" class="dark:text-gray-300">{{ lang == 'vi' ? 'Biên dịch' : 'Compiler' }}</a></li>
                </ul>
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
        <ul class="lg:hidden flex py-2 border-t-1 border-gray-500 justify-center items-center space-x-4">
            <li><router-link to="/" class="dark:text-gray-300">{{ lang == 'vi' ? 'Trang chủ' : 'Home' }}</router-link></li>
            <li><router-link to="/documents" class="dark:text-gray-300">{{ lang == 'vi' ? 'Tài liệu' : 'Documents' }}</router-link></li>
            <li><router-link to="/compiler" class="dark:text-gray-300">{{ lang == 'vi' ? 'Biên dịch' : 'Compiler' }}</router-link></li>
        </ul>
    </header>
    <main class=" dark:bg-gray-700 min-h-screen">
        <router-view></router-view>
    </main>
    <footer>
        <div class="bg-gray-800 text-white py-4 text-center">
            <p class="text-sm">{{ lang === 'vi' ? `© ${currentYear} RuryDocs. Quyền được bảo lưu bởi hieurury.` : `© ${currentYear} RuryDocs. All rights reserved by hieurury.` }}</p>
            <p class="text-xs my-2">{{ lang === 'vi' ? 'Được thực hiện bởi Hiếu Võ (hieurury)' : 'Made by Hiếu Võ (hieurury)' }}</p>
            <p class="text-xs my-2">❤️❤️❤️</p>
        </div>
    </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { lang, toggleLang } from '../composable/useLang';
import { isDark, toggleTheme } from '../composable/useTheme';


const currentYear = new Date().getFullYear();
</script>

<style scoped>

</style>