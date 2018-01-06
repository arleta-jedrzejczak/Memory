<template>
    <section>
        <button id="link" v-html="firstCardLink"></button>
        <button v-on:click="changeComponent">Back to the game</button>
    </section>
</template>

<script>



export default {
    props: {
        firstCardLink: {
            type: String
        }
    },
  data () {
    return {
    }
  },
  methods: {
              changeComponent: function(firstCardProperty) {
          var vm = this;
          this.$emit('changeComponent', 'Home');
        },
  }
}
</script>

<style lang="scss">

</style>
