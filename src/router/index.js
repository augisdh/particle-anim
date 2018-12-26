import Vue from 'vue'
import Router from 'vue-router'
import ParticleLine from '@/components/ParticleLine'
import ParticleSnow from '@/components/ParticleSnow'
import BouncyBalls from '@/components/BouncyBalls'

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
    },
    {
      path: '/bouncy-balls',
      name: 'BouncyBalls',
      component: BouncyBalls
    }
  ],
  mode: 'history'
})
