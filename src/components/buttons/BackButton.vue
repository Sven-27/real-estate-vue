<template>
<router-link to="/">
  <div class="grid place-items-center mb-4">
    <button 
      type="button"
      class="bg-[#00AAA2] text-white text-md md:text-2xl 
      py-2 px-8 rounded-md mt-4 hover:bg-[#39b7b1]"
    >
      Go to Dashboard
    </button>
  </div>
</router-link>
</template>
<script>
export default {
  name: 'BackButton'
}
</script>