<template>
    <section class="contact">
        <h2 class="contact__name">
            <span class="contact__name--icon-label">Contact</span>
            <span class="material-icons contact__name--icon" data-icon="contact" aria-hidden="true">&#xE0E1;</span>
        </h2>
        <p class="contact__item contact__mail" v-html="mail"></p>
        <p class="contact__item contact__facebook"><a class="contact__link" href="https://www.facebook.com/laililang" target="_blank">Facebook</a></p>
        <p class="contact__item contact__twitter"><a class="contact__link" href="https://twitter.com/laililang" target="_blank">Twitter</a></p>
        <p class="contact__item contact__linkedin"><a class="contact__link" href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">LinkedIn</a></p>
         <p class="contact__item contact__github"><a class="contact__link" href="https://github.com/laililang" target="_blank">GitHub</a></p>
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
