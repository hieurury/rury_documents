import {ref, watch} from 'vue';

const isDark = ref(localStorage.getItem('dark') === 'true');

watch(isDark, (newValue) => {
    localStorage.setItem('dark', newValue);
    document.documentElement.classList.toggle('dark', newValue);
});

const toggleTheme = () => {
    isDark.value = !isDark.value;
}

export {
    isDark,
    toggleTheme
}
