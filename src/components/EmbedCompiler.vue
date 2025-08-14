<template>
  <div class="relative">
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-gray-800/70 z-10">
      <div class="flex flex-col items-center">
        <span class="w-8 h-8 border-2 border-orange-500 border-top-transparent rounded-full animate-spin"></span>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">{{ lang === 'vi' ? 'Dựng trình biên dịch..' : 'Loading Compiler..' }}</span>
      </div>
    </div>

    <!-- Container để SDK render vào -->
    <div ref="container" class="block w-full rounded shadow bg-white dark:bg-gray-800" style="height:520px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import sdk from '@stackblitz/sdk'
import { lang } from '../composable/useLang'


const props = defineProps({
  html: {
    type: String,
    default: `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Playground</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Hi, there! Nice to meet you!</h1>
        <div id="app"></div>
      </body>
    </html>`
  },
  css: {
    type: String,
    default: `
    body {
      font-family: system-ui;
      padding: 16px;
    }
    h1 {
      color: #f97316;
    }`
  },
  js: {
    type: String,
    default: `
    const app = document.getElementById('app')
    app.innerText = 'Welcome to RuryDocs!'
    `
  }
})

const container = ref(null)
const loading = ref(true)
let vm // StackBlitz VM

// Nội dung mặc định (có thể nhận qua props)
onMounted(async () => {
  try {
    vm = await sdk.embedProject(
      container.value,
      {
        title: 'RuryDocs Playground',
        description: 'Editable JS playground',
        template: 'javascript',        // hoặc 'node' | 'vite' | 'angular' | 'vue'
        files: {
          'index.html': props.html,
          'index.js': props.js,
          'style.css': props.css,
        },
      },
      {
        height: 520,
        openFile: ['style.css,index.html,index.js'], //này đúng rồi
        hideExplorer: true,
        hideNavigation: true,
        view: 'both',
      }
    )
  } finally {
    loading.value = false
  }
})

// Ví dụ cập nhật nội dung sau này
// async function setCode(newJs) {
//   if (!vm) return
//   await vm.applyFsDiff({
//     create: { 'index.js': newJs },
//     destroy: []
//   })
// }
</script>

<style scoped>
/* ...existing code... */
</style>