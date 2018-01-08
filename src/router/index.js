import Vue from 'vue'
import Router from 'vue-router'
import Day from '@/components/Home'
import Week from '../components/week'
import History from '../components/History'
import Edit from '../components/Edit'
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
          name: 'Histoty',
          component: History
      },
      {
          path: '/edit',
          name: 'Edit',
          component: Edit
      },
      {
          path: '/day',
          name: 'Day',
          component: Day
      }
  ]
})
