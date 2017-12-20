<template>
<div>
    <header class="header">
                <h1>
                    <img src="icons/icon-test.png" class="header__logo" alt="icon test"/>
                </h1>
                <p class="header__name">{{ header_name }}</p>
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
        <hr class="line"/>
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
