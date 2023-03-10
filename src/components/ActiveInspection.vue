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
  <div class="flex justify-center my-3">
  <div>
    <input
      class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#00AAA2] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#00AAA2] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-[#00AAA2] checked:focus:bg-[#00AAA2] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
      type="checkbox"
      role="switch"
      v-model="checked"
      id="flexSwitchCheckDefault" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="flexSwitchCheckDefault"
      >Naar waarheid ingevuld</label
    >
  </div>
</div>
  <div class="grid place-items-center mb-4">
    <button 
      type="button"
      :disabled="!checked"
      @click="setCompleted"
      :class="{ 'opacity-25 cursor-not-allowed': !checked }"
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
    // this.complete = JSON.parse(localStorage.getItem('test') || '[]')
  },
  data() {
    return {
      icons,
      checked: false,
      complete: []
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
   setCompleted() {
    this.$store.getters['inspectionData/findInspections'](this.id).completed = true
    const saveInspection = this.$store.getters['inspectionData/findInspections'](this.id)
    if(localStorage.getItem('test') === null) {
      localStorage.setItem('test', '[]')
    }
    const test = JSON.parse(localStorage.getItem('test'))
    test.push(saveInspection)
      
    return localStorage.setItem('test', JSON.stringify(test))
    },
   
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