import {ref, watch} from 'vue';

const lang = ref(localStorage.getItem('lang') || 'vi');

watch(lang, (newLang) => {
    localStorage.setItem('lang', newLang);
});

const toggleLang = () => {
    lang.value = lang.value === 'vi' ? 'en' : 'vi';
}

export {
    lang,
    toggleLang
}
