<template>
    <nav
    id="navigationAbsolute"
    class="navigation-bar">
        <ul class="navbar">
            <li
            class="navbar__item"
            v-on:click="changeComponent(item, items)"
            v-for="item in items"
            v-bind:key="item.id">
                <!--link-->
                    <div class="navbar__icon" v-html="item.link">
                    </div>
                    <p class="navbar__description">{{ item.description }}</p>
            </li>
        </ul>
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
            { id: 1, text: '<a href="#about" class="navbar__link"></a>', link: '<i class="demo-icon icon-user navbar__icon--size"></i>', description: 'About' },
            { id: 2, text: '<a href="#projects" class="navbar__link"></a>', link: '<i class="demo-icon icon-file-code navbar__icon--size"></i>', description: 'Projects' },
            { id: 3, text: '<a href="#skills" class="navbar__link"></a>', link: '<i class="demo-icon icon-cog-alt navbar__icon--size"></i>', description: 'Skills' },
            { id: 4, text: '<a href="#contact" class="navbar__link"></a>', link: '<i class="demo-icon icon-mail navbar__icon--size"></i>', description: 'Contact' }
        ]
    }
  },
  methods: {
      changeComponent: function(item, items) {
          var vm = this;
          this.$emit('changeComponent', item.description );
      }
  }
}   
</script>

<style lang="scss">


</style>
