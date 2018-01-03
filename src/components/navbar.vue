<template>
    <nav
    id="navigationAbsolute"
    class="navigation-bar">
        <ul class="navbar">
            <li
            class="navbar__item"
            v-on:click="changeComponent(item, items)"
            v-on:mouseover="item.navbardescription = false"
            v-on:mouseout="item.navbardescription = true"
            v-for="item in items"
            v-bind:key="item.id">
                    <div class="navbar__icon" v-html="item.link">
                    </div>
                    <p class="navbar__description" v-bind:class="{navbardescription: item.navbardescription}">{{ item.description }}</p>
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
        desc: true,
        items: [
            { id: 0, text: '<a href="#home" class="navbar__link"></a>', link: '<i class="demo-icon icon-home navbar__icon--size"></i>', description: 'Home', navbardescription: true },
            { id: 1, text: '<a href="#about" class="navbar__link"></a>', link: '<i class="demo-icon icon-user navbar__icon--size"></i>', description: 'About', navbardescription: true },
            { id: 2, text: '<a href="#projects" class="navbar__link"></a>', link: '<i class="demo-icon icon-file-code navbar__icon--size"></i>', description: 'Projects', navbardescription: true },
            { id: 3, text: '<a href="#skills" class="navbar__link"></a>', link: '<i class="demo-icon icon-cog-alt navbar__icon--size"></i>', description: 'Skills', navbardescription: true },
            { id: 4, text: '<a href="#contact" class="navbar__link"></a>', link: '<i class="demo-icon icon-mail navbar__icon--size"></i>', description: 'Contact', navbardescription: true }
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
