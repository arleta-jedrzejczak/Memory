<template>
  <section id="instructions" class="instructions">
    <h2 class="instructions__name">
      <span class="instructions__name--icon-label">Instructions</span>
      <span class="demo-icon icon-key instructions__name--icon" data-icon="key" aria-hidden="true"></span>
    </h2>
    <div class="rules">
      <p class="rules__important">IMPORTANT: The memory game is a form of the navigation!</p><br>
      <p class="rules__item">Rules:</p>
      <ul class="rules__list">
        <li class="rules__list--item">1. Pick a card.</li>
        <li class="rules__list--item">2. Turn over any two cards.</li>
        <li class="rules__list--item">3. If the two cards match, <span class="rules__list--underline">you'll be moved to the chosen section</span> or <span class="rules__list--underline">you'll see the button above the game</span>.</li>
        <li class="rules__list--item">4. If they don't match, cards will turn back over.</li>
        <li class="rules__list--item">5. Remember what was on each card and where it was.</li>
        <li class="rules__list--item">6. The game is over when all the cards have been matched.</li>
      </ul>
    </div>
  </section>
</template>

<script>



export default {
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
