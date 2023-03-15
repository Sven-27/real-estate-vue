// This store fetches the inspections from the database and stores them in the state.
import axios from 'axios'
import { Inspections } from '@/models/dummyDataModel'

// const baseUrl = 'http://localhost:3000/inspections' // local database
const baseUrl = 'https://powerful-uniform-bass.cyclic.app/inspections' // live online database

export default {
  namespaced: true,

  state: {
    inspects: [], 
    loading: false,
    errors: [],
  },
  getters: {
    sortInspections: state => {  // Sort data by date
      return state.inspects.sort((a, b) => {
        return a.date.localeCompare(b.date)
      })
    },
    getInspections: state => { // stashes the inspections in local storage
      if(!localStorage.getItem('scheduledTasks')) {
       state.inspects = localStorage.setItem('scheduledTasks', JSON.stringify(state.inspects))
      }
      return state.inspects
    },
    findInspections: (state) => (id) => {
      return state.inspects.find(inspection => inspection.id === id) // Vind de juiste id van de inspectie
    },
    filterInspections: (state) => (id) => {
      return state.inspects.filter(inspection => inspection.id === id) // Filtert de inspecties op de juiste id
    },
  },
  mutations: {
    SET_INSPECTIONS(state, inspections) { // Set the inspections in the state
      console.log(state.inspects)
      state.inspects = inspections
      
    },
    SET_LOADING(state, loading) { // Set the loading state
      state.loading = loading
    },
    SET_ERRORS(state, errors) { // Set the errors in the state
      state.errors = [...state.errors, errors]
    }
  },
  actions: {
    fetchInspections({ commit }) { // Fetch the inspections from the database
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