<template>
  <div class='particle-wrap'>
    <div id='particles-js'></div>
  </div>
</template>

<script>
import 'particles.js'

export default {
  name: 'ParticleOne',
  props: {
    configView: {
      configName: '',
      configSetup: {}
    }
  },
  watch: {
    configView () {
      this.initParticleJS()
      console.log(this.configView.configSetup[this.configView.configName])
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initParticleJS()
    })
  },
  methods: {
    initParticleJS () {
      window.particlesJS('particles-js', this.configView.configSetup[this.configView.configName])
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.particle-wrap {
  background: linear-gradient(#0d284d 20%, #1b3e6e 50%, #537895);
}
</style>
