import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

import HomePage from '@/components/HomePage.vue'
import ScheduledTasks from '@/components/ScheduledTasks.vue'
import CompletedTasks from '@/components/CompletedTasks.vue'
import KnowledgeBase from '@/components/KnowledgeBase.vue'
import SettingTasks from '@/components/SettingTasks.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import ResetPassword from '@/components/ResetPassword.vue'

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
    path: '/inspection',
    name: 'inspection',
    component: () => import('@/components/inspectionDetails/InspectionView.vue'), // lazy-loaded
    meta: { requiresAuth: true }
  },
  {
    path: '/inspection-detail/:id',
    component: () => import('@/components/inspectionDetails/InspectionDetails.vue'), // lazy-loaded
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function getCurrentUser() {
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

router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !(await getCurrentUser())) {
    return '/login'
  }
})

export default router
