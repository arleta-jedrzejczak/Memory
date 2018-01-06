<template>
    <section id="skills" class="skills">
        <h2 class="skills__name">My skills</h2>
        <article class="skills-lits">
            <p class="skills-list__description">Vestibulum mi enim, aliquam ut elementum id, bibendum eu dolor. Duis congue lectus eu diam auctor maximus. Donec eget pharetra purus. Cras at rhoncus ligula, dapibus dapibus ex. Phasellus varius tortor quis justo efficitur, vel cursus orci scelerisque. Aliquam facilisis est felis, eget eleifend libero tristique id. Etiam varius scelerisque consectetur. Suspendisse congue nisl at suscipit blandit.</p>
            <ul class="skills-list__section">
                <li class="skills-list__item">
                    <p class="list-of-skills__description">Donec vel ante vel augue porttitor viverra vitae elementum felis.</p>
                    <img src="icons/icon-test.png" alt="icon test" class="list-of-skills__icon"/>
                </li>
                <li class="skills-list__item">
                    <p class="list-of-skills__description">Donec vel ante vel augue porttitor viverra vitae elementum felis.</p>
                    <img src="icons/icon-test.png" alt="icon test" class="list-of-skills__icon"/>
                </li>
                <li class="skills-list__item">
                    <p class="list-of-skills__description">Donec vel ante vel augue porttitor viverra vitae elementum felis.</p>
                    <img src="icons/icon-test.png" alt="icon test" class="list-of-skills__icon"/>
                </li>
                <li class="skills-list__item">
                    <p class="list-of-skills__description">Donec vel ante vel augue porttitor viverra vitae elementum felis.</p>
                    <img src="icons/icon-test.png" alt="icon test" class="list-of-skills__icon"/>
                </li>
                <li class="skills-list__item">
                    <p class="list-of-skills__description">Donec vel ante vel augue porttitor viverra vitae elementum felis.</p>
                    <img src="icons/icon-test.png" alt="icon test" class="list-of-skills__icon"/>
                </li>
            </ul>
        </article>
        <buton v-on:click="changeComponent">Back to the game</buton>
    </section>
</template>

<script>
export default {

  data () {
    return {

      
    }
  },
  methods: {
    changeComponent: function(firstCardProperty) {
          var vm = this;
          this.$emit('changeComponent', 'Home');
        },
  }
}
</script>

<style lang="scss">

</style>
