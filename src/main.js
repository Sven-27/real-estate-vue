import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import router
import store from './store' // import store state management
import { OhVueIcon, addIcons } from "oh-vue-icons"; // icons library
import firebase from "firebase/compat/app"; // firebase
import * as te from 'tw-elements'; // tailwind elements


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
  GiClick,
  BiHouseDoorFill,
  FaHouseDamage,
  GiGreenPower,
  BiTools,
  MdKeyboardarrowdown,
  HiSolidDocumentSearch,
  FcDocument

} from "oh-vue-icons/icons";

// Add icons to project globally
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
  GiClick,
  BiHouseDoorFill,
  FaHouseDamage,
  GiGreenPower,
  BiTools,
  MdKeyboardarrowdown,
  HiSolidDocumentSearch,
  FcDocument
);

createApp(App)
.use(router)
.use(store)
.use(te) 
.use(firebase)
.component("v-icon", OhVueIcon)
.mount('#app')
