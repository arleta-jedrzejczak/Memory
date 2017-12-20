import Vue from 'vue'
import Head from './Head.vue'
import App from './App.vue'
import Foot from './Foot.vue'
import router from './router'

new Vue({
  el: '#head',
  render: e => e(Head)
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