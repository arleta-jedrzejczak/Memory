<template>
    <section id="projects" class="my-projects">
        <h2 class="my-projects__name">
            <span class="my-projects__name--icon-label">My projects</span>
            <span class="material-icons my-projects__name--icon" data-icon="projects" aria-hidden="true">&#xE86F;</span>
        </h2>
        <ul class="projects-list">
            <li
            class="projects-list__item"
            v-for="item in items"
            v-bind:key="item.id"
            v-on:mouseover="item.pictureHover = true, item.visibleIcon = true"
            v-on:mouseout="item.pictureHover = false, item.visibleIcon = false">
                <figure class="projects-list__figure">
                    <div class="projects-list__figure--frame" v-bind:class="{pictureHover: item.pictureHover}" v-html="item.picture"></div>
                    <figcaption class="projects-list__figure--description">{{ item.description }}</figcaption>
                    <div class="projects-list__minicons" v-html="item.minicons"></div>
                </figure>
                <div v-bind:class="{visibleIcon: item.visibleIcon, visibleIconSwitch: item.visibleIconSwitch}" class="projects-list__square projects-list__square--github" v-html="item.linkgit"></div>
                <div v-bind:class="{visibleIcon: item.visibleIcon, visibleIconSwitch: item.visibleIconSwitch}" class="projects-list__square projects-list__square--demo" v-html="item.linkdemo"></div>
            </li>                          
        </ul>
    </section>
</template>

<script>

export default {
  data() {
    return {
        items: [
            { id: 0,
            picture: '<img class="projects-list__figure--picture" src="src/images/samplesprint.png" alt="samples project screen"/>',
            description: 'Próbki szkoleń GroMar Sp. z o.o.',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span></span><span class="projects-list__minicons--item devicon-javascript-plain" title="JavaScript"></span><span class="projects-list__minicons--item devicon-vuejs-plain" title="VueJS 2"></span><span class="projects-list__minicons--item devicon-webpack-plain" title="Webpack"></span><span class="projects-list__minicons--item devicon-babel-plain" title="Babel"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href="https://github.com/arletajedrzejczak/Samples" target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href="https://probki.pliki.gromar.eu/_app" target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' },

            { id: 1,
            picture: '<img class="projects-list__figure--picture" src="src/images/turbocesky.png" alt="training project screen"/>',
            description: 'Turbo-czeski e-learning',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span></span><span class="projects-list__minicons--item devicon-javascript-plain" title="JavaScript"></span><span class="projects-list__minicons--item devicon-angularjs-plain" title="AngularJS"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href="https://github.com/laililang/Turbo-czeski" target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href="https://laililang.github.io/Turbo-czeski" target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' },

            { id: 2,
            picture: '<img class="projects-list__figure--picture" src="src/images/printportfolio.png" alt="portfolio project screen"/>',
            description: 'My portfolio',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span><span class="projects-list__minicons--item devicon-sass-original" title="Sass/SCSS"></span><span class="projects-list__minicons--item demo-icon icon-mobile" title="RWD"></span><span class="projects-list__minicons--item devicon-javascript-plain" title="JavaScript"></span><span class="projects-list__minicons--item devicon-vuejs-plain" title="VueJS 2"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href="https://github.com/laililang/Memory" target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href="https://laililang.github.io/Memory" target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' },

            { id: 3, picture: '<img class="projects-list__figure--picture" src="src/images/printtodo.png" alt="to do project screen"/>',
            description: 'To Do (Before You Die) Application',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span><span class="projects-list__minicons--item demo-icon icon-mobile" title="RWD"></span><span class="projects-list__minicons--item devicon-javascript-plain"  title="JavaScript"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href="https://github.com/laililang/To-Do-App" target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href="https://laililang.github.io/To-Do-App/" target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' },

            { id: 4, picture: '<img class="projects-list__figure--picture" src="src/images/printbusiness.png" alt="bootstrap project screen"/>',
            description: 'Business & Creative',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span><span class="projects-list__minicons--item demo-icon icon-mobile" title="RWD"></span><span class="projects-list__minicons--item devicon-bootstrap-plain"  title="Bootstrap"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href=https://github.com/laililang/Business target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href=https://laililang.github.io/Business/ target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' },

            { id: 5, picture: '<img class="projects-list__figure--picture" src="src/images/printpixel.png" alt="pixel art maker project screen"/>',
            description: 'Pixel Art Maker',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span><span class="projects-list__minicons--item demo-icon icon-mobile" title="RWD"></span><span class="projects-list__minicons--item devicon-jquery-plain"  title="jQuery"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href=https://github.com/laililang/Pixel target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href=https://laililang.github.io/Pixel/ target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' }
        ]
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
