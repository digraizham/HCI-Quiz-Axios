import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabPage.vue'
import HomePage from '../views/HomePage.vue'
import PageSecond from '../views/Page2.vue'
import RegistrationPage from '../views/RegistrationPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {

        path: 'home',
        component: HomePage
      },

      {
        path: 'page2',
        component: PageSecond
      },

    ]
  },
  {
    path: '/registrationpage',
    component: RegistrationPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router