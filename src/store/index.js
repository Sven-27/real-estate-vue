// importing the modules and creating the store
import { createStore } from 'vuex'

import inspectionData from '@/store/modules/inspection-store'
import firebase from '@/store/modules/firebase-store'

export default createStore({
  modules: {
    inspectionData,
    firebase,
  }
})
