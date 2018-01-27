<template>
    <section class="buttons">
        <div class="buttons__button buttons__button--back" v-on:click="moveComponent('Home')" v-show="back">Back to the game</div>
        <div class="buttons__button buttons__button--info" transition="expand" v-on:click="moveComponent('Instructions')" v-if="info">How to play?</div>
        <a class="buttons__button--link" href="https://github.com/laililang" target="_blank" v-if="github"><div class="buttons__button buttons__button--github">Go to my GitHub</div></a>
        <div class="buttons__button buttons__button--linkedin" v-if="linked"><a class="buttons__button--link" href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a></div>
        <slot></slot>
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