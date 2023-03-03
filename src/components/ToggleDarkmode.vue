<template>
<button type="button" @click="themeSwitch">
<v-icon 
    :name="showIcon ? icons.sun : icons.moon" 
    class="w-10 h-10 text-yellow-500" 
  />
  </button>
</template>
<script>
import {  onMounted, ref } from 'vue'
import icons from '@/data/icons'
export default {
  name: 'ToggleDarkmode',
  data() {
    return {
      icons,
    }
  },
  setup() { 
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const showIcon = ref(false)
  // Initial Theme check
    const themeCheck = () => {
      if(userTheme === "dark" || (!userTheme && systemTheme)) {
        document.body.classList.add("dark");    
        return;
      }
    }

    const toggleIcon = () => {
      showIcon.value = !showIcon.value
    }

    // Manual Theme Switch
    const themeSwitch = () => {
      if(document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        localStorage.setItem('theme', 'light');
        toggleIcon()
        return;
      }
      document.body.classList.add("dark");
      localStorage.setItem('theme', 'dark');
      toggleIcon()
    }


    onMounted(() => {
      themeCheck();
    })

    return { themeSwitch, showIcon } 
  },
}
</script>