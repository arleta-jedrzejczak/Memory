<template>
  <section id="about" class="about">
    <h2 class="about__name">
      <span class="about__name--icon-label">About me</span>
      <span class="demo-icon icon-user about__name--icon" data-icon="about" aria-hidden="true"></span>
    </h2>
    <div class="allabout">                            
        <img  v-html="img"/>
        <article class="allabout__content">
          <p>Hello, my name is <span class="allabout__content--bold">Arleta</span>. I'm web developer wannabe.
          <p>I've been studying how to build websites for over a year. I'm interested in client and server sides in applications and besides explore front-end environment, also starting to learn PHP and mySQL.</p>
          <p>I'm currently <span class="allabout__content--bold">for a first job or an internship as a junior front-end developer</span>.</p>
        </article>
    </div>
  </section>
</template>

<script>



export default {
  data() {
    return {
      img: 'src="images/about-photo-s.png" alt="my portrait" class="allabout__photo"'
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
