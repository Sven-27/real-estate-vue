import { createStore } from 'vuex'

import inspectionData from '@/store/modules/inspection-store'

export default createStore({
  modules: {
    inspectionData,
  }
})
