import Vue from 'vue'
import Router from 'vue-router'
import Day from '@/components/Day'
import Week from '../components/week'
import History from '../components/History'
import Share from '../components/Share'
import Mine from '../components/Mine'
import Login from '../components/login'
import Resign from '../components/resign'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect: '/day'
      },
      {
          path: '/week',
          name: "Week",
          component: Week
      },
      {
          path: '/history',
          name: 'History',
          component: History
      },
      {
          path: '/day',
          name: 'Day',
          component: Day
      },
      {
          path: '/share',
          name: 'Share',
          component: Share
      },
      {
          path: '/mine',
          name: 'Mine',
          component: Mine
      },
      {
          path: '/login',
          name: 'Login',
          component: Login
      },
      {
          path: '/resign',
          name: 'Resign',
          component: Resign
      }
  ]
})
