<template>
  <section id="about" class="about">
    <h2 class="about__name">About me</h2>
    <div class="about-me">                            
        <div v-html='photo'></div>
        <article class="about-me__content">
            <p>{{ description }}</p>
        </article>
    </div>
    <buton v-on:click="changeComponent">Back to the game</buton>
  </section>
</template>

<script>



export default {
  data() {
    return {
      photo: '<img src="images/about-photo-s.png" alt="my portrait" class="about-me__photo" />',
      description: 'Nullam commodo mollis enim luctus dictum. Morbi at laoreet est. Integer blandit nulla ullamcorper augue accumsan, sed condimentum orci venenatis. In finibus sem neque, nec tincidunt nisl laoreet vitae. Donec vel auctor tellus, vel sollicitudin est. Integer vehicula sit amet libero eu venenatis. Nam tortor nisl, ultrices sed ligula id, malesuada laoreet arcu.'
      
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
