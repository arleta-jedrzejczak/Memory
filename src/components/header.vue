<template>
<div>
    <header class="header">
        <div class="header__logo">
                <i class="demo-icon icon-code header__logo--size"></i>
                </div>
                <h1 class="header__name">{{ header_name }}</h1>
                <a v-bind:href="github_link" target="_blank">
                    <div class="header__icon">
                        <i class="demo-icon icon-github-circled header__icon--size"></i>
                    </div>
                </a>
                <a v-bind:href="linkedin_link" target="_blank">
                    <div class="header__icon">
                        <i class="demo-icon icon-linkedin header__icon--size"></i>
                    </div>
                </a>
            </header>
        </div>
</template>

<script>



export default {

  data () {
    return {
        header_name: 'Arleta Jędrzejczak',
        github_link: 'https://github.com/laililang',
        linkedin_link: 'https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147'
      
    }
  }
}
</script>

<style lang="scss">

</style>
