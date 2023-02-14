//gedeelde functionaliteit
export default {
  methods: {
    // functie om in willekeurige componenten de afbeeldingen te kunnen gebruiken
    getImgUrl(img) {
      // console.log('getImgUrl() wordt aangeroepen vanuit mixins.js'); 
      return require('@/assets/logos/' + img )
    }
  }
}