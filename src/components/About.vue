<template>
  <section id="about" class="about">
    <h2 class="about__name">
      <span class="about__name--icon-label">About me</span>
      <span class="material-icons about__name--icon" data-icon="about" aria-hidden="true">&#xE87C;</span>
    </h2>
    <div class="allabout">
        <span v-html="img"></span>
        <span v-html="imgsquare"></span>
        <article class="allabout__content">
          <p class="allabout__content--parag">Hello, my name is <span class="allabout__content--bold">Arleta</span>. I'm web developer wannabe.
          <p class="allabout__content--parag">I've been studying how to build websites for over a year. I'm interested in client and server sides in applications and besides explore front-end environment, also starting to learn PHP and MySQL.</p>
          <p class="allabout__content--parag">I'm currently <span class="allabout__content--bold">looking for a first job or an internship as a junior front-end developer</span>.</p>
        </article>
    </div>
  </section>
</template>

<script>



export default {
  data() {
    return {
      img: '<img src="images/about-photo-s.png" alt="my portrait" class="allabout__photo allabout__photo--big">',
      imgsquare: '<img src="images/about-photo-m-square.png" alt="my portrait" class="allabout__photo allabout__photo--small">'      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
