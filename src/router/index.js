import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

import HomePage from '@/components/HomePage.vue'
import ScheduledTasks from '@/components/ScheduledTasks.vue'
import CompletedTasks from '@/components/CompletedTasks.vue'
import KnowledgeBase from '@/components/KnowledgeBase.vue'
import SettingTasks from '@/components/SettingTasks.vue'
import LoginPage from '@/components/authentication/LoginPage.vue'
import RegisterPage from '@/components/authentication/RegisterPage.vue'
import ResetPassword from '@/components/authentication/ResetPassword.vue'
import SearchInspections from '@/components/SearchInspections.vue'

// Routes for navigation to different pages

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('@/components/ProjectInformation.vue'), // lazy-loaded
    meta: { requiresAuth: true }
  },
  {
    path: '/active',
    component: () => import('@/components/NoActivity.vue'), // lazy-loaded
    meta: { requiresAuth: true }
  },
  {
    path: '/active/:id',
    component: () => import('@/components/ActiveInspection.vue'), // lazy-loaded
    meta: { requiresAuth: true }
  },
  {
    path: '/scheduled',
    name: 'scheduled',
    component: ScheduledTasks,
    meta: { requiresAuth: true }
  },
  {
    path: '/completed',
    name: 'completed',
    component: CompletedTasks,
    meta: { requiresAuth: true }
  },
  {
    path: '/knowledge-base',
    name: 'knowledge-base',
    component: KnowledgeBase,
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingTasks,
    meta: { requiresAuth: true }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchInspections,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({ // Create the router
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function getCurrentUser() { // Get the current user
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to) => { // Check if the user is logged in
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !(await getCurrentUser())) {
    return '/login'
  }
})

export default router
