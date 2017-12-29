<template>
  <div class="grid">
    <navbar v-bind:component='component' v-on:changeComponent="updateComponent($event)"/>
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <div>
      <button v-on:click="component = 'Contact'">Show contact</button>
      <button v-on:click="component = 'Home'">Show home</button>
      <button v-on:click="component = 'About'">Show about</button>
      <button v-on:click="component = 'Projects'">Show projects</button>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

export default {
  components: {
    'Navbar': Navbar,
    'Home': Home,
    'Contact': Contact,
    'About': About,
    'Projects': Projects
  },
  data () {
    return {
      component: 'Home',
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
