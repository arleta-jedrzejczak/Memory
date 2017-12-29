<template>
    <nav
    id="navigationAbsolute"
    class="navigation-bar">
        <ul class="navbar">
            <li
            class="navbar__item"
            v-for="item in items"
            v-bind:key="item.id">
                <!--link-->
                    <div class="navbar__icon" v-html="item.link">
                    </div>
                    <p class="navbar__description">{{ item.description }}</p>
            </li>
        </ul>
        <p v-on:click="changeComponent">{{ component }}</p>
    </nav>
</template>

<script>


export default {
  props: {
      component: {
          type: String
      }
  },
  data () {
    return {
        items: [
            { id: 0, text: '<a href="#home" class="navbar__link"></a>', link: '<i class="demo-icon icon-home navbar__icon--size"></i>', description: 'Home' },
            { id: 1, text: '<a href="#about" class="navbar__link"><div class="navbar__icon"><i class="demo-icon icon-user navbar__icon--size"></i></div><p class="navbar__description">About</p></a>' },
            { id: 2, text: '<a href="#projects" class="navbar__link"><div class="navbar__icon"><i class="demo-icon icon-file-code navbar__icon--size"></i></div><p class="navbar__description">Projects</p></a>' },
            { id: 3, text: '<a href="#skills" class="navbar__link"><div class="navbar__icon"><i class="demo-icon icon-cog-alt navbar__icon--size"></i></div><p class="navbar__description">Skills</p></a>' },
            { id: 4, text: '<a href="#contact" class="navbar__link"><div class="navbar__icon"><i class="demo-icon icon-mail-1 navbar__icon--size"></i></div><p class="navbar__description">Contact</p></a>' }
        ],
        component: 'game'
    }
  },
  methods: {
      changeComponent: function() {
          this.$emit('changeComponent', 'contact');
      }
  }
}   
</script>

<style lang="scss">


</style>
