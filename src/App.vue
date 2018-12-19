<template>
  <div id="app">
    <div class="nav d-flex-center">
      <div class="container margin-sides d-flex-around">
        <div class="a d-flex-center" @click="changeComponent" data-comp="basic">
          BASIC
        </div>
        <div class="a d-flex-center" @click="changeComponent" data-comp="other">
          OTHER
        </div>
        <div class="a d-flex-center" @click="changeComponent" data-comp="other2">
          OTHER 2
        </div>
        <div class="a d-flex-center" @click="changeComponent" data-comp="other3">
          OTHER 3
        </div>
        <div class="a d-flex-center" @click="changeComponent" data-comp="other4">
          OTHER 4
        </div>
      </div>
    </div>
    <particleBasic v-if="componentToShow === 'basic'"></particleBasic>
  </div>
</template>

<script>
import particleBasic from './components/ParticleBasic'

export default {
  name: 'App',
  components: {
    particleBasic
  },
  data () {
    return {
      configToUse: {},
      componentToShow: 'basic'
    }
  },
  mounted () {
    this.startParicle()
  },
  methods: {
    setParticlesConfig () {
      this.configToUse = particleBasic.data().particlesConfig
    },
    initParticleJS () {
      window.particlesJS('particles-js', this.configToUse)
    },
    startParicle () {
      require('particles.js')
      this.$nextTick(() => {
        this.setParticlesConfig()
        this.initParticleJS()
      })
    },
    changeComponent (event) {
      this.componentToShow = event.target.dataset.comp
      this.startParicle()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1000px;
  width: 100%;
}
.margin-sides {
  margin: 0 25px;
}
.d-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-flex-around {
  display: flex;
  justify-content: space-around;
}

.nav {
  position: absolute;
  width: 100%;
  height: 75px;
  background-color: rgba(0, 0, 0, .65);
  z-index: 10;
}

.a {
  width: 100px;
  height: 50px;
  background-color: rgba(255, 255, 255, .7);
  cursor: pointer;
}

/* Components */
.particle-wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#particles-js {
  width: 100%;
  height: 100%;
}
</style>
