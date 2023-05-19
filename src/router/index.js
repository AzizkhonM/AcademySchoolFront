import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Error from "../views/Error/Error.vue"
import Teacher from "../views/Teachers/Teachers.vue"
import Student from "../views/Students/Students.vue"
import Home from "../views/Home/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: "home",
          component: Home
        },
        {
          path: "/teachers",
          name: "teachers",
          component: Teacher
        },
        {
          path: "/students",
          name: "students",
          component: Student
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
