<template>
    <section id="projects" class="my-projects">
        <h2 class="my-projects__name">My projects</h2>
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
                </figure>
                <div v-bind:class="{visibleIcon: item.visibleIcon, visibleIconSwitch: item.visibleIconSwitch}" class="projects-list__square projects-list__square--github"><i class="demo-icon icon-github-circled projects-list__square--icon"></i></div>
                <div v-bind:class="{visibleIcon: item.visibleIcon, visibleIconSwitch: item.visibleIconSwitch}" class="projects-list__square projects-list__square--demo"><i class="demo-icon icon-eye projects-list__square--icon"></i></div>
            </li>                          
        </ul>
    </section>
</template>

<script>

export default {
  data() {
    return {
        items: [
            { id: 0, picture: '<img class="projects-list__figure--picture" src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/>', description: 'Project1', pictureHover: false, visibleIcon: false },
            { id: 1, picture: '<img class="projects-list__figure--picture" src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/>', description: 'Project2', pictureHover: false, visibleIcon: false },
            { id: 2, picture: '<img class="projects-list__figure--picture" src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/>', description: 'Project3', pictureHover: false, visibleIcon: false },
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
