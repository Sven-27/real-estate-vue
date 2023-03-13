<template>
  <div class="grid place-items-center mb-4">
    <button 
      type="button"
      class="bg-[#00AAA2] text-white text-sm w-44 md:w-60 md:text-2xl 
      py-2 px-8 rounded-md mt-4 hover:bg-[#39b7b1]"
    >
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'ButtonGeneral'
}
</script>