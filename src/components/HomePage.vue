<template> 
<main class="grid grid-cols-2 mx-auto gap-2 p-2 
  h-full md:h-[90%] md:w-[90%] xl:w-3/5">
  <CardLink />
</main>
</template>

<script>
import CardLink from '@/components/CardLink.vue'

export default {
  name: 'HomePage',
  components: {
    CardLink,
  },
}
</script>

