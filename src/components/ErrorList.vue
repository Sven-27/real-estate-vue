<template>
<div class="text-red-500 flex justify-center">
  <div>{{  errorList }}</div>
</div>
</template>
<script>
export default {
  name: 'ErrorList',
  computed: {
    errorList() {
      return this.$store.state.inspectionData.errorList
    },
  }
}
</script>