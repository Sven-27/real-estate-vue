<template>
<main class="p-3 card m-2 ">
  <section class="flex flex-col relative w-full justify-center items-center">
  <h1 class="text-xl font-bold">Account gegevens</h1>
  <figure class="">
    <img 
      class="w-12 h-12 my-4 rounded-full ring-1 ring-gray-300 dark:ring-[#293439]" 
      src="@/assets/images/sven.jpg" 
      alt="Bordered avatar"
    >
  </figure>
  <v-icon 
    :name="icons.pencil" 
    class="oh-vue-header text-[#293439] absolute right-0 top-0 z-10" 
  />
  </section>
  <section>
    <p class="font-semibold text-lg">Naam: 
      <span class="font-normal">Sven Notermans</span>
    </p>
    <p class="font-semibold text-lg">ID: 
      <span class="font-normal">#2754</span>
    </p>
    <p class="font-semibold text-lg">Functie: 
      <span class="font-normal">Inspecteur</span>
    </p>
    <p class="font-semibold text-lg">Email: 
      <span class="font-normal">example@test.com</span>
    </p>
    <p class="font-semibold text-lg">Wachtwoord: 
      <span class="font-normal">real-2548-estate</span>
    </p>
  </section>
  <hr class="my-3">
  <section class="flex flex-col relative w-full">
    <v-icon 
      :name="icons.pencil" 
      class="oh-vue-header text-[#293439] absolute right-0 top-0 z-10" 
    />
    <p class="font-semibold text-lg">Darkmode: 
      <input 
        type="checkbox" 
        class="ml-2 w-4 h-4 text-[#00AAA2] bg-gray-100 border-gray-300 rounded 
        focus:ring-[#00AAA2] dark:focus:ring-[#00AAA2] dark:ring-offset-[#293439] 
        focus:ring-2 dark:bg-[#293439] dark:border-[#293439]"
      >
    </p>
    <p class="font-semibold text-lg">Meldingen tonen: 
      <input 
        type="checkbox" 
        class="ml-2 w-4 h-4 text-[#00AAA2] bg-gray-100 border-gray-300 rounded 
        focus:ring-[#00AAA2] dark:focus:ring-[#00AAA2] dark:ring-offset-[#293439] 
        focus:ring-2 dark:bg-[#293439] dark:border-[#293439]"
      >
    </p>
    <p class="font-semibold text-lg">Geluiden aan: 
      <input 
        type="checkbox" 
        class="ml-2 w-4 h-4 text-[#00AAA2] bg-gray-100 border-gray-300 rounded 
        focus:ring-[#00AAA2] dark:focus:ring-[#00AAA2] dark:ring-offset-[#293439] 
        focus:ring-2 dark:bg-[#293439] dark:border-[#293439]"
      >
    </p>
  </section>
  <hr class="my-3">
  <div class="grid place-items-center">
    <button 
      type="submit"
      class="bg-[#00AAA2] text-white text-lg md:text-3xl 
      py-2 px-8 rounded-md mt-4 md:mt-8"
    >
      Delete account
    </button>
  </div>
</main>
</template>

<script>
import icons from '@/data/icons'

export default {
  name: 'SettingTasks',
  data() {
    return {
      icons
    }
  }
}
</script>