<template>
<div>
    <header class="header">
                <i class="demo-icon icon-code"></i>
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
