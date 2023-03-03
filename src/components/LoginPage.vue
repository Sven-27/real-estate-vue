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
    @submit.prevent="Login" 
    class="shadow shadow-[#475E6C] rounded-md md:rounded-2xl p-8 md:p-20">
    <legend class="text-[#293439] pb-4 uppercase text-lg md:text-4xl font-semibold">Login</legend>
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
          class="outline-none flex flex-1"
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
    <div 
      v-if="error"
      class="text-red-500 text-lg md:text-md"
    >{{ error }}</div>
    </div>
    <div class="flex justify-center items-center">
      <button 
        type="submit"
        class="bg-[#00AAA2] text-white text-lg md:text-3xl 
        py-2 px-4 rounded-md mt-4 mb-4 md:mt-8 md:mb-8"
      >
        Login
      </button>
    </div>
    <div>
      <p class="text-[#293439] text-md md:text-2xl">
        Geen account?  
      <router-link to="/register" class="text-[#00AAA2] text-md md:text-2xl">
         Registreer hier
      </router-link>
      </p>
    </div>
    <div>
      <p class="text-[#293439] text-md md:text-2xl">
        Wachtwoord vergeten?  
      <router-link to="/reset-password" class="text-[#00AAA2] text-md md:text-2xl">
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
import { useRouter } from 'vue-router'
import icons from '@/data/icons'

export default {
  name: 'LoginPage',
  data() {
    return {
      icons,
      showPassword: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
 setup() {
    const email = ref('')
    const password = ref(null)
    const error = ref(null)

    const store = useStore()
    const router = useRouter()
    
    const Login = async () => {
      try {
        await store.dispatch('firebase/logIn', {
          email: email.value,
          password: password.value,
        })
        router.push('/')
      }
      catch (err) {
        console.log(err.code)
        switch(err.code) {
          case 'auth/invalid-email':
            error.value = 'email heeft geen geldig formaat'
            break
          case 'auth/user-disabled':
            error.value = 'Account is tijdelijk geblokkeerd'
            break
          case 'auth/user-not-found':
            error.value = 'Account niet gevonden'
            break
          case 'auth/wrong-password':
            error.value = 'Onjuist wachtwoord'
            break
          default:
            error.value = 'Something went wrong'
            break
        }
    } 
    }

    return { Login, email, password, error }
  },
 
};
</script>