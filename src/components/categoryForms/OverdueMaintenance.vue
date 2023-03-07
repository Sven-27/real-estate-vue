<template>
<div id="accordionExample">
  <div
    class=" border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingTwo">
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
        data-te-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        <span>
          <v-icon 
            :name="icons.damage" 
            class="static-list-icons" 
          />
          Achterstallig onderhoud
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
      id="collapseTwo"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingTwo"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <form id="form-inspection">
          <div>
            <label for="location-overdue">Locatie achterstallig onderhoud:</label>
            <input
              type="text"
              id="location-overdue"
              :value="locationOverdue"
              required
              name="location-overdue"
              class="w-full border mt-2 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent"
              placeholder="Locatie achterstallig onderhoud"
              />
          </div>
          <div class="mt-5">
            <label for="type-of-maintenance">Soort onderhoud:</label>
            <select data-te-select-init
              id="type-of-maintenance"
              name="type-of-maintenance"
              required
              class="w-full h-full relative  border mt-3 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent">
              <option disabled>Selecteer</option>
              <option selected value="paint">Schilderwerk</option>
              <option value="garden">Tuin</option>
              <option value="plumbing">Loodgieterswerk</option>
              <option value="renovate">Renovatie keuken</option>
            </select>
          </div>
          <div class="mt-5">
          <label for="action-maintenance">Vereiste actie:</label>
            <select data-te-select-init
              id="action-maintenance"
              name="action-maintenance"
              required
              class="w-full h-full relative  border mt-2 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent">
              <option disabled>Selecteer</option>
              <option selected value="calamiteit">Acute actie</option>
              <option value="moedwillig">In later stadium</option>
            </select>
          </div>
          <div class="mt-5">
            <label for="costs-maintenance">Kosten Indicatie:</label>
            <select data-te-select-init
              id="costs-maintenance"
              name="costs-maintenance"
              class="w-full h-full relative  border mt-3 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white rounded-md py-2 px-3 text-sm md:text-2xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#00AAA2] focus:border-transparent">
              <option disabled>Selecteer</option>
              <option selected value="Low">0 - 500</option>
              <option value="middle">500 - 1500</option>
              <option value="high">Meer dan 1500</option>
            </select>
          </div>
          <div class="flex justify-center">
          <div class="mt-5 w-full">
            <label
              for="formFileMultiple-maintenance"
              class="inline-block text-neutral-700 dark:text-neutral-200"
              >Selecteer (meerdere) foto's</label
            >
            <input
              class="relative mt-3 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-[#00AAA2] focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-[#00AAA2] focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
              type="file"
              id="formFileMultiple-maintenance"
              name="formFileMultiple-maintenance"
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
  name: 'OverdueMaintenance',
  props: [
    'locationOverdue'
  ],
  data () {
    return {
      icons
    }
  },
}
</script>