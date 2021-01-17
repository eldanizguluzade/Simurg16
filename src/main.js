import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import VueCarousel from 'vue-carousel'
import 'aos/dist/aos.css'


Vue.use(VueCarousel);

new Vue({
  el: '#app',
  created () {
    AOS.init()
},
  render: h => h(App)
})
