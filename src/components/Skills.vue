<template>
    <section id="skills" class="skills">
        <h2 class="skills__name">
            <span class="skills__name--icon-label">My skills</span>
            <span class="demo-icon icon-cog-alt about__name--icon" data-icon="skills" aria-hidden="true"></span>
        </h2>
        <article class="skills-lits">
            <p class="skills-list__description">{{ text }}</p>
            <ul class="skills-list__section">
                <li class="skills-list__item"
                v-for="item in items"
                v-bind:key="item.id">
                    <div v-html="item.picture"></div>
                    <p>{{ item.description }}</p>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {

  data () {
    return {
        text: 'abcdefg',
         items: [
            { id: 0, picture: '<img src="http://dryicons.com/uploads/icon/preview/1008/accept_item.png">', description: 'Skill1' },
            { id: 1, picture: '', description: 'Skill2' },
            { id: 2, picture: '', description: 'Skill3' },
            { id: 3, picture: '', description: 'Skill4' },
            { id: 4, picture: '', description: 'Skill5' },
            { id: 5, picture: '', description: 'Skill6' }
        ]
      
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
