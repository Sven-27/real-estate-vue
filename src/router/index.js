import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import ScheduledTasks from '@/components/ScheduledTasks.vue'
import CompletedTasks from '@/components/CompletedTasks.vue'
import KnowledgeBase from '@/components/KnowledgeBase.vue'
import SettingTasks from '@/components/SettingTasks.vue'
import LoginPage from '@/components/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/inspection',
    name: 'inspection',
    component: () => import('@/components/inspectionDetails/InspectionView.vue') // lazy-loaded
  },
  {
    path: '/inspection-detail/:id',
    component: () => import('@/components/inspectionDetails/InspectionDetails.vue') // lazy-loaded
  },
  {
    path: '/scheduled',
    name: 'scheduled',
    component: ScheduledTasks
  },
  {
    path: '/completed',
    name: 'completed',
    component: CompletedTasks
  },
  {
    path: '/knowledge-base',
    name: 'knowledge-base',
    component: KnowledgeBase
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingTasks
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
