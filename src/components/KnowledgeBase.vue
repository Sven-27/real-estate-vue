<template>
<div class="flex items-center m-3 md:m-6 dark:text-white justify-center">
  <v-icon 
    :name="icons.knowledgeBase" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Knowledgebase</span>
</div>
<div id="accordionExample">
  <div
    class=" border mb-6 mx-3 md:mx-auto md:w-[70%] xl:w-[50%] border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingOne">
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
        data-te-target="#collapseOne"
        aria-expanded="false"
        aria-controls="collapseOne">
        <span>
          <v-icon 
            :name="icons.document" 
            class="static-list-icons" 
          />
          Document 1
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
      id="collapseOne"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingOne"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <p class="text-sm md:text-lg text-neutral-800 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="accordionExample">
  <div
    class="border mb-6 mx-3 md:mx-auto md:w-[70%] xl:w-[50%] border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
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
            :name="icons.document" 
            class="static-list-icons" 
          />
          Document 2
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
        <p class="text-sm md:text-lg text-neutral-800 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="accordionExample">
  <div
    class=" border mx-3 mb-6 md:mx-auto md:w-[70%] xl:w-[50%] border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
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
            :name="icons.document" 
            class="static-list-icons" 
          />
          Document 3
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
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingThree"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <p class="text-sm md:text-lg text-neutral-800 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="accordionExample">
  <div
    class=" border mx-3 mb-6 md:mx-auto md:w-[70%] xl:w-[50%] border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingFour">
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
        data-te-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour">
        <span>
          <v-icon 
            :name="icons.document" 
            class="static-list-icons" 
          />
          Document 4
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
      id="collapseFour"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingFour"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <p class="text-sm md:text-lg text-neutral-800 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="accordionExample">
  <div
    class=" border mx-3 mb-6 md:mx-auto md:w-[70%] xl:w-[50%] border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingFive">
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
        data-te-target="#collapseFive"
        aria-expanded="false"
        aria-controls="collapseFive">
        <span>
          <v-icon 
            :name="icons.document" 
            class="static-list-icons" 
          />
          Document 5
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
      id="collapseFive"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingFive"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <p class="text-sm md:text-lg text-neutral-800 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="accordionExample">
  <div
    class="border mx-3 mb-6 md:mx-auto md:w-[70%] xl:w-[50%] border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingSix">
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
        data-te-target="#collapseSix"
        aria-expanded="false"
        aria-controls="collapseSix">
        <span>
          <v-icon 
            :name="icons.document" 
            class="static-list-icons" 
          />
          Document 6
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
      id="collapseSix"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingSix"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <p class="text-sm md:text-lg text-neutral-800 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem. 
          Sed euismod, nisl sit amet aliquam tincidunt, 
          nunc elit aliquam mauris, et ultricies nisl nunc eget lorem.
        </p>
      </div>
    </div>
  </div>
</div>
<BackButton />
</template>

<script>
import icons from '@/data/icons.js'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'KnowledgeBase',
  data() {
    return {
      icons 
    }
  },
  components: {
    BackButton
  }
}
</script>