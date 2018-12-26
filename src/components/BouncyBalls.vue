<template>
  <div class='particle-wrap'>
    <div id='particles-js'>
      <canvas class="bouncy-ball-canvas"></canvas>
    </div>
  </div>
</template>

<script>
import bouncyBallsVars from './BouncyBallsVariables'

export default {
  name: 'BouncyBalls',
  data () {
    return {
      canvas: null,
      cv: null,
      mouse: {
        x: null,
        y: null
      },
      // circles: null,
      circle1: null,
      circle2: null
    }
  },
  mounted () {
    this.getCanvas()
    this.$nextTick(() => {
      window.addEventListener('mousemove', this.changeMouseCords)
      window.addEventListener('resize', this.resizeCanvas)
      this.init()
      this.animate()
    })
  },
  methods: {
    getCanvas () {
      this.canvas = document.querySelector('.bouncy-ball-canvas')
      this.cv = this.canvas.getContext('2d')
      this.canvas.width = innerWidth
      this.canvas.height = innerHeight
      this.mouse.x = innerWidth / 2
      this.mouse.y = innerHeight / 2
    },
    changeMouseCords (event) {
      this.mouse.x = event.clientX
      this.mouse.y = event.clientY
    },
    resizeCanvas () {
      this.canvas.width = innerWidth
      this.canvas.height = innerHeight

      this.init()
    },
    Circles (x, y, radius, color) {
      this.x = x
      this.y = y
      this.radius = radius
      this.color = color

      this.update = (cv) => {
        this.draw(cv)
      }

      this.draw = (cv) => {
        cv.beginPath()
        cv.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        cv.fillStyle = this.color
        cv.fill()
        cv.closePath()
      }
    },
    init () {
      this.circle1 = new this.Circles(innerWidth / 2, innerHeight / 2, 100, 'purple')
      this.circle2 = new this.Circles(undefined, undefined, 30, 'black')
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.cv.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.circle1.update(this.cv)
      this.circle2.x = this.mouse.x
      this.circle2.y = this.mouse.y
      this.circle2.update(this.cv);

      (bouncyBallsVars.gatDistance(this.circle1.x, this.circle1.y, this.circle2.x, this.circle2.y) < this.circle1.radius + this.circle2.radius) ? this.circle1.color = 'red' : this.circle1.color = 'purple'
    }
  },
  beforeDestroy () {
    window.removeEventListener('mousemove', this.changeMouseCords)
    window.removeEventListener('resize', this.resizeCanvas)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.particle-wrap {
  background-color: #465888;
}
</style>
