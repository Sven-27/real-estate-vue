<template>
<div class="flex items-center m-3 dark:text-white justify-center">
    <v-icon 
    :name="icons.bookmarklet" 
    class="w-10 h-10 mr-2 " 
  />
  <span class="text-xl font-semibold">Scheduled</span>
</div>
<div id="accordionFlushExample">
  <div
    class="rounded-none m-5 border border-t-0 border-l-0 border-r-0 border-neutral-200 
    bg-white dark:border-neutral-600 dark:bg-neutral-800 "
    v-for="inspection in sorted"
    :key="inspection.id"
  >
    <h2 class="mb-0" id="heading">
      <button
        class="group relative flex w-full items-center rounded-none border-0  
        bg-white py-4 px-5 text-left text-sm text-neutral-800 transition 
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
        <span
          class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
      <div class="py-4 px-5 text-sm">
        <strong>This is the first item's accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>

    </div>
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
import icons from '@/data/icons.js'

export default {
  name: 'ScheduledTasks',
  data() {
    return {
      icons 
    }
  },
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