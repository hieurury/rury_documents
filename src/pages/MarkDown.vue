<template>
  <div id="markdown-container" class="container dark:bg-gray-700 dark:text-slate-300 px-6 py-12 shadow">
    <span class="dark:bg-slate-900" v-html="markdownContent"></span>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, watch } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'github-markdown-css/github-markdown-light.css'
import { isDark } from '../composable/useTheme'
if (isDark.value) {
  import('highlight.js/styles/github-dark.css')
} else {
  import('highlight.js/styles/github.css')
}
import axios from 'axios'
import { useRoute } from 'vue-router'
import { lang } from '../composable/useLang'

const route = useRoute()

const markdownContent = ref('')


onMounted(async () => {
    await initMarkdown(lang.value);
})

const initMarkdown = async (lang) => {
  const id = route.params.id;
  const name = route.params.name;
  console.log(id);
  await loadMarkdown(`/documents/${id}/${name}-${lang}.md`);
}

const loadMarkdown = async (url) => {
  const response = await axios.get(url);
  console.log(marked(response.data));
  markdownContent.value = marked(response.data);
  await nextTick();
   document.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block)
    const copyBtn = document.createElement('button');
    copyBtn.innerText = 'Copy';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(block.innerText);
      copyBtn.innerText = 'Copied!';
      setTimeout(() => {
        copyBtn.innerText = 'Copy';
      }, 2000);
    });
    block.parentElement.appendChild(copyBtn);
  })
}


watch(() => isDark.value, (newValue) => {
  if (newValue) {
    import('highlight.js/styles/github-dark.css')
  } else {
    import('highlight.js/styles/github.css')
  }
})

watch(lang, (newValue) => {
  initMarkdown(newValue);
})

</script>



<style scoped>
#markdown-container {
  font-family: 'JetBrains Mono', monospace !important;
}
</style>