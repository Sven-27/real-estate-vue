<template>
<div>Active
  <LoadingStatus v-if="loading" />
  <Errors v-if="error" />
</div>
</template>
<script>
import LoadingStatus from '@/components/LoadingStatus.vue'
import Errors from '@/components/ErrorList.vue'

export default {
  name: 'ActiveInspection',
  created() {
    this.id = +this.$route.params.id
  },
  components: {
    LoadingStatus,
    Errors
  },
  computed: {
    findInspections(){
      return this.$store.getters['inspectionData/findInspections'](this.id)
    },
    filterInspections(){
      return this.$store.getters['inspectionData/filterInspections'](this.id)
    },
    loading() {
      return this.$store.state.inspectionData.loading === true
    },
    error() {
      return this.$store.state.inspectionData.errors.length > 0
    }
  },   
  mounted() {
    this.$store.dispatch('inspectionData/fetchInspections') // Haalt de inspecties op
  },
}
</script>