<template>
<button type="button" @click="themeSwitch">
<v-icon 
    :name="showIcon ? icons.sun : icons.moon" 
    class=" text-[#ddd] w-[1.3rem] h-[1.3rem] 
        md:w-[2.5rem] md:h-[2.5rem] md:ml-3 mr-3 md:mr-7
        hover:text-[#ffffff88] transition-ease" 
    :class="showIcon ? 'text-yellow-200' : 'text-[#ddd]'"
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
    const userTheme = localStorage.getItem('theme'); // Get theme from localStorage
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const showIcon = ref(false)

  // Initial Theme check 
    const themeCheck = () => {  //
      if(userTheme === "dark" || (!userTheme && systemTheme)) {
        document.body.classList.add("dark");    
        showIcon.value = true;
        return;
      }else{
        showIcon.value = false;
      }
    }

    const toggleIcon = () => { // Toggle Icon
      showIcon.value = !showIcon.value
    }

    // Manual Theme Switch
    const themeSwitch = () => { // Manual Theme Switch
      if(document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        localStorage.setItem('theme', 'light');
        toggleIcon()
        return;
      }
      document.body.classList.add("dark");
      localStorage.setItem('theme', 'dark'); // Save theme to localStorage
      toggleIcon()
    }


    onMounted(() => { // Initial Theme check
      themeCheck();
    })

    return { themeSwitch, showIcon } 
  },
}
</script>