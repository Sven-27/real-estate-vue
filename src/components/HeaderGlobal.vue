<template>
<header class="bg-[#00AAA2]">
  <div class="flex justify-end items-center p-1 md:py-2">
  <v-icon 
    :name="icons.square" 
    class="oh-vue-header" 
  />
  <v-icon 
    :name="icons.circle" 
    class="oh-vue-header" 
  />
  <v-icon 
    :name="icons.triangle" 
    class="oh-vue-header rotate-180" 
  />
  </div>
  <div class="flex bg-[#293439] justify-between">
    <router-link to="/">
      <img 
        :src="getImgUrl('logo-horizontal-light.svg')" 
        :alt="getImgUrl('logo-horizontal-light.svg')"
        class="w-48 md:w-96 pl-2 py-3 md:pl-7"
      />
    </router-link>
    <div class="flex box-border w-50 items-center 
    pr-3 md:pr-7">
      <v-icon 
        :name="icons.bell" 
        class="text-[#ddd] w-[1.3rem] h-[1.3rem] 
        md:w-[2.5rem] md:h-[2.5rem] mr-4 md:mr-7" 
      />
      <v-icon 
        :name="icons.gear" 
        class="text-[#ddd] w-[1.3rem] h-[1.3rem] 
        md:w-[2.5rem] md:h-[2.5rem] mr-4 md:mr-7" 
      />
    </div>
  </div>
</header>
</template>
<script>
import mixin from '@/mixins/mixins'
import icons from '@/data/icons'

export default {
  name: 'HeaderGlobal',
  mixins: [mixin], // Haalt de functie getImgUrl() op uit de mixin
  data() {
    return {
      icons
    }
  }
}
</script>
