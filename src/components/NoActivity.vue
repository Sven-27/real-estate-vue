<template>
<div class="flex justify-center items-center m-3 md:m-6 dark:text-white">
  <v-icon 
    :name="icons.wrench" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Active Task</span>
</div>
  <p class="text-md text-center md:text-4xl mb-4+ ">Op dit moment zijn er geen actieve taken.</p>
  <BackButton />
</template>
<script>
import BackButton from '@/components/BackButton.vue'  
import icons from '@/data/icons.js'

export default {
  name: 'NoActivity',
  data() {
    return {
      icons,
    }
  },
  components: {
    BackButton,
  },
}
</script>