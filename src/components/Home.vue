<template>
    <section class="head">
    <div class="game">
        <div class="game__column">
            <div class="game__card"
            v-on:click="switchCard(card, cards)"
            v-for="card in cards"
            v-bind:key="card.id"
            v-html="card.text"
            v-bind:class="{checked: card.checked, passive: card.passive}">
            </div>
        </div>
        <p class="game__counter">Turn counter: {{ turnCounter }}</p>
    </div>
    </section>
</template>

//v-on:DOMContentLoaded="randomList"

<script>
export default {
    data () {
        return {
            firstCardProperty: '',
            firstCardId: '',
            lock: false,
            turnCounter: 0,
            pairs: 6,
            oneVisible: false,
            cards: [
                { id: 0, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'About', passive: false },
                { id: 1, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'About', passive: false },
                { id: 2, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'Projects', passive: false },
                { id: 3, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'Projects', passive: false },
                { id: 4, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'Skills', passive: false },
                { id: 5, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'Skills', passive: false },
                { id: 6, text: '<i class="demo-icon icon-mail"></i>', checked: true, property: 'Contact', passive: false },
                { id: 7, text: '<i class="demo-icon icon-mail"></i>', checked: true, property: 'Contact', passive: false },
                { id: 8, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 9, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 10, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' },
                { id: 11, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' }
            ]
        }
    },
    methods: {
        winnerAlert: function(turnCounter) {
            var vm = this;
            this.$emit('winnerAlert', vm.turnCounter);
        },
        changeComponent: function(firstCardProperty) {
          var vm = this;
          this.$emit('changeComponent', vm.firstCardProperty);
        },
        changeGithub: function() {
          var vm = this;
          this.$emit('changeGithub', true);
        },
        changeLinked: function() {
          var vm = this;
          this.$emit('changeLinked', true);
        },
        switchCard: function(card, cards) {

            var vm = this;

            function flipCard() {
                card.checked = false;
            }

            function changeCardFalse() { //cards don't match
                vm.cards[vm.firstCardId].checked = true;
                card.checked = true;
                vm.lock = false;
            }

            function changeCardTrue() { //cards match
                vm.cards[vm.firstCardId].passive = true;
                card.passive = true;
                if(vm.firstCardId > 7 && vm.firstCardId < 10) { //GitHub
                    vm.changeGithub(true);
                }
                else if(vm.firstCardId > 9) { //LinedIn
                    vm.changeLinked(true);
                }
                else { // other components
                    vm.changeComponent(vm.firstCardProperty);
                }
                vm.lock = false;
            }

            if(vm.lock === false && card.checked === true) {
                vm.lock = true;
                if(card.passive === false){
                    setTimeout(flipCard, 250);
                    if(vm.oneVisible === false) { //first card chosen
                        vm.oneVisible = true;
                        vm.firstCardProperty = card.property;
                        vm.firstCardId = card.id;
                        vm.lock = false;
                    }
                    else { //second card chosen
                        if(card.property === vm.firstCardProperty) { //similarity
                            setTimeout(changeCardTrue, 750);
                            vm.pairs--;
                            if(vm.pairs === 0) {
                                setTimeout(vm.winnerAlert, 2000);
                            }
                        }
                        else { //lack of similarity
                            setTimeout(changeCardFalse, 1000);
                        }
                        vm.turnCounter++;
                        vm.oneVisible = false;
                    }
                }
            }
        }
    },
  computed: {
        //randomList: function(){
        //  return this.cards.sort(function() {
        //      return 0.5 - Math.random()});
        //}
    }
}
</script>

<style lang="scss">


</style>
