<template>
    <component 
        :is="link ? 'router-link' : 'button'" 
        :to="link || undefined"
        v-bind="$attrs"
        class="flex items-center justify-center dark:bg-slate-600 bg-slate-50 p-2 shadow-[0px_4px_0px] rounded-md cursor-pointer dark:text-gray-300
        active:translate-y-1 active:shadow-none transition-all duration-150 active:bg-slate-500/20">
        <slot>{{ title }}</slot>
    </component>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
    }
});
</script>

<style lang="scss" scoped>

</style>