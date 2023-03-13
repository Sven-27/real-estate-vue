<template>
<div
  class="flex flex-col h-screen  dark:text-slate-200">
  <div class="flex flex-col flex-1 dark:bg-[#293439]"
  :class="dark ? 'dark' : 'light'">      
    <HeaderGlobal v-if="user.loggedIn" />
    <router-view  />
  </div>
  <TaskItems v-if="user.loggedIn" />
</div> 
</template>

<script>
import HeaderGlobal from '@/components/HeaderGlobal.vue'
import TaskItems from '@/components/TaskItems.vue'
import { useStore } from "vuex";
import {computed} from "vue";
import { auth } from '@/firebaseConfig'

export default {
  name: 'App',
  components: {
    HeaderGlobal,
    TaskItems,
  },
  mounted() {
    this.$store.dispatch('inspectionData/fetchInspections') // loads inspections data to store de scheduled inspections in localstorage
   },
   setup(){
  const store = useStore()

  auth.onAuthStateChanged(user => {
    store.dispatch("firebase/fetchUser", user); // fetches the user from firebase and stores it in the store
  });

  const user = computed(() => {
    return store.getters['firebase/user']; // retrieves the user from the store
  });
    return {user}
    
 },
}
</script>


<!-- Huisstijl Kleuren  -->

  <!-- rgb(41,52,57) = #293439  -->
  <!-- rgb(0,170,162) = #00AAA2  -->
  <!-- linear-gradient rgb(71,94,108) - rgb(20,27,31) = #475E6C - #141B1F -->

<!-- In de styletags staan de globale styling  -->
 <style>
.fa-brands{
  color: red;
}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base{
  *{
    @apply m-0 p-0 box-border;
  }
  .oh-vue-header{
    @apply text-[#ffffff55] w-[0.9rem] h-[0.9rem] md:w-[1.3rem] md:h-[1.3rem] mr-[0.4rem] md:mr-[.9rem] my-1;
  }
  .oh-vue-task{
    @apply text-[#fff] w-[1.8rem] h-[1.8rem] md:w-[3rem] md:h-[3rem] pr-[.4rem] py-1;
  }
  .task-container{
    @apply w-32 md:w-36 flex flex-col uppercase justify-center items-center text-[.6rem] md:text-[1.1rem] text-[#fff] rounded-md px-3 hover:bg-[#4dcbc4] transition-ease;
  }
  .oh-vue-card {
    @apply text-[#293439] dark:text-slate-200 w-[6rem] h-[6rem] pr-[.4rem] py-1 md:w-[9rem] md:h-[9rem];
  }
  .inspection-info{
    @apply text-sm md:text-xl
  }
  .login-input{
    @apply outline-none shadow shadow-[#475E6C] rounded-sm text-[#293439] md:text-2xl mt-1 md:mt-3 py-1 px-2 mb-4;
  }
  .static-list{
    @apply text-sm md:text-2xl mb-2 flex items-center;
  }
  .static-list-icons{
    @apply w-[1.1rem] h-[1.1rem] md:w-[1.7rem] md:h-[1.7rem] mr-2 
  }
  .text-header-color{
    @apply text-[#00AAA2]
  }
  .paragraph-completed{
    @apply flex flex-col my-2 pb-2 border-b-[1px] border-[#ddd] dark:border-[#444] 
  }
  .info-article > p,
  .info-article > ol,
  .info-article a {
    @apply text-sm md:text-xl
  }
  .info-article > h2 {
    @apply text-2xl md:text-4xl font-bold mt-5 mb-3
  }
  .info-article > h3 {
    @apply text-xl md:text-2xl font-bold mt-5 mb-3
  }
}

@layer components{
  .logo{
    @apply w-[60px] h-[60px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px];
  }
  .dark-bg{
    @apply flex justify-center items-center bg-gradient-to-r from-[#475E6C] to-[#141B1F] w-[80px] h-[80px] md:w-[180px] md:h-[180px] xl:w-[240px] xl:h-[240px];
  }
  .light-bg{
    @apply flex justify-center items-center bg-[#00AAA2] w-[80px] h-[80px] md:w-[180px] md:h-[180px] xl:w-[240px] xl:h-[240px];
  }
  .transparent-bg{
    @apply flex justify-center items-center bg-transparent w-[80px] h-[80px] md:w-[180px] md:h-[180px] xl:w-[240px] xl:h-[240px];
  }
  .details-section{
    @apply text-sm md:text-xl
  }
  .card {
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.2xl');
  }
  .card:hover {
    background-color: #ffffff55;
  }
  .transition-ease{
    @apply transition ease-in-out duration-200;
  }
}

@layer utilities{
  *{
    @apply m-0 p-0 box-border ;
  }

  body{
    @apply text-[#293439] bg-slate-200 dark:text-slate-200 dark:bg-[#293439];
  }

  .display-none{
    @apply hidden;
  }
}
</style>  
