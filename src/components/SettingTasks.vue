<template>
<main class="card m-2 md:m-5 grid place-self-center md:w-[600px] transition-ease">
  <section class="flex flex-col relative w-full justify-center items-center">
  <h1 class="text-xl md:text-4xl font-bold">Account gegevens</h1>
  <figure class="my-4 md:my-8">
    <img 
      class="w-16 h-16 md:w-28 md:h-28  rounded-full ring-1 ring-gray-300 dark:ring-[#293439]" 
      src="@/assets/images/aap.jpeg" 
      alt="Bordered avatar"
    >
  </figure>
  </section>
  <section>
    <p class="font-semibold text-lg md:text-2xl">Naam: 
      <span class="font-normal">{{ user }}</span>
    </p>
    <p class="font-semibold text-lg md:text-2xl">ID: 
      <span class="font-normal">#75093</span>
    </p>
    <p class="font-semibold text-lg md:text-2xl">Functie: 
      <span class="font-normal">Inspecteur</span>
    </p>
    <p class="font-semibold text-lg md:text-2xl">Email: 
      <span class="font-normal">{{ email }}</span>
    </p>
    <p class="font-semibold text-lg md:text-2xl">Wachtwoord: 
      <span class="font-normal">********</span>
    </p>
  </section>
  <hr class="my-3 md:my-6">
  <section class="flex flex-col relative w-full">
  <div class="grid place-items-center mb-4">
    <button 
      @click="deleteAccount"
      class="bg-[#00AAA2] text-white text-lg md:text-3xl 
      py-2 px-8 rounded-md mt-4 hover:bg-[#39b7b1]"
    >
      Delete account
    </button>
  </div>
  </section>
  <div v-if="msg" class="text-red-500 text-center">
    {{ msg }}
  </div>
</main>
</template>

<script>
import icons from '@/data/icons'
import { auth } from '@/firebaseConfig'
import { deleteUser } from 'firebase/auth' 
import { useRouter } from 'vue-router'

export default {
  name: 'SettingTasks',
  data() {
    return {
      icons,
      router: useRouter(),
      msg: '',
    }
  },
  methods: {
    deleteAccount() {
    const user = auth.currentUser;
     
    deleteUser(user).then(() => {
      this.msg = 'Account deleted'
      this.router.push('/login')
      }).catch((error) => {
       this.msg = error.message
      });
    },
  },
  computed: {
    user() {
      const data = this.$store.getters['firebase/user']
      return data.data.displayName
    },
    email(){
      const data = this.$store.getters['firebase/user']
      return data.data.email
    },
  }
}
</script>

