<template>
<!-- Component om details per inspectie te tonen -->
<div class="inspection flex justify-center">
  <article
    v-for="inspection in filterInspections" 
    :key="inspection.id"
    class="w-11/12 grid xl:w-8/12"
  >
    <h2 class="text-[1.2rem] md:text-[1.7rem] mt-2 
    text-center font-extrabold">
      Details locatie: {{ inspection.address }}
    </h2>
    <div class="grid gap-3 md:gap-6 lg:grid-cols-2 
    py-3 md:py-6">
      <section class="details-section">
        <h3 class="text-lg font-extrabold">
          Locatie
        </h3>
        <p class="details-info">
          <span class="font-bold">Soort:</span>
          {{" "}}{{ inspection.name }}
        </p>
        <p class="details-info">
          <span class="font-bold">Postcode:</span>
          {{" "}}{{ inspection.zipcode }}
        </p>
        <p class="details-info">
          <span class="font-bold">Plaats:</span>
          {{" "}}{{ inspection.city }}
        </p>
        <p class="details-info">
          <span class="font-bold">Inspectie:</span>
          {{" "}}{{ inspection.date }}
        </p>
      </section>
      <section class="details-section">
        <h3 class="text-lg font-extrabold">
          Inventaristatie van schade
        </h3>
        <p class="details-info">
          <span class="font-bold">Locatie:</span>
          {{" "}}{{ inspection.surveyOfDamage.location }}
        </p>
        <p class="details-info">
          <span class="font-bold">Nieuwe schade:</span>
          {{" "}}{{ inspection.surveyOfDamage.newDamage }}
        </p>
        <p class="details-info">
          <span class="font-bold">Soort schade:</span>
          {{" "}}{{ inspection.surveyOfDamage.typeOfDamage }}
        </p>
        <p class="details-info">
          <span class="font-bold">Datum inspectie:</span>
          {{" "}}{{ inspection.surveyOfDamage.date}}
        </p>
        <p class="details-info">
          <span class="font-bold">Actie ondernemen:</span>
          {{" "}}{{ inspection.surveyOfDamage.requiredAction }}
        </p>
        <p class="details-info">
          <span class="font-bold">Omschrijving:</span>
          {{" "}}{{ inspection.surveyOfDamage.description }}
        </p>
      </section>
      <section class="details-section">
        <h3 class="text-lg font-extrabold">
          Achterstallig onderhoud
        </h3>
        <p class="details-info">
          <span class="font-bold">Locatie:</span>
          {{" "}}{{ inspection.overdueMaintenance.location }}
        </p>
        <p class="details-info">
          <span class="font-bold">Soort onderhoud:</span>
          {{" "}}{{ inspection.overdueMaintenance.typeOfMaintenance }}
        </p>
        <p class="details-info">
          <span class="font-bold">Actie ondernemen:</span>
          {{" "}}{{ inspection.overdueMaintenance.requiredAction }}
        </p>
        <p class="details-info">
          <span class="font-bold">Geschatte kosten:</span>
          {{" "}}{{ inspection.overdueMaintenance.estimatedCost }}
        </p>
      </section>
      <section class="details-section">
        <h3 class="text-lg font-extrabold">
          Technische installaties
        </h3>
        <p class="details-info">
          <span class="font-bold">Locatie:</span>
          {{" "}}{{ inspection.technicalInstallation.location }}
        </p>
        <p class="details-info">
          <span class="font-bold">Soort installatie:</span>
          {{" "}}{{ inspection.technicalInstallation.typeOfInstallation }}
        </p>
        <p class="details-info">
          <span class="font-bold">Foutmeldingen:</span>
          {{" "}}{{ inspection.technicalInstallation.reportedFailures }}
        </p>
        <p class="details-info">
          <span class="font-bold">Test procedure:</span>
          {{" "}}{{ inspection.technicalInstallation.testProcedure }}
        </p>
        <p class="details-info">
          <span class="font-bold">Goedgekeurd:</span>
          {{" "}}{{ inspection.technicalInstallation.approved }}
        </p>
        <p class="details-info">
          <span class="font-bold">Toelichting:</span>
          {{" "}}{{ inspection.technicalInstallation.comments }}
        </p>
      </section>
      <section class="details-section">
        <h3 class="text-lg font-extrabold">
          Aanpassingen
        </h3>
        <p class="details-info">
          <span class="font-bold">Documenten:</span>
          {{" "}}{{ inspection.modifications.existingDocs }}
        </p>
        <p class="details-info">
          <span class="font-bold">Locatie:</span>
          {{" "}}{{ inspection.modifications.location }}
        </p>
        <p class="details-info">
          <span class="font-bold">Uitgevoerd door:</span>
          {{" "}}{{ inspection.modifications.carriedOutBy }}
        </p>
        <p class="details-info">
          <span class="font-bold">Te ondernemen actie:</span>
          {{" "}}{{ inspection.modifications.actionToTake }}
        </p>
        <p class="details-info">
          <span class="font-bold">Omschrijving:</span>
          {{" "}}{{ inspection.modifications.description }}
        </p>
      </section>
    </div>
  </article>
</div>
</template>

<script>
// import { getInspections } from '@/services/api'

export default {
  name: 'InspectionDetails',
  data() {
    return {
      inspections: [], 
      }
  },
  
  computed: {
    // inspectionId() {
    //   return parseInt(this.$route.params.id) // Weergeeft de id van de inpectie in de url weer
    // },
    // findInspection() {
    //   return this.inspections.find(inspection => inspection.id === this.inspectionId) // Vind de juiste id van de inspectie
    // },
    // filterInspections() {
    //   return this.inspections.filter(inspection => inspection.id === this.inspectionId) // Filtert de inspecties op de juiste id
    // }
  },
  mounted() {
    // getInspections().then(r => {
    //   this.inspections = r
    // })
  },
}
</script>