<template>
<div class="flex items-center m-3 md:m-6 dark:text-white justify-center">
  <v-icon 
    :name="icons.search" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Search Inspection</span>
</div>
<div class="mx-3 text-sm md:text-2xl md:mx-auto md:w-[70%] xl:w-[50%]">
  <label for="location-overdue">Vul hier in wat u wilt zoeken:</label>
  <input
    type="text"
    id="location-overdue"
    required
    name="location-overdue"
    class="w-full border mt-2 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent"
    placeholder="Vul hier in wat u wilt zoeken"
    />
</div>
<ButtonToKnowledgebase>Search</ButtonToKnowledgebase>
</template>
<script>
import icons from '@/data/icons.js'
import ButtonToKnowledgebase from '@/components/ButtonToKnowledgebase.vue'

export default {
  name: 'SearchInspections',
  data() {
    return {
      icons
    }
  },
  components: {
    ButtonToKnowledgebase
  }
}
</script>