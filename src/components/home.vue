<template>
    <section class="head">
    <div class="game">
        <div class="game__column">
            <div class="game__card"
            v-on:DOMContentLoaded="randomList"
            v-on:click="switchCard(card, cards)"
            v-for="card in cards"
            v-bind:key="card.id"
            v-html="card.text"
            v-bind:class="{checked: card.checked, passive: card.passive}">
            </div>
        </div>
        <p class="game__counter">Turn counter: {{ turnCounter }}</p>
        <button v-on:click="restartGame">Restart</button>
    </div>
    </section>
</template>



<script>
export default {
    data () {
        return {
            firstCardProperty: '',
            firstCardId: '',
            firstCard: '',
            lock: false,
            turnCounter: 0,
            pairs: 6,
            oneVisible: false,
            cards: [
                { id: 0, text: '<span><span class="demo-icon icon-user" aria-hidden="true"></span><span class="game__card--visuallyhidden">about icon</span></span>', checked: true, property: 'About', passive: false },
                { id: 1, text: '<span><span class="demo-icon icon-user" aria-hidden="true"></span><span class="game__card--visuallyhidden">about icon</span></span>', checked: true, property: 'About', passive: false },
                { id: 2, text: '<span><span class="demo-icon icon-file-code" aria-hidden="true"></span><span class="game__card--visuallyhidden">projects icon</span></span>', checked: true, property: 'Projects', passive: false },
                { id: 3, text: '<span><span class="demo-icon icon-file-code" aria-hidden="true"></span><span class="game__card--visuallyhidden">projects icon</span></span>', checked: true, property: 'Projects', passive: false },
                { id: 4, text: '<span><span class="demo-icon icon-cog-alt" aria-hidden="true"></span><span class="game__card--visuallyhidden">skills icon</span></span>', checked: true, property: 'Skills', passive: false },
                { id: 5, text: '<span><span class="demo-icon icon-cog-alt" aria-hidden="true"></span><span class="game__card--visuallyhidden">skills icon</span></span>', checked: true, property: 'Skills', passive: false },
                { id: 6, text: '<span><span class="demo-icon icon-mail" aria-hidden="true"></span><span class="game__card--visuallyhidden">contact icon</span></span>', checked: true, property: 'Contact', passive: false },
                { id: 7, text: '<span><span class="demo-icon icon-mail" aria-hidden="true"></span><span class="game__card--visuallyhidden">contact icon</span></span>', checked: true, property: 'Contact', passive: false },
                { id: 8, text: '<span><span class="demo-icon icon-github-circled" aria-hidden="true"></span><span class="game__card--visuallyhidden">github icon</span></span>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 9, text: '<span><span class="demo-icon icon-github-circled" aria-hidden="true"></span><span class="game__card--visuallyhidden">github icon</span></span>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 10, text: '<span><span class="demo-icon icon-linkedin" aria-hidden="true"></span><span class="game__card--visuallyhidden">linkedin icon</span></span>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' },
                { id: 11, text: '<span><span class="demo-icon icon-linkedin" aria-hidden="true"></span><span class="game__card--visuallyhidden">linkedin icon</span></span>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' }
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
                vm.firstCard.checked = true;
                card.checked = true;
                vm.lock = false;
            }

            function changeCardTrue() { //cards match
                vm.firstCard.passive = true;
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
                        vm.firstCard = vm.cards.find(function(c) { 
                            return c.id === vm.firstCardId });
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
        randomList: function(){
            const vm = this;
          return vm.cards.sort(function() {
              return 0.5 - Math.random()});
        }
    },
    mounted: {
        restartGame: function(){
            const vm = this;
            vm.firstCardProperty = '';
            vm.firstCardId = '';
            vm.firstCard = '';
            vm.lock = false;
            vm.turnCounter = 0;
            vm.pairs = 6;
            vm.oneVisible = false;
            vm.cards.forEach(function(card){
                card.passive = false;
                card.checked = true;
            })
            vm.randomAgain();
        },
        randomAgain: function(){
            const vm = this;
          return vm.cards.sort(function() {
              return 0.5 - Math.random()});
        },
    }
}
</script>

<style lang="scss">


</style>