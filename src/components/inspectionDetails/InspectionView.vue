<template>
<!-- Component die de inspecties weergeeft -->
<div class="inspection flex flex-col items-center 
justify-center md:p-5">
  <h2 class="font-bold py-1 text-xl md:text-4xl md:py-5">
    Inspection Locations
  </h2>
  <div class="grid place-items-center w-full md:grid-cols-2 
  xl:grid-cols-3 my-3 gap-4 md:gap-5"
  >
    <router-link
      v-for="inspection in sorted"
      :key="inspection.id"
      :to="'/inspection-detail/' + inspection.id"
      class="w-10/12 md:w-full grid place-items-center"
    >
      <ul class="flex flex-col list-none text-[15px] border-[1px] border-[#293439] 
      py-3 px-5 text-xl w-10/12 rounded-md md:text-2xl md:w-full">
        <li class="inspection-info">
          <span class="font-bold">Adres:</span>
          {{" "}}{{ inspection.address }}
        </li>
        <li class="inspection-info">
          <span class="font-bold">Soort woning:</span>
          {{" "}}{{ inspection.name }}
        </li>
        <li class="inspection-info">
          <span class="font-bold">Postcode:</span>
          {{" "}}{{ inspection.zipcode}}
        </li>
        <li class="inspection-info">
          <span class="font-bold">Plaats:</span>
          {{" "}}{{ inspection.city }}
        </li>
        <li class="inspection-info">
          <span class="font-bold">Datum:</span>
          {{" "}}{{ inspection.date }}
        </li>
        <li class="inspection-info">
          <span class="font-bold">ID:</span>
          {{" "}}{{ inspection.id }}
        </li>
      </ul>
    </router-link>
  </div>
  <LoadingStatus
    className="flex justify-center items-center"
    v-if="loading"
  />
  <Errors v-if="error" />
</div>
</template>
<script> 
import LoadingStatus from '@/components/LoadingStatus.vue'
import Errors from '@/components/ErrorList.vue'

export default {
  name: 'InspectionView',
  components: {
    LoadingStatus,
    Errors
  },
  computed: {
    sorted() {
      return this.$store.getters['inspectionData/sortInspections']
    },
    loading() {
      return this.$store.state.inspectionData.loading === true
    },
    error() {
      return this.$store.state.inspectionData.errors.length > 0
    }
  },
  mounted() {
    this.$store.dispatch('inspectionData/fetchInspections')
  },
}
</script>