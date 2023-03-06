import axios from 'axios'
import { Inspections } from '@/models/dummyDataModel'

const baseUrl = 'http://localhost:3000/inspections'

export default {
  namespaced: true,

  state: {
    inspects: [],
    loading: false,
    errors: [],
  },
  getters: {
    sortInspections: state => {
      return state.inspects.sort((a, b) => {
        return a.date.localeCompare(b.date)
      })
    },
    
    findInspections: (state) => (id) => {
    return state.inspects.find(inspection => inspection.id === id) // Vind de juiste id van de inspectie
    },
    filterInspections: (state) => (id) => {
      return state.inspects.filter(inspection => inspection.id === id) // Filtert de inspecties op de juiste id
    },
  },
  mutations: {
    SET_INSPECTIONS(state, inspections) {
      state.inspects = inspections
      console.log(state.inspects)
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERRORS(state, errors) {
      state.errors = [...state.errors, errors]
    }
  },
  actions: {
    fetchInspections({ commit }) {
      commit('SET_LOADING', true)
      axios.get(baseUrl)
        .then(response => {
          commit('SET_LOADING', false)
          commit('SET_INSPECTIONS', response.data.map(item => new Inspections(item)))
          console.log(response.data)
        })
        .catch(error => {
          commit('SET_ERRORS', error)
        })
        .finally(() => {
          commit('SET_LOADING', false)
        })
    }
  },
}