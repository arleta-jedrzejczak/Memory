<template>
  <div class="grid">
    <navbar />
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <button v-on:click="component = 'contact'">Show contact</button>
    <button v-on:click="component = 'game'">Show game</button>
    <button v-on:click="component = 'about'">Show about</button>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import game from './components/game.vue'
import contact from './components/contact.vue'
import about from './components/about.vue'

export default {
  components: {
    'navbar': navbar,
    'game': game,
    'contact': contact,
    'about': about
  },
  data () {
    return {
      component: 'game',
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">


</style>
