<template>
  <div class="grid">
    <navbar v-bind:component='component' v-on:changeComponent="updateComponent($event)"/>
    <main>
      <buttons v-on:changeComponent="updateComponent($event)" v-bind:back="back" v-bind:github="github" v-bind:linked="linked" v-bind:turnCount="turnCount" v-bind:info="info" v-bind:end="end" v-bind:link="link" v-bind:turns="turns" v-bind:restart="restart"/>
      <keep-alive>
        <component v-bind:is="component" v-on:changeComponent="updateComponent($event)" v-on:changeGithub="updateGithub($event)" v-on:changeLinked="updateLinked($event)" v-on:winnerAlert="winnerTurns($event)"/>
      </keep-alive>
    </main>  
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
import Buttons from './components/Buttons.vue'

export default {
  components: {
    'Navbar': Navbar,
    'Home': Home,
    'Contact': Contact,
    'About': About,
    'Projects': Projects,
    'Skills': Skills,
    'Instructions': Instructions,
    'Buttons': Buttons
  },
  data () {
    return {
      component: 'Home',
      turnCount: '',
      linked: false,
      github: false,
      back: false,
      info: true,
      end: false,
      link: 'You won in ',
      turns: true,
      restart: false
    }
  },
  methods: {
    newLink: function(link) {
      const vm = this;
      vm.link = '<span class="buttons__button--restart">RESTART GAME</span>';
      vm.turns = false;
      vm.restart = true;
    },
    updateComponent: function(updatedComponent) {
      const vm = this;
      vm.component = updatedComponent;
      if(vm.component !== 'Home' && vm.component === "Instructions") {
        vm.back = true;
        vm.info = false;
      }
      else if(vm.component !== 'Home' && vm.component !== "Instructions") {
        vm.back = true;
        vm.info = true;
      }
      else if (vm.component === 'Home' && vm.component !== "Instructions") {
        vm.back = false;
        vm.info = true;
      }
    },
    updateGithub: function() {
      this.github = true;
    },
    updateLinked: function() {
      this.linked = true;
    },
    winnerTurns: function(count) {
      const vm = this;
      vm.turnCount = count;
      vm.end = true;
      setTimeout(vm.newLink, 5000);
    }
  }
}
</script>

<style lang="scss">


</style>
