import Vue from 'vue'
import Router from 'vue-router'
import ParticleLine from '@/components/ParticleLine'
import ParticleSnow from '@/components/ParticleSnow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/particle-line',
      name: 'ParticleLine',
      component: ParticleLine
    },
    {
      path: '/particle-snow',
      name: 'ParticleSnow',
      component: ParticleSnow
    }
  ],
  mode: 'history'
})
