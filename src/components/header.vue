<template>
    <header class="header">
        <div class="header__logo">
            <span class="demo-icon icon-code header__logo--size" aria-hidden="true"></span>
            <span class="header__logo--visuallyhidden">Site's logo</span>
        </div>
        <h1 v-on:click="moveComponent" class="header__name">{{ header_name }}</h1>
        <div class="header__logo--mobile">
            <span class="demo-icon icon-code header__logo--size" aria-hidden="true"></span>
            <span class="header__logo--visuallyhidden">Site's logo</span>
        </div>
        <div class="header__icons">
            <a v-bind:href="github_link" target="_blank">
                <div class="header__icon">
                    <span class="demo-icon icon-github-circled header__icon--size"></span>
                    <span class="header__icon--visuallyhidden">Github link</span>
                </div>
            </a>
            <a v-bind:href="linkedin_link" target="_blank">
                <div class="header__icon">
                    <span class="demo-icon icon-linkedin header__icon--size" aria-label="linkedin link"></span>
                    <span class="header__icon--visuallyhidden">Linkedin link</span>
                </div>
            </a>
        </div>
    </header>
</template>

<script>



export default {

  data () {
    return {
        header_name: 'Arleta Jędrzejczak',
        github_link: 'https://github.com/laililang',
        linkedin_link: 'https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147'
      
    }
  },
  methods: {
              changeComponent: function() {
          const vm = this;
          this.$emit('changeComponent', 'Home');
        },
        moveComponent: function(component) {          
            const vm = this;
            setTimeout(vm.changeComponent, 500);
        }
  }
}
</script>

<style lang="scss">

</style>
