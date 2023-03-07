<template>
<div class="flex items-center m-3 md:m-6 dark:text-white justify-center">
  <v-icon 
    :name="icons.wrench" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Active Task</span>
</div>
  <div
    class="flex card  md:mt-2 flex-col text-sm md:text-2xl px-3
    md:w-[70%] xl:w-[50%] w-full mx-auto" 
     v-for="inspection in filterInspections" 
    :key="inspection.id"
  >
  <div class="w-full flex justify-between dark:bg-[#455359] bg-white 
  rounded-md px-3 py-1 border-b-[1px]">
    <div>
      {{ inspection.address + ", " + inspection.zipcode  }}<br />
      {{ inspection.city }}
    </div> 
    <div>
      ID: {{ inspection.idType }}{{ inspection.id }}
    </div>
  </div>
  <div class="flex justify-between border-b-[1px]  my-3
  dark:bg-[#455359] bg-white rounded-md px-3 py-1">
    <p class="flex flex-col">Datum: 
      <span>{{ inspection.date }}</span>
    </p>
    <p class="flex flex-col">Inspecteur: 
      <span>{{ user }}</span>
    </p>
  </div>
  <SurveyOfDamage 
    :locationDamage="inspection.surveyOfDamage.location" 
    :dateDamage="inspection.surveyOfDamage.date"
    :descriptionDamage="inspection.surveyOfDamage.description"
  />
  <OverdueMaintenance 
    :locationOverdue="inspection.overdueMaintenance.location"
   />
  <TechnicalInstallation 
    :locationInstallation="inspection.technicalInstallation.location"
    :descriptionInstallation="inspection.technicalInstallation.reportedFailures"
    :descriptionInstallationRemarks="inspection.technicalInstallation.comments"
  />
  <ModificationItems 
    :descriptionModifications="inspection.modifications.description"
    :locationModification="inspection.modifications.location"
   />

    <div class="grid place-items-center mb-4">
      <button 
        type="button"
        class="bg-[#00AAA2] flex items-center text-white text-md md:text-xl 
          py-2 px-3 rounded-md mt-4 hover:bg-[#39b7b1]"
      >
        <v-icon 
          :name="icons.completed" 
          class="mr-1 w-4 h-4 md:w-6 md:h-6" 
        />
        Formulier voltooid
      </button>
    </div>
  </div>
<BackButton />
<LoadingStatus v-if="loading" />
<Errors v-if="error" />
</template>
<script>
import LoadingStatus from '@/components/LoadingStatus.vue'
import Errors from '@/components/ErrorList.vue'
import icons from '@/data/icons.js'
import BackButton from '@/components/BackButton.vue'
import SurveyOfDamage from '@/components/categoryForms/SurveyOfDamage.vue'
import OverdueMaintenance from '@/components/categoryForms/OverdueMaintenance.vue'
import TechnicalInstallation from '@/components/categoryForms/TechnicalInstallation.vue'
import ModificationItems from '@/components/categoryForms/ModificationItems.vue'

export default {
  name: 'ActiveInspection',
  
  created() {
    this.id = +this.$route.params.id
  },
  data() {
    return {
      icons,
    }
  },
  components: {
    LoadingStatus,
    Errors,
    BackButton,
    SurveyOfDamage,
    OverdueMaintenance,
    TechnicalInstallation,
    ModificationItems,
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
    },
    user() {
      const data = this.$store.getters['firebase/user']
      return data.data.displayName
    },
  },   
  mounted() {
    this.$store.dispatch('inspectionData/fetchInspections') // Haalt de inspecties op
  },
}
</script>