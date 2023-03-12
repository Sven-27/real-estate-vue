<template>
<div class="flex items-center m-3 md:m-6 dark:text-white justify-center">
  <v-icon 
    :name="icons.information" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Information about project</span>
</div>
<article class="flex flex-col items-center">
  <header class="text-center">
    <h1 class="text-4xl font-bold mb-3">Real Estate Vue</h1>
    <p>Hier vind u het&nbsp;<span class="uppercase font-semibold text-[#00AAA2]">read.me</span>&nbsp;bestand voor dit project</p>
    <p>Eindopdracht Front-end frameworks door: <br><span class="text-[#00AAA2] ">Sven Notermans</span></p>
  </header>
</article>
<BackButton />
</template>
<script>
import icons from '@/data/icons.js'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'ProjectInformation',
  data() {
    return {
      icons,
    }
  },
  components: {
    BackButton
  },
}
</script>