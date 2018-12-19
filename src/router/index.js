import Vue from 'vue'
import Router from 'vue-router'
import ParticleBasic from '@/components/ParticleBasic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ParticleBasic',
      component: ParticleBasic
    }
  ],
  mode: 'history'
})
