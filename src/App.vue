<template>
  <div class="topper">
  <app-header v-on:changeComponent="updateComponent($event)"/>
  <div v-if="scroll" v-on:click="up" class="up"><span class="up__text">Up</span></div>
    <div class="grid">
      <navbar v-bind:component='component' v-on:changeComponent="updateComponent($event)"/>
      <main>
        <buttons v-on:changeComponent="updateComponent($event)" v-bind:back="back" v-bind:github="github" v-bind:linked="linked" v-bind:turnCount="turnCount" v-bind:info="info">
          <div class="buttons__button buttons__button--end" v-bind:class="{restart: restart}" v-if="end" v-on:click="restartGame"><span v-html="link"></span><span v-if="turns">{{ turnCount }} turns!</span></div>
        </buttons>
        <transition>
          <keep-alive v-bind:include=alive>
            <component v-bind:is="component" v-bind:mail="mail" v-on:changeComponent="updateComponent($event)" v-on:changeGithub="updateGithub($event)" v-on:changeLinked="updateLinked($event)" v-on:winnerAlert="winnerTurns($event)"/>
          </keep-alive>
        </transition>
      </main>  
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Instructions from './components/Instructions.vue'
import Buttons from './components/Buttons.vue'
import Reload from './components/Reload.vue'

export default {
  components: {
    'app-header': Header,
    'Navbar': Navbar,
    'Home': Home,
    'Contact': Contact,
    'About': About,
    'Projects': Projects,
    'Skills': Skills,
    'Instructions': Instructions,
    'Buttons': Buttons,
    'Reload': Reload
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
      link: 'Won in ',
      turns: true,
      restart: false,
      mail: '',
      alive: ['Home'],
      scroll: false
    }
  },
  methods: {
    up: function() {
      window.scroll(0, 0);
    },
    handleScroll: function () {
      this.scroll = true;
    },
    backToGame: function() {
      const vm = this;
      vm.component = 'Home';
      vm.alive = ['Home'];
      vm.turnCount = '';
      vm.end = false;
      vm.turns = true;
      vm.restart = false;
      vm.link = 'Won in ';
      vm.linked = false;
      vm.github = false;
      vm.back = false;
    },
    restartGame: function() {
      const vm = this;
      vm.alive = [];
      vm.component = 'Reload';
      setTimeout(vm.backToGame, 1000);
    },
    newLink: function(link) {
      const vm = this;
      vm.link = '<span>RESTART GAME</span>';
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
      else if(vm.component !== 'Home' && vm.component !== "Instructions" && vm.component == "Contact") {
        vm.back = true;
        vm.info = true;
        const user = 'arleta.joanna.jedrzejczak';
        const domain = 'gmail.com';
        const subject = '?subject=Mail from portfolio';
        const text = 'email';
        const all = ('<a class="contact__link" hr' + 'ef="mai' + 'lto:' + user + '\x40' + domain + subject + '">' + text + '<'+'/a>');
        vm.mail = all;
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
  },
    created () {
    document.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
    document.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss">


</style>
