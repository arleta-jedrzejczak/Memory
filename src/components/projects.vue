<template>
    <section id="projects" class="my-projects">
        <h2 class="my-projects__name">My projects</h2>
        <ul class="projects-list">
            <li class="projects-list__item"
                v-for="item in items"
                v-bind:key="item.id"
                v-html="item.picture">                             
            </li>
        </ul>
    </section>
</template>

<script>

export default {
  data() {
    return {
      items: [
            { id: 0, picture: '<figure><img src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/><figcaption class="projects-list__description">Phasellus auctor tincidunt nisi.</figcaption></figure>'},
            { id: 1, picture: '<figure><img src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/><figcaption class="projects-list__description">Phasellus auctor tincidunt nisi.</figcaption></figure>' },
            { id: 2, picture: '<figure><img src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/><figcaption class="projects-list__description">Phasellus auctor tincidunt nisi.</figcaption></figure>' },
            { id: 3, picture: '<figure><img src="https://i.vimeocdn.com/portrait/58832_300x300" alt="test photo"/><figcaption class="projects-list__description">Phasellus auctor tincidunt nisi.</figcaption></figure>' }
        ]
      
    }
  }
}
</script>

<style lang="scss">

</style>
