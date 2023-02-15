<template>
<div>
  <h3>See errors!</h3>
  <div>{{  errorList }}</div>
</div>
</template>
<script>
export default {
  name: 'ErrorList',
  computed: {
    errorList() {
      return this.$store.state.inspectionData.errorList
    }
  }
}
</script>