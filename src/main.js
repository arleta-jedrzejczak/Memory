import Vue from 'vue'
import Preloader from './Preloader.vue'
import App from './App.vue'
import Foot from './Foot.vue'
import router from './router'

new Vue({
  el: '#preloader',
  router,
  render: j => j(Preloader)
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

new Vue({
  el: '#foot',
  render: f => f(Foot)
})