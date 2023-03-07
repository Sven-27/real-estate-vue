<template>
<div class="flex justify-between md:justify-center 
w-full bg-[#00AAA2]  xl:py-0 px-8">
  <router-link 
    class="task-container"
    :to="'/active/' + id"
  >
    <v-icon 
      :name="icons.wrench" 
      class="oh-vue-task" 
    />
    <p>active task</p>
  </router-link>
  <router-link
    to="/search"
    class="task-container"
  >
    <v-icon 
      :name="icons.search" 
      class="oh-vue-task" 
    />
    <p>search</p>
  </router-link>
  <router-link 
    class="task-container" 
    to="/inspection"
  >
    <v-icon 
      :name="icons.information" 
      class="oh-vue-task" 
    />
    <p>information</p>
  </router-link>
</div>
</template>
<script>
import  icons  from '@/data/icons'

export default {
  name: 'TaskItems',
  data() {
    return {
      icons,
      id: 2006487
    }
  },
  computed: {
    find() {
      return this.$store.getters['inspectionData/findInspections'](this.id)    }
  },
  mounted() {
    this.$store.dispatch('inspectionData/fetchInspections') // Haalt de inspecties op
  },
}
</script>