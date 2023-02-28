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
    @submit.prevent="sendEmail"
    class="shadow shadow-[#475E6C] rounded-md md:rounded-2xl p-8 md:p-20">
    <legend class="text-[#293439] pb-4 uppercase text-lg md:text-4xl font-semibold">Reset password</legend>
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
      />
      <div 
        v-if="error"
        class="text-red-500 text-sm md:text-md"  
      >{{error}}</div>
      <div 
        v-if="msg"
        class="text-sm md:text-md">{{msg}}</div>
      <div class="flex justify-center items-center">
      <button 
        type="submit"
        class="bg-[#00AAA2] text-white text-lg md:text-3xl 
        py-2 px-4 rounded-md mt-4 mb-4 md:mt-8 md:mb-8"
      >
        Reset Password
      </button>
    </div>
    </div>
    
  </form>
</div>
</template>

<script>
import {auth} from "@/firebaseConfig";
import {sendPasswordResetEmail} from "firebase/auth";
import {useRouter} from 'vue-router';
export default {
  name: "ResetPassword",
  data() {
    return {
      email: "",
      error: null,
      emailSending: false,
      msg: '',
      router: useRouter(),
    };
  },
  methods: {
    sendEmail() {
      if (!this.email) {
        this.error = "Vul een geldig email in.";
        return;
      }
      this.error = null;
      this.emailSending = true;
    
        sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.msg = "Email is verzonden! Check ook je spambox.";
          this.$router.push('/login');
          this.emailSending = false;
        })
        .catch(error => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>
