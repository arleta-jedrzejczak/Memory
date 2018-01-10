<template>
    <section class="contact">
        <h2 class="contact__name">Contact</h2>
        <div class="contact__channels" v-html="mail"></div>
    </section>
</template>

<script>



export default {
    props: {
        mail: {
            type: String
        }
    },
  data () {
    return {

    }
  },
  methods: {
      
  }
}
</script>

<style lang="scss">

</style>
