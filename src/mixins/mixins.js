//gedeelde functionaliteit
export default {
  methods: {
    // functie om in willekeurige componenten de afbeeldingen te kunnen gebruiken
    getImgUrl(img) {
      return require('@/assets/logos/' + img )
    },
    getPhotos(photo) {
      return require('@/assets/images/' + photo )
    }
  }
}