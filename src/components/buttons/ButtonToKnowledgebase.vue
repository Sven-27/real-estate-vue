<template>
<router-link 
  to="/knowledge-base">
  <div class="grid place-items-center mb-4">
    <button 
      type="button"
      class="bg-[#00AAA2] flex items-center text-white text-md md:text-xl 
        py-2 px-3 rounded-md mt-4 hover:bg-[#39b7b1]"
    >
      <v-icon 
        :name="icons.documentSearch" 
        class="mr-1 w-4 h-4 md:w-6 md:h-6" 
      />
      <slot></slot>
    </button>
  </div>
</router-link>
</template>
<script>
import icons from '@/data/icons.js'
export default {
  name: 'ButtonToKnowledgebase',
  data() {
    return {
      icons 
    }
  }
}
</script>
