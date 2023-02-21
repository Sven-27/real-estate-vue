<template>
<div class="grid place-items-center">
  <div class="card">
    <div v-if="user.loggedIn">
      <h1 class="text-2xl text-center">Welcome {{ user.data.displayName }}</h1>
      <p class="text-center">You are logged in!</p>
      <div>
        <button @click.prevent="signOut" class="bg-[#00AAA2] text-white text-lg md:text-3xl 
          py-2 px-4 rounded-md mt-4 md:mt-8">
          Sign Out
        </button>
      </div>
    </div>
    <div v-else>
      <h1 class="text-2xl text-center">You are not logged in!</h1>
      <p class="text-center">Please log in to view this page.</p>
    </div>
  </div>
</div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '@/firebaseConfig'

export default {
  name: 'DashboardPage',
  setup() {
  const store = useStore()
  const router = useRouter()

  auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });

  const user = computed(() => {
    return store.getters.user;
  });

  const signOut = async () => {
    await store.dispatch('logOut')
    router.push('/')
  }
    return {user, signOut}
  }
};
</script>