<template>
<div class="flex items-center m-3 md:m-6 dark:text-white justify-center">
  <v-icon 
    :name="icons.completed" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Inspectie(s) afgehandeld</span>
</div>
<p class="text-center mb-4 md:mb-6 text-sm md:text-xl">
  Hieronder vindt u een overzicht van de inspecties die u heeft afgerond. 
  Klik op een inspectie om de checklist te bekijken of te bewerken.
</p>
<div id="accordionFlushExample"
  class=" md:w-[80%] xl:w-[50%] w-full mx-auto"
>
  <div
    class="rounded-none m-5 border border-t-0 border-l-0 border-r-0 border-neutral-200 
    bg-white dark:border-neutral-600 dark:bg-neutral-800 "
    v-for="inspection in isCompleted"
    :key="inspection.id"
  >
    <h2 class="mb-0" id="heading">
      <button
        class="group relative flex w-full items-center rounded-none border-0  
        bg-white py-4 px-5 text-left text-sm md:text-2xl text-neutral-800 transition 
        [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
        dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white 
        [&:not([data-te-collapse-collapsed])]:text-[#00AAA2] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] 
        dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 
        dark:[&:not([data-te-collapse-collapsed])]:text-[#00AAA2] dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        :data-te-target="'#collapse' + inspection.id"
        aria-expanded="false"
        :aria-controls="'collapse' + inspection.id"
        >
        <div>
          {{ inspection.address + ", " + inspection.zipcode  }}<br />
          {{ inspection.city }}
        </div>
        <span class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform 
          duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 
          group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 
          dark:group-[[data-te-collapse-collapsed]]:fill-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      :id="'collapse' + inspection.id"
      class="!visible hidden border-0"
      data-te-collapse-item
      :aria-labelledby="'heading' + inspection.id"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5 text-sm md:text-2xl">
        <div class="flex justify-between border-b-[1px] pb-3 mb-3">
          <p class="flex flex-col">Datum: 
            <span>{{ inspection.date }}</span>
          </p>
          <p class="flex flex-col">Inspecteur: 
            <span>{{ user }}</span>
          </p>
        </div>
        <div>
          <p>ID Nummer: <span>{{inspection.idType}}{{ inspection.id }}</span></p>
          <section class="list-none py-4 border-b-[1px] mb-3">
            <h2 class="static-list text-header-color">
              <v-icon 
                :name="icons.house" 
                class="static-list-icons" 
              />
              Inventarisatie van schade
            </h2>
            <p class="paragraph-completed">
              <span>Locatie schade:</span>
              {{ inspection.surveyOfDamage.location }}
            </p>
            <p class="paragraph-completed">
              <span>Nieuwe of bestaande schade:</span>
              {{ inspection.surveyOfDamage.newDamage }}
            </p>
            <p class="paragraph-completed">
              <span>Soort schade:</span>
              {{ inspection.surveyOfDamage.typeOfDamage }}
            </p>
            <p class="paragraph-completed">
              <span>Datum schade:</span>
              {{ inspection.surveyOfDamage.date }}
            </p>
            <p class="paragraph-completed">
              <span>Actie:</span>
              {{ inspection.surveyOfDamage.requiredAction }}
            </p>
            <p class="paragraph-completed">
              <span>Omschrijving schade:</span>
              {{ inspection.surveyOfDamage.description }}
            </p>
            <p class="paragraph-completed border-none">
              <span>Foto's schade:</span>
              <span class="flex flex-wrap gap-x-5 mt-3">
              <img 
                :src="getPhotos('huis-een.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-twee.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-drie.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36  object-cover"
              />
              </span>
            </p>
          </section>
          <section class="list-none py-4 border-b-[1px] mb-3">
            <h2 class="static-list text-header-color">
              <v-icon 
                :name="icons.damage" 
                class="static-list-icons" 
              />
              Achterstallig onderhoud
            </h2>
            <p class="paragraph-completed">
              <span>Locatie achterstallig onderhoud:</span>
              {{ inspection.overdueMaintenance.location }}
            </p>
            <p class="paragraph-completed">
              <span>Soort onderhoud:</span>
              {{ inspection.overdueMaintenance.typeOfMaintenance }}
            </p>
            <p class="paragraph-completed">
              <span>Vereiste actie:</span>
              {{ inspection.overdueMaintenance.requiredAction }}
            </p>
            <p class="paragraph-completed">
              <span>Kosten Indicatie:</span>
              {{ inspection.overdueMaintenance.estimatedCost }}
            </p>
            <p class="paragraph-completed border-none">
              <span>Foto's achterstallig onderhoud:</span>
              <span class="flex flex-wrap gap-x-5 mt-3">
              <img 
                :src="getPhotos('huis-een.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-twee.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-drie.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36  object-cover"
              />
              </span>
            </p>
          </section>
          <section class="list-none py-4 border-b-[1px] mb-3">
            <h2 class="static-list text-header-color">
              <v-icon 
                :name="icons.power" 
                class="static-list-icons" 
              />
              Technische installaties
            </h2>
            <p class="paragraph-completed">
              <span>Locatie Installatie:</span>
              {{ inspection.technicalInstallation.location }}
            </p>
            <p class="paragraph-completed">
              <span>Soort Installatie:</span>
              {{ inspection.technicalInstallation.typeOfInstallation }}
            </p>
            <p class="paragraph-completed">
              <span>Omschrijving van de storing:</span>
              {{ inspection.technicalInstallation.reportedFailures }}
            </p>
            <p class="paragraph-completed">
              <span>Testresultaat:</span>
              {{ inspection.technicalInstallation.approved }}
            </p>
            <p class="paragraph-completed">
              <span>Opmerkingen over installatie:</span>
              {{ inspection.technicalInstallation.comments }}
            </p>
            <p class="paragraph-completed border-none">
              <span>Foto's Installatie:</span>
              <span class="flex flex-wrap gap-x-5 mt-3">
              <img 
                :src="getPhotos('huis-een.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-twee.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-drie.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36  object-cover"
              />
              </span>
            </p>
          </section>
          <section>
            <h2 class="static-list text-header-color">
              <v-icon 
                :name="icons.tools" 
                class="static-list-icons" 
              />
              Aanpassingen
            </h2>
            <p class="paragraph-completed">
              <span>Locatie van de aanpassing:</span>
              {{ inspection.modifications.location }}
            </p>
            <p class="paragraph-completed">
              <span>Aanpassing uitgevoerd door:</span>
              {{ inspection.modifications.carriedOutBy }}
            </p>
            <p class="paragraph-completed">
              <span>Omschrijving van de aanpassing:</span>
              {{ inspection.modifications.description }}
            </p>
            <p class="paragraph-completed">
              <span>Te ondernemen actie:</span>
              {{ inspection.modifications.actionToTake }}
            </p>
            <p class="paragraph-completed border-none">
              <span>Foto's Aanpassingen:</span>
              <span class="flex flex-wrap gap-x-5 mt-3">
              <img 
                :src="getPhotos('huis-een.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-twee.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36 object-cover"
              />
              <img 
                :src="getPhotos('huis-drie.jpeg')"
                class="w-20 h-20 md:w-36 md:h-36  object-cover"
              />
              </span>
            </p>
          </section>
        </div>
        <router-link 
          :to="'/active/' + inspection.id">
          <div class="grid place-items-center mb-4">
            <button 
              type="button"
              class="bg-[#00AAA2] flex items-center text-white text-md md:text-xl 
                py-2 px-3 rounded-md mt-4 hover:bg-[#39b7b1]"
            >
              <v-icon 
                :name="icons.pencil" 
                class="mr-1 w-4 h-4 md:w-6 md:h-6" 
              />
              Bewerk
            </button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
<LoadingStatus
  className="flex justify-center items-center"
  v-if="loading"
/>
<Errors v-if="error" />
<BackButton />
</template>

<script>
import icons from '@/data/icons'
import mixin from '@/mixins/mixins'
import LoadingStatus from '@/components/LoadingStatus.vue'
import Errors from '@/components/ErrorList.vue'
import BackButton from '@/components/buttons/BackButton.vue'

export default {
  name: 'CompletedTasks',
  mixins: [mixin],
  data() {
    return {
      icons,
    }
  },
    components: {
    LoadingStatus,
    Errors,
    BackButton
  },
  computed: { 
    isCompleted(){ // check if inspection is completed
      return JSON.parse(localStorage.getItem('completedTasks'))
    },
    sorted() { // get sorted inspections
      return this.$store.getters['inspectionData/sortInspections']
    },
    loading() { // check if data is loading
      return this.$store.state.inspectionData.loading === true
    },
    error() { // check if there are errors
      return this.$store.state.inspectionData.errors.length > 0
    },
    user() { // get user data from firebase
      const data = this.$store.getters['firebase/user']
      return data.data.displayName
    },
  },
}
</script>