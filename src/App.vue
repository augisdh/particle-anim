<template>
  <div id="app">
    <div class="nav d-flex-center">
      <div class="container margin-sides d-flex-around">
        <div class="a d-flex-center" @click="changeComponent" data-comp="particleOne">
          MODE ONE
        </div>
        <div class="a d-flex-center" @click="changeComponent" data-comp="particleTwo">
          MODE TWO
        </div>
        <div class="a d-flex-center" @click="changeComponent" data-comp="other">
          MODE THREE
        </div>
      </div>
    </div>
    <ParticleOne v-if="particleMode === true" :configView="{configName: this.configName, configSetup: this.particleConfigs}"></ParticleOne>
  </div>
</template>

<script>
import ParticleOne from './components/ParticleOne'

export default {
  name: 'App',
  components: {
    ParticleOne
  },
  data () {
    return {
      particleMode: true,
      configName: 'particleOne',
      particleConfigs: {
        particleOne: {
          'particles': {
            'number': {
              'value': 80,
              'density': {
                'enable': true,
                'value_area': 800
              }
            },
            'color': {
              'value': '#ffffff'
            },
            'shape': {
              'type': 'circle',
              'stroke': {
                'width': 0,
                'color': '#000000'
              },
              'polygon': {
                'nb_sides': 5
              },
              'image': {
                'src': 'img/github.svg',
                'width': 100,
                'height': 100
              }
            },
            'opacity': {
              'value': 0.5,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 3,
              'random': true,
              'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 150,
              'color': '#ffffff',
              'opacity': 0.4,
              'width': 1
            },
            'move': {
              'enable': true,
              'speed': 5,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'bounce': false,
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'interactivity': {
            'detect_on': 'canvas',
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'repulse'
              },
              'onclick': {
                'enable': true,
                'mode': 'push'
              },
              'resize': true
            },
            'modes': {
              'grab': {
                'distance': 800,
                'line_linked': {
                  'opacity': 1
                }
              },
              'bubble': {
                'distance': 800,
                'size': 80,
                'duration': 2,
                'opacity': 0.8,
                'speed': 3
              },
              'repulse': {
                'distance': 100,
                'duration': 0.4
              },
              'push': {
                'particles_nb': 4
              },
              'remove': {
                'particles_nb': 2
              }
            }
          },
          'retina_detect': true
        },
        particleTwo: {
          'particles': {
            'number': {
              'value': 80,
              'density': {
                'enable': true,
                'value_area': 800
              }
            },
            'color': {
              'value': '#ffffff'
            },
            'shape': {
              'type': 'triangle',
              'stroke': {
                'width': 0,
                'color': '#000000'
              },
              'polygon': {
                'nb_sides': 5
              },
              'image': {
                'src': '',
                'width': 100,
                'height': 100
              }
            },
            'opacity': {
              'value': 0.5,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 10,
              'random': true,
              'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 150,
              'color': '#ffffff',
              'opacity': 0.4,
              'width': 1
            },
            'move': {
              'enable': true,
              'speed': 5,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'bounce': false,
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'interactivity': {
            'detect_on': 'canvas',
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'repulse'
              },
              'onclick': {
                'enable': true,
                'mode': 'push'
              },
              'resize': true
            },
            'modes': {
              'grab': {
                'distance': 800,
                'line_linked': {
                  'opacity': 1
                }
              },
              'bubble': {
                'distance': 800,
                'size': 80,
                'duration': 2,
                'opacity': 0.8,
                'speed': 3
              },
              'repulse': {
                'distance': 100,
                'duration': 0.4
              },
              'push': {
                'particles_nb': 4
              },
              'remove': {
                'particles_nb': 2
              }
            }
          },
          'retina_detect': true
        }
      }
    }
  },
  methods: {
    changeComponent (event) {
      this.configName = event.target.dataset.comp;
      (this.configName === 'particleOne' || this.configName === 'particleTwo') ? this.particleMode = true : this.particleMode = false
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
