<template>
    <section class="buttons">
        <button class="buttons__button buttons__button--info" transition="expand" v-on:click="moveComponent('Instructions')" v-if="info">HOW TO PLAY?</button>
        <button class="buttons__button buttons__button--back" v-on:click="moveComponent('Home')" v-show="back">Back to the game</button>
        <button class="buttons__button buttons__button--github" v-if="github"><a class="buttons__button--link" href="https://github.com/laililang" target="_blank">Go to my GitHub</a></button>
        <button class="buttons__button buttons__button--linkedin" v-if="linked"><a class="buttons__button--link" href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a></button>
        <button class="buttons__button buttons__button--end" v-bind:class="{restart: restart}" v-if="end"><span v-html="link"></span><span v-if="turns">{{ turnCount }} turns!</span></button>
    </section>
</template>

<script>

export default {
    props: {
        github: {
            type: Boolean
        },
        linked: {
            type: Boolean
        },
        turnCount: {
        },
        back: {
            type: Boolean
        },
        info: {
            type: Boolean
        },
        end: {
            type: Boolean
        },
        link: {
            type: String
        },
        turns: {
            type: Boolean
        },
        restart: {
            type: Boolean
        }
    },
  data () {
    return {
        component: ''
    }
  },
  methods: {
              changeComponent: function() {
          const vm = this;
          this.$emit('changeComponent', vm.component);
        },
        moveComponent: function(component) {          
            const vm = this;
            vm.component = component;
            setTimeout(vm.changeComponent, 500);
        }
  }
}
</script>

<style lang="scss">

</style>