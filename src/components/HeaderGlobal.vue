<template>
<header class="bg-[#00AAA2]">
  <div class="flex justify-end items-center p-1 md:py-2">
  <v-icon 
    :name="icons.square" 
    class="oh-vue-header" 
  />
  <v-icon 
    :name="icons.circle" 
    class="oh-vue-header" 
  />
  <v-icon 
    :name="icons.triangle" 
    class="oh-vue-header rotate-180" 
  />
  </div>
  <div class="flex bg-[#293439] border-b dark:border-1 
  border-slate-200 justify-between">
    <router-link to="/">
      <img 
        :src="getImgUrl('logo-horizontal-light.svg')" 
        :alt="getImgUrl('logo-horizontal-light.svg')"
        class="w-48 md:w-96 pl-2 py-3 md:pl-7"
      />
    </router-link>
    <div class="flex box-border w-50 items-center 
    pr-3 md:pr-7">
    <div class="mr-4 flex">
      <button 
        @click.prevent="signOut"
        class="outline-none bg-[#00AAA2] rounded-md py-1 px-2 
        md:p-3 text-[0.7rem] md:text-[1.4rem] text-[#fff]
       hover:bg-[#39b7b1] transition-ease"  
      >Log Out</button>
    </div>
    <ToggleDarkmode />
      <router-link to="/settings">
      <v-icon 
        :name="icons.gear" 
        class="text-[#ddd] w-[1.3rem] h-[1.3rem] 
        md:w-[2.5rem] md:h-[2.5rem] mr-4 md:mr-7
        hover:text-[#ffffff55] transition-ease" 
      />
      </router-link>
    </div>
  </div>
</header>
</template>
<script>
import mixin from '@/mixins/mixins'
import icons from '@/data/icons'
import { useStore} from "vuex";
import { useRouter } from "vue-router";
import {computed} from "vue";
import { auth } from '../firebaseConfig'
import ToggleDarkmode from '@/components/ToggleDarkmode.vue'

export default {
  name: 'HeaderGlobal',
  mixins: [mixin], // Haalt de functie getImgUrl() op uit de mixin
  data() {
    return {
      icons,
    }
  },
  components: {
    ToggleDarkmode,
  },

  setup() {

  const store = useStore()
  const router = useRouter()

  auth.onAuthStateChanged(user => { // Check if user is logged in
    store.dispatch("firebase/fetchUser", user);
  });

  const user = computed(() => { // Get user from store
    return store.getters.user;
  });

  const signOut = async () => { // Sign out function
        await store.dispatch('firebase/logOut')
        router.push('/login')
  }

    return {user,signOut}
 },
}
</script>
