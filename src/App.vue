<template>
<div
  class="flex flex-col h-screen">
  <div class="flex flex-col flex-1">      
    <HeaderGlobal v-if="user.loggedIn" />
    <router-view />
  </div>
  <TaskItems v-if="user.loggedIn" />
</div> 
</template>

<script>
import HeaderGlobal from '@/components/HeaderGlobal.vue'
import TaskItems from '@/components/TaskItems.vue'
// import HomeWrapper from '@/components/HomeWrapper.vue'
// import LoginWrapper from '@/components/LoginWrapper.vue'
import { useStore} from "vuex";
// import { useRouter } from "vue-router";
import {computed} from "vue";
import { auth } from '@/firebaseConfig'
export default {
  name: 'App',
  components: {
    HeaderGlobal,
    TaskItems,
    // HomeWrapper,
    // LoginWrapper,
  },
   setup() {

  const store = useStore()
  // const router = useRouter()

  auth.onAuthStateChanged(user => {
    store.dispatch("firebase/fetchUser", user);
  });

  const user = computed(() => {
    return store.getters['firebase/user'];
  });

  // const signOut = async () => {
  //       await store.dispatch('logOut')
  //       router.push('/')
  // }

    return {user}
 }
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
    @apply text-[#ffffff66] w-[1.8rem] h-[1.8rem] md:w-[3rem] md:h-[3rem] pr-[.4rem] py-1;
  }
  .task-container{
    @apply flex flex-col justify-center items-center text-[.8rem] md:text-[1.3rem] text-[#ffffff66];
  }
  .oh-vue-card {
    @apply text-[#293439] w-[6rem] h-[6rem] pr-[.4rem] py-1 md:w-[9rem] md:h-[9rem];
  }
  .inspection-info{
    @apply text-sm md:text-xl
  }
  .login-input{
    @apply outline-none shadow shadow-[#475E6C] rounded-sm text-[#293439] md:text-2xl mt-1 md:mt-3 py-1 px-2 mb-4;
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
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.2xl');
  }
}

@layer utilities{
  body{
    @apply text-[#293439] bg-slate-200;
  }
}
</style>  
