import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Error from "../views/Error/Error.vue"
import Teacher from "../views/Teachers/Teachers.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: "/teachers",
          name: "teachers",
          component: Teacher
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: Error
    },
  ]
})

export default router
