<template>
<div class="h-screen flex flex-col justify-center 
  items-center bg-gray-100 text-[#00AAA2]">
  <div class="pb-9 md:pb-28">
    <img src="@/assets/logos/logo-horizontal.svg" 
      alt="logo" 
      class="w-48 md:w-96" 
    />
  </div>
  <form
    action="#"
    @submit.prevent="Register" 
    class="shadow shadow-[#475E6C] rounded-md md:rounded-2xl p-8 md:p-20">
    <legend class="text-[#293439] pb-4 uppercase text-lg md:text-4xl font-semibold">Register</legend>
    <div class="flex flex-col">
      <label class="md:text-2xl" for="name">Name</label>
      <input 
        type="text" 
        name="name" 
        autocomplete="true"
        v-model="name"
        value
        id="name" 
        placeholder="name" 
        class="login-input flex flex-1"
        autofocus
        required
      />
    </div>
    <div class="flex flex-col">
      <label class="md:text-2xl" for="email">Email</label>
      <input 
        type="email" 
        name="email" 
        autocomplete="true"
        v-model="email"
        value
        id="email" 
        placeholder="email" 
        class="login-input flex flex-1"
        autofocus
        required
      />
    </div>
    <div class="flex flex-col">
      <label class="md:text-2xl" for="password">Password</label>
      <div class="flex flex-row login-input items-center">
      <input 
        type="text" 
        name="password" 
        autocomplete="false"
        v-if="showPassword"
        v-model="password"
        id="password" 
        placeholder="password" 
        class="outline-none"
        required
      />
      <input 
        type="password" 
        name="password" 
        autocomplete="false"
        v-else
        v-model="password"
        id="password" 
        placeholder="password" 
        class="outline-none flex flex-1"
        required
      />
      <button 
        type="button"
        class="outline-none h-full flex items-center"
        @click="toggleShow"
      >
        <v-icon 
          v-if="!showPassword"
          :name="icons.eye" 
          class="text-[#00AAA2] w-[1.3rem] h-[1.3rem] 
          md:w-[1.7rem] md:h-[1.7rem]"
        />
        <v-icon 
          v-if="showPassword"
          :name="icons.eyeSlash" 
          class="text-[#00AAA2] w-[1.3rem] h-[1.3rem] 
          md:w-[1.7rem] md:h-[1.7rem]"
        />
      </button>
    </div>
      <p class="text-[#00AAA2] md:text-xl">{{ msg }}</p>
    <div 
      v-if="error"
      class="text-red-500 text-md">{{ error }}</div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <button 
        type="submit"
        class="bg-[#00AAA2] text-white text-lg md:text-3xl 
        py-2 px-4 rounded-md mt-4 md:mt-8 mb-3" 
      >
        Register
      </button>
      <p class="text-[#293439] text-md md:text-2xl">
        Naar login?  
      <router-link to="/login" class="text-[#00AAA2] text-md md:text-2xl">
         Klik hier
      </router-link>
      </p>
    </div>
  </form>
</div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import icons from '@/data/icons'

export default {
  name: 'RegisterPage',
  data() {
    return {
      icons,
      showPassword: false,
    };
  },
  computed: {
    buttonLabel() { // Toggle password visibility button icon
      return (this.showPassword) ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() { // Toggle password visibility
      this.showPassword = !this.showPassword;
    },
  },
 setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const msg = ref('')

    const store = useStore()

    const Register = async () => { // Register user
      try {
        await store.dispatch('firebase/register', {
          email: email.value,
          password: password.value,
          name: name.value
        })
        msg.value = "Registratie is gelukt"
      }
      catch (err) {
        console.log(err.code)
        switch(err.code) {
          case 'auth/email-already-in-use':
            error.value = "Email is al in gebruik"
            break
          case 'auth/invalid-email':
            error.value = "Email is ongeldig"
            break
          case 'auth/weak-password':
            error.value = "Wachtwoord moet minimaal 6 tekens bevatten"
            break
          case 'auth/operation-not-allowed':
            error.value = "Registratie is niet toegestaan"
            break
          case 'auth/invalid-password':
            error.value = "Wachtwoord is ongeldig"
            break
          default:
            error.value = "Er is iets fout gegaan"
          }
        }
      }

    return { Register, name, email, password, error, msg }
  }
};
</script>