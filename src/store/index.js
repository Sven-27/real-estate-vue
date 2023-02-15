import { createStore } from 'vuex'

import inspectionData from '@/store/modules/inspection-store'
import loginUser from '@/store/modules/login-store'

export default createStore({
  modules: {
    inspectionData,
    loginUser,
  }
})
