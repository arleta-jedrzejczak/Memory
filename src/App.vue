<template>
  <div class="grid">
    <navbar v-bind:component='component' v-on:changeComponent="updateComponent($event)"/>
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <div>
      <button v-on:click="component = 'contact'">Show contact</button>
      <button v-on:click="component = 'game'">Show game</button>
      <button v-on:click="component = 'about'">Show about</button>
      <button v-on:click="component = 'projects'">Show projects</button>
    </div>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import game from './components/game.vue'
import contact from './components/contact.vue'
import about from './components/about.vue'
import projects from './components/projects.vue'

export default {
  components: {
    'navbar': navbar,
    'game': game,
    'contact': contact,
    'about': about,
    'projects': projects
  },
  data () {
    return {
      component: 'game',
    }
  },
  methods: {
    updateComponent: function(updatedComponent) {
      this.component = updatedComponent;
    }
  }
}
</script>

<style lang="scss">


</style>
