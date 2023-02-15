<template>
<div class="h-screen flex flex-col justify-center 
  items-center bg-gray-100 text-[#00AAA2]">
  <div class="pb-9 md:pb-28">
    <img src="@/assets/logos/logo-horizontal.svg" 
      alt="logo" 
      class="w-48 md:w-96" 
    />
  </div>
  <form class="shadow shadow-[#475E6C] rounded-md md:rounded-2xl p-8 md:p-20">
    <legend class="text-[#293439] pb-4 uppercase text-lg md:text-4xl font-semibold">Login</legend>
    <div class="flex flex-col">
      <label class="md:text-2xl" for="username">Username</label>
      <input 
        type="text" 
        name="username" 
        id="username" 
        placeholder="username" 
        class="login-input"
      />
    </div>
    <div class="flex flex-col">
      <label class="md:text-2xl" for="password">Password</label>
      <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="password" 
        class="login-input"
      />
    </div>
    <div class="flex justify-center items-center">
      <button 
        type="submit" 
        class="bg-[#00AAA2] text-white text-lg md:text-3xl 
        py-2 px-4 rounded-md mt-4 md:mt-8"
      >
        Login
      </button>
    </div>
  </form>
</div>
</template>
<script>
export default {
  name: 'LoginPage',
}
</script>