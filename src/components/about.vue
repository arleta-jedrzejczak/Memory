<template>
    <div id="about" class="about-me">                            
        <h2 class="about-me__name">About me</h2>
        <img src="images/about-photo-s.png" alt="my portrait" class="about-me__photo" />
        <article class="about-me__content">
            <p>{{ description }}</p>
        </article>
    </div>
</template>

<script>



export default {
  data() {
    return {
      description: 'Nullam commodo mollis enim luctus dictum. Morbi at laoreet est. Integer blandit nulla ullamcorper augue accumsan, sed condimentum orci venenatis. In finibus sem neque, nec tincidunt nisl laoreet vitae. Donec vel auctor tellus, vel sollicitudin est. Integer vehicula sit amet libero eu venenatis. Nam tortor nisl, ultrices sed ligula id, malesuada laoreet arcu.'
      
    }
  }
}
</script>

<style lang="scss">

</style>
