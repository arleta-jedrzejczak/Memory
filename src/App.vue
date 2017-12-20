<template>
  <div class="grid">
    <navbar />
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <button v-on:click="component = 'contact'">Show contact</button>
    <button v-on:click="component = 'game'">Show game</button>
    <router-view/>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import game from './components/game.vue'
import contact from './components/contact.vue'

export default {
  components: {
    'navbar': navbar,
    'game': game,
    'contact': contact
  },
  data () {
    return {
      component: 'game'
    }
  }
}
</script>

<style lang="scss">


</style>
