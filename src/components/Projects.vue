<template>
    <section id="projects" class="my-projects">
        <h2 class="my-projects__name">
            <span class="my-projects__name--icon-label">My projects</span>
            <span class="demo-icon icon-file-code my-projects__name--icon" data-icon="projects" aria-hidden="true"></span>
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
            picture: '<img class="projects-list__figure--picture" src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/>',
            description: 'My portfolio',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span><span class="projects-list__minicons--item devicon-sass-original" title="Sass/SCSS"></span><span class="projects-list__minicons--item demo-icon icon-mobile" title="RWD"></span><span class="projects-list__minicons--item devicon-javascript-plain" title="JavaScript"></span><span class="projects-list__minicons--item devicon-vuejs-plain" title="VueJS 2"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href="https://github.com/laililang/Memory" target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>' },

            { id: 1, picture: '<img class="projects-list__figure--picture" src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/>',
            description: 'To Do (Before You Die) Aplication',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span><span class="projects-list__minicons--item demo-icon icon-mobile" title="RWD"></span><span class="projects-list__minicons--item devicon-javascript-plain"  title="JavaScript"></span><span class="projects-list__minicons--item devicon-jquery-plain" title="jQuery"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href="https://github.com/laililang/To-Do-App" target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href="https://laililang.github.io/To-Do-App/" target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' },

            { id: 2, picture: '<img class="projects-list__figure--picture" src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/>',
            description: 'Business & Creative',
            minicons: '<span class="projects-list__minicons--item devicon-html5-plain" title="HTML5"></span><span class="projects-list__minicons--item devicon-css3-plain" title="CSS3"></span><span class="projects-list__minicons--item demo-icon icon-mobile" title="RWD"></span><span class="projects-list__minicons--item devicon-bootstrap-plain"  title="Bootstrap"></span>',
            pictureHover: false,
            visibleIcon: false,
            linkgit: '<a href=https://github.com/laililang/Business target="_blank"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></a>',
            linkdemo: '<a href=https://laililang.github.io/Business/ target="_blank"><i class="demo-icon icon-eye projects-list__square--icon"></i></a>' },

            { id: 3, picture: '<img class="projects-list__figure--picture" src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/>', description: 'Project4', pictureHover: false, visibleIcon: false }
        ]
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
