<template>
    <div class="dropdown-navigation">
    <i class="demo-icon icon-menu dropdown-navigation__on" v-on:click="visibleDropdown = false, menuIcon = true, cancelIcon = false" v-bind:class="{menuIcon: menuIcon}"></i>
    <i class="demo-icon icon-cancel dropdown-navigation__off" v-on:click="visibleDropdown = true, menuIcon = false, cancelIcon = true" v-bind:class="{cancelIcon: cancelIcon}"></i>
    <div v-bind:class="{visibleDropdown: visibleDropdown}">
        <nav id="dropdownMenu" class="dropdown-area">
            <div class="dropdown-area__button">
                <p>Color settings</p>
            </div>
            <ul class="dropdown">
                <li
                class="dropdown__listitem"
                v-on:click="changeComponent(item, items)"
                v-for="item in items"
                v-bind:key="item.id">
                        <div class="dropdown__icon" v-html="item.link"></div>
                        <p class="dropdown__description">{{ item.description }}</p>
                </li>
            </ul> 
            <div href="#instructions" class="dropdown-area__how2play-button">
                <p>HOW TO PLAY?</p>
            </div>      
        </nav>
    </div> 
    </div>   
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
        ],
        visibleDropdown: true,
        menuIcon: false,
        cancelIcon: true
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
