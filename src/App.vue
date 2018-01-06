<template>
  <div class="grid">
    <navbar v-bind:component='component' v-on:changeComponent="updateComponent($event)"/>
    <instructions />
    <keep-alive>
      <component v-bind:firstCardLink="firstCardLink" v-bind:is="component" v-on:changeComponent="updateComponent($event)" v-on:sendLink="updateLink($event)"/>
    </keep-alive>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Instructions from './components/Instructions.vue'
import Links from './components/Links.vue'

export default {
  components: {
    'Navbar': Navbar,
    'Home': Home,
    'Contact': Contact,
    'About': About,
    'Projects': Projects,
    'Skills': Skills,
    'Instructions': Instructions,
    'Links': Links
  },
  data () {
    return {
      component: 'Home',
      firstCardLink: ''
    }
  },
  methods: {
    updateComponent: function(updatedComponent) {
      this.component = updatedComponent;
    },
    updateLink: function(updatedLink) {
      this.firstCardLink = updatedLink;
    }
  }
}
</script>

<style lang="scss">


</style>
