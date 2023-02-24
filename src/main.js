import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as firebase from "firebase/app";
// import * as auth from "firebase/auth";


import { 
  BiSquareFill,
  BiCircleFill, 
  BiTriangleFill,
  BiBellFill,
  BiGearFill,
  GiBookmarklet,
  BiCheckCircleFill,
  IoApps,
  BiWrench,
  CoMagnifyingGlass,
  BiExclamationCircleFill,
  BiEyeFill,
  BiEyeSlashFill,
  BiPencilFill
} from "oh-vue-icons/icons";


addIcons(
  BiSquareFill, 
  BiCircleFill, 
  BiTriangleFill,
  BiBellFill,
  BiGearFill,
  GiBookmarklet,
  BiCheckCircleFill,
  IoApps,
  BiWrench,
  CoMagnifyingGlass,
  BiExclamationCircleFill,
  BiEyeFill,
  BiEyeSlashFill,
  BiPencilFill
);



// router.beforeEach((to, from, next) => {
//   const user = firebaseAuth.auth.currentUser;
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   if (requiresAuth && !user) {
//     next("/register");
//   } else if (requiresAuth && user) {
//     next("/login");
//   } else {
//     next();
//   }
// });

createApp(App)
.use(router)
.use(store)
.use(firebase)
.component("v-icon", OhVueIcon)
.mount('#app')
