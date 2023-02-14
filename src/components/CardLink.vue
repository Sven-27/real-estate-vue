<template>
<!-- Added router to navigate to other pages -->
<router-link 
  v-for="(card) in cards.cards"
  :key="card.id"
  :to="card.link"
  class="card grid place-items-center" 
>
<v-icon 
  :name="card.logo" 
  class="oh-vue-card" 
/>

  <p class="py-7 font-semibold md:text-[1.8rem]">
    {{card.title}}
  </p>
</router-link>
</template>
<script>
import cards from '@/data/cardContent'

export default {
  data() {
    return {
      cards
    }
  },
}
</script>