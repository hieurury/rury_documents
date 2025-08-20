<template>
  <div :class="[
    {
      'lg:grid-cols-2 grid-row-2 gap-4 p-2': markdownType === 'practice' && layout[0] === 'both',
      'grid-cols-1 lg:px-[10%] p-2': markdownType === 'practice' && layout[0] !== 'both',
      'lg:px-[10%]': markdownType !== 'practice'
    }, 'grid'
  ]">
    <div v-show="markdownType === 'practice' && (layout[0] === 'compiler' || layout[0] === 'both')"
    class="">
      <EmbedCompiler 
      :key="isDark ? 'dark' : 'light'"
      :ready="compilerReady"
      :lang="programmingConfig?.lang" 
      :files="programmingConfig?.files" 
      :action="programmingConfig?.action"
      :height="720" />
    </div>
    <div 
    v-show="layout[0] === 'markdown' || layout[0] === 'both'" 
    id="markdown-container" 
    :class="[
      {
        'max-h-[720px] overflow-y-auto': layout[0] === 'both'
      },
      'container dark:bg-gray-700 dark:text-slate-300 px-4 py-12 shadow'
    ]">
      <span class="dark:bg-slate-900" v-html="markdownContent"></span>
    </div>

    <!-- nút đổi layout -->
    <span 
    v-if="markdownType === 'practice'" 
    @click="changeLayout" 
    class="fixed bottom-2 dark:text-gray-300 text-white right-2 text-lg px-4 rounded-md py-2 bg-orange-500/50">
    {{ lang === 'vi' ? 'Đổi layout' : 'Change layout' }}
  </span>
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
import EmbedCompiler from '../components/EmbedCompiler.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { lang } from '../composable/useLang'
import documents from '../data/documents.json'
import {dataConfig} from '../data/dataConfig.js'

const route = useRoute()
const layout = ref(['both', 'compiler', 'markdown'])
const markdownContent = ref('')
const markdownType = ref('')
const programmingConfig = ref(null)

const compilerReady = ref(false)

onMounted(async () => {
    await initMarkdown(lang.value);
    await initPrograming();
})

const changeLayout = () => {
  layout.value.push(layout.value.shift());
  console.log(layout.value);
}

const initMarkdown = async (lang) => {
  const id = route.params.id;
  const name = route.params.name;
  markdownType.value = documents.find(doc => doc.path === id)?.type;
  await loadMarkdown(`/documents/${id}/${name}-${lang}.md`);
}

const initPrograming = async () => {
  const id = route.params.id;
  const name = route.params.name;
  programmingConfig.value = dataConfig[id]?.[name];
  console.log(programmingConfig.value);
  compilerReady.value = true;
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
watch(layout, (newValue) => {
  if(newValue) {
    initMarkdown(lang.value);
  }
})

</script>



<style scoped>
#markdown-container {
  font-family: 'JetBrains Mono', monospace !important;
}
</style>