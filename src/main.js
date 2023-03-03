import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import firebase from "firebase/compat/app";
import * as te from 'tw-elements';


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
  BiPencilFill,
  BiMoonStarsFill,
  BiEmojiSunglassesFill,
  GiClick

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
  BiPencilFill,
  BiMoonStarsFill,
  BiEmojiSunglassesFill,
  GiClick
);

createApp(App)
.use(router)
.use(store)
.use(te) 
.use(firebase)
.component("v-icon", OhVueIcon)
.mount('#app')
