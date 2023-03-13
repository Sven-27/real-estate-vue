// This is the store for the firebase authentication
import { auth } from '@/firebaseConfig'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
} from 'firebase/auth'

export default {
  namespaced: true,
  state: {
    user: {
      loggedIn: false,
      data: null,
    }
  },
  getters: {
    user(state){ // Get the user from the state
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) { // Set the logged in state
    state.user.loggedIn = value;
    },
    SET_USER(state, data) { // Set the user data in the state
      state.user.data = data;
    }
  },
  actions: {
    async register(context, { email, password, name}){ // Register a new user
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('SET_USER', response.user)
        updateProfile(response.user, {displayName: name})
        console.log(response.user)
      } 
      else {
        console.error('register failed')
      }
    },
 
    async logIn(context, { email, password }){ // Log in a user
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('SET_USER', response.user)
        console.log(response.user)
      } else {
        throw new Error('login failed')
      }
    },

    async logOut(context){ // Log out a user
      await signOut(auth)
      context.commit('SET_USER', null)
    },

    async fetchUser(context ,user) { // Fetch the user from the Firebase authentication
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
        displayName: user.displayName,
        email: user.email
        });
      } else {
        context.commit("SET_USER", null);
      }
    },
  },
}
