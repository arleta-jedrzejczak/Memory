<template>
  <section id="about" class="about">
    <h2 class="about__name">
      <span class="about__name--icon-label">About me</span>
      <span class="demo-icon icon-user about__name--icon" data-icon="about" aria-hidden="true"></span>
    </h2>
    <div class="allabout">
        <span v-html="img"></span>
        <article class="allabout__content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit odio, semper at mattis id, ullamcorper mollis eros. Proin sit amet rutrum leo, sit amet convallis odio. Maecenas suscipit tempor nunc elementum bibendum. Morbi nec fermentum justo, ac mattis erat.</p>
          <p>Aenean at euismod massa, ut eleifend ligula. Proin mi purus, pellentesque id massa ac, dictum tincidunt nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </article>
    </div>
  </section>
</template>

<script>



export default {
  data() {
    return {
      img: '<img src="images/about-photo-s.png" alt="my portrait" class="allabout__photo">'
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
