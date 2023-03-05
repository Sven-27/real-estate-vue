<template>
<div id="accordionExample">
  <div
    class=" border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingThree">
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 
        px-5 text-left text-sm md:text-2xl text-neutral-800 transition [overflow-anchor:none] 
        hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white 
        [&:not([data-te-collapse-collapsed])]:bg-white 
        [&:not([data-te-collapse-collapsed])]:text-[#00AAA2] 
        [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] 
        dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 
        dark:[&:not([data-te-collapse-collapsed])]:text-[#00AAA2] dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        <span>
          <v-icon 
            :name="icons.power" 
            class="static-list-icons" 
          />
          Technische installaties
        </span>
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
      id="collapseThree"
      class="!visible "
      data-te-collapse-item
      aria-labelledby="headingThree"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <form id="form-inspection">
          <div>
            <label for="location-installation">Locatie installatie:</label>
            <input
              type="text"
              id="location-installation"
              required
              name="location-installation"
              class="w-full border mt-2 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent"
              placeholder="Waar de schade zich bevindt"
              />
          </div>
          <div class="mt-5">
            <label for="new-damage">Nieuwe of bestaande schade:</label>
            <select data-te-select-init
              id="new-damage"
              class="w-full h-full relative  border mt-3 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent">
              <option disabled selected value="select">Selecteer</option>
              <option value="nieuw">Nieuwe schade</option>
              <option value="bestaand">Bestaande schade</option>
            </select>
          </div>
          <div class="mt-5">
          <label for="new-damage">Soort schade:</label>
              <select data-te-select-init
                class="w-full h-full relative  border mt-2 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent">
                <option disabled selected value="select">Selecteer</option>
                    <option value="calamiteit">Calamiteit</option>
                    <option value="moedwillig">Moedwillig</option>
                    <option value="slijtage">Slijtage</option>
                    <option value="geweld">Geweld</option>
                    <option value="normaal">Normaal gebruik</option>
                    <option value="anders">Anders</option>
                  </select>
              </div>
          <div class="mt-5">
            <label for="date">Datum schade:</label>
            <input
              type="date"
              id="date"
              name="date"
              class="w-full border mt-2 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent"
              placeholder="Wanneer is de schade ontstaan"
              />
          </div>
          <div class="mt-5">
            <label for="actie">Actie:</label>
            <select data-te-select-init
              id="action"
              class="w-full h-full relative  border mt-3 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent">
              <option disabled selected value="select">Selecteer</option>
              <option value="direct">Direct actie ondernemen</option>
              <option value="wait">Kan nog wachten</option>
            </select>
          </div>
          <div class="mt-5">
            <label for="description">Omschrijving van de schade:</label>
            <textarea
              id="description"
              name="description"
              class="w-full h-48 border mt-2 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent"
              placeholder="Omschrijf de schade"
              ></textarea>
          </div>
          <div class="flex justify-center">
          <div class="mb-3 w-full">
            <label
              for="formFileMultiple"
              class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >Selecteer (meerdere) foto's</label
            >
            <input
              class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-[#00AAA2] focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-[#00AAA2] focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
              type="file"
              id="formFileMultiple"
              multiple />
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import icons from '@/data/icons'
export default {
  name: 'TechnicalInstallation',
  props: ['address', 'id'],
  data () {
    return {
      icons
    }
  },
}
</script>