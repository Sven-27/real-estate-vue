import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { OhVueIcon, addIcons } from "oh-vue-icons";

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
  BiExclamationCircleFill
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
  BiExclamationCircleFill
);

createApp(App)
.use(router)
.use(store)
.component("v-icon", OhVueIcon)
.mount('#app')
