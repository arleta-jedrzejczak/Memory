<template>
  <section id="about" class="about">
    <h2 class="about__name">
      <span class="about__name--icon-label">About me</span>
      <span class="demo-icon icon-user about__name--icon" data-icon="about" aria-hidden="true"></span>
    </h2>
    <div class="allabout">                            
        <img src="../../images/about-photo-s.png" alt="my portrait" class="allabout__photo" />
        <article class="allabout__content">
            <p>{{ description }}</p>
        </article>
    </div>
  </section>
</template>

<script>



export default {
  data() {
    return {
      description: 'Nullam commodo mollis enim luctus dictum. Morbi at laoreet est. Integer blandit nulla ullamcorper augue accumsan, sed condimentum orci venenatis. In finibus sem neque, nec tincidunt nisl laoreet vitae. Donec vel auctor tellus, vel sollicitudin est. Integer vehicula sit amet libero eu venenatis. Nam tortor nisl, ultrices sed ligula id, malesuada laoreet arcu.'
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
