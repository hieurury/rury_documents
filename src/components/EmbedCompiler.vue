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
import { ref, onMounted, defineProps, watch, computed } from 'vue'
import sdk from '@stackblitz/sdk'
import { lang } from '../composable/useLang'
import { isDark } from '../composable/useTheme'


const props = defineProps({
  files: {
    type: Object,
    default: () => ({
      'index.html': `<div id="app">Hello there!</div>`,
      'style.css': `body { font-family: system-ui; padding: 16px; } h1 { color: #f97316; }`,
      'index.js': `import './style.css'; const app = document.getElementById('app'); app.innerText = 'Welcome to RuryDocs!';`
    })
  },
  lang: {
    type: String,
    default: 'javascript'
  },
  action: {
    type: String,
    default: ''
  },
  ready: {
    type: Boolean,
    default: false
  },
  height: {
    type: Number,
    default: 520
  }
})
const embedTheme = computed(() => (isDark.value ? 'dark' : 'light'))
const container = ref(null)
const loading = ref(true)
let vm //máy ảo của stackBlitz

onMounted(async () => {
  createVm();
})

const createVm = async () => {
  if(!props.ready || !container.value) {
    loading.value = true;
  }

  container.value.innerHTML = '';

  try {
    if(props.ready) {
      vm = await sdk.embedProject(
        container.value,
        {
          title: 'RuryDocs Playground',
          description: 'Editable JS playground',
          template: props.lang,
          files: {
            ...props.files
          },
        },
        {
          height: props.height,
          hideExplorer: true,
          hideNavigation: true,
          theme: embedTheme.value,
          view: 'both',
        }
      )
      await vm.editor.openFile(props.action || Object.keys(props.files).join(','))
    } else {
      container.value.innerHTML = `<h1 class="text-center text-gray-300">${props.lang === 'vi' ? 'Đang tải trình biên dịch...' : 'Loading Compiler...'}</h1>`
    }
  } finally {
    loading.value = false
  }
}

// Ví dụ cập nhật nội dung sau này
// async function setCode(newJs) {
//   if (!vm) return
//   await vm.applyFsDiff({
//     create: { 'index.js': newJs },
//     destroy: []
//   })
// }

watch(
  () => [props.ready, props.lang, props.files, props.action, embedTheme.value],
  async () => {
    if (!container.value) return
    await createVm();
  },
  { deep: true }
)
</script>

<style scoped>
</style>