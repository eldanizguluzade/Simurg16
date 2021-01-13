import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import VueCarousel from 'vue-carousel';
import 'aos/dist/aos.css'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber);
Vue.use(VueCarousel);

new Vue({
  el: '#app',
  created () {
    AOS.init()
},
  render: h => h(App)
})
