<template>
<div class="h-screen flex flex-col justify-center 
  items-center bg-gray-100 text-[#00AAA2]">
  <div class="pb-9 md:pb-28">
    <img src="@/assets/logos/logo-horizontal.svg" 
      alt="logo" 
      class="w-48 md:w-96" 
    />
  </div>
  <div v-if="error">{{ error }}</div>
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
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        class="login-input"
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
        class="outline-none"
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
      <p class="text-[#293439] text-lg md:text-2xl">
        No account?  
      <router-link to="/register" class="text-[#00AAA2] text-lg md:text-2xl">
         Register here
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
      // msg: ''
    };
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
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
      // const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      try {
        await store.dispatch('firebase/logIn', {
          email: email.value,
          password: password.value,
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
        }
    } 


    return { Login, email, password, error }
  },
};
</script>