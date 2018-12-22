<template>
  <div id="app">
    <div class="nav d-flex-center">
      <div class="container margin-sides d-flex-around">
        <div class="link-div d-flex-center" @click="changeComponent">
          <router-link to="/particle-line" data-comp="ParticleLine">
            Line mode
          </router-link>
        </div>
        <div class="link-div d-flex-center" @click="changeComponent">
          <router-link to="/particle-snow" data-comp="ParticleSnow">
            Snow mode
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      configName: null
    }
  },
  watch: {
    configName () {
      if (this.$route.name === 'ParticleLine' || this.$route.name === 'ParticleSnow') {
        this.$router.go(this.$route.fullPath)
      }
    }
  },
  methods: {
    changeComponent (event) {
      this.configName = event.target.dataset.comp
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

.link-div {
  width: 100px;
  height: 50px;
  background-color: rgba(255, 255, 255, .7);
  cursor: pointer;
  display: flex;
}
  .link-div > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #333;
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
