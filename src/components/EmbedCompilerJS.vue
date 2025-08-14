<template>
  <div class="relative">
    <!-- Loader overlay -->
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-gray-800/70 z-10"
    >
      <div class="flex flex-col items-center">
        <span class="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></span>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">{{ lang === 'vi' ? 'Dựng trình biên dịch..' : 'Loading Compiler..' }}</span>
      </div>
    </div>

    <iframe
      ref="frame"
      @load="onLoad"
      :src="src"
      width="100%"
      height="520"
      style="border:0; overflow:hidden;"
      loading="lazy"
      allow="accelerometer; camera; microphone; geolocation; midi; clipboard-read; clipboard-write"
      class="block w-full rounded shadow"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { lang } from '../composable/useLang'
const src = ref('https://stackblitz.com/edit/js?embed=1&file=index.js&hideExplorer=1&hideNavigation=1')
const frame = ref(null)
const loading = ref(true)
let timeoutId

const onLoad = () => {
  loading.value = false
  if (timeoutId) clearTimeout(timeoutId)
}

// Fallback: nếu embed treo lâu, vẫn giữ loader kèm thông báo hoặc thử lại
onMounted(() => {
  timeoutId = setTimeout(() => {
    // vẫn loading sau 15s → có thể đổi src hoặc hiển thị thông báo
    loading.value = true
  }, 15000)
})

onBeforeUnmount(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<style scoped>
/* ...existing code... */
</style>