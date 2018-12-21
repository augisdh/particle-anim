import Vue from 'vue'
import Router from 'vue-router'
import ParticleOne from '@/components/ParticleOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ParticleOne',
      component: ParticleOne
    }
  ],
  mode: 'history'
})
