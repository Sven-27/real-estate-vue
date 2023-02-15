import { employees } from '@/data/fakeLogin'

export default {
  namespaced: true,
  state: {
    user: "",
    password: "",

  },
  getters: {
    loginUser: (state) => {
      return state.user.find(employee => employee.username === employees.username)
    },
    loginEmail: (state) => {
      return state.password.find(employee => employee.password === employees.password)
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, user) {
      commit('SET_USER', user)
    },  
    logout({ commit }) {
      commit('SET_USER', "")
    },
  },
}