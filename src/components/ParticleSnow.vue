<template>
  <div class='particle-wrap'>
    <div id='particles-js'></div>
  </div>
</template>

<script>
import 'particles.js'

export default {
  name: 'ParticleSnow',
  data () {
    return {
      particleSnow: {
        'particles': {
          'number': {
            'value': 150,
            'density': {
              'enable': true,
              'value_area': 150
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
              'src': '',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.7,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 5,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': false,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 8,
            'direction': 'bottom',
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
  },
  mounted () {
    this.$nextTick(() => {
      this.initParticleJS()
    })
  },
  methods: {
    initParticleJS () {
      window.particlesJS('particles-js', this.particleSnow)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.particle-wrap {
  background-color: #465888;
  background-image: radial-gradient(circle, #5B95AB, #465888)
}
</style>
