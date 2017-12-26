<template>
    <div class="game">
        <div class="game__card"
        v-on:click="switchCard(card, cards)"
        v-for="card in cards"
        v-bind:key="card.id"
        v-html="card.text"
        v-bind:class="{checked: card.checked, passive: card.passive}"
        >
        </div>
    </div>
</template>

//v-on:DOMContentLoaded="randomList"

<script>
var lock = false;
var oneVisible = false;
var turnCounter = 0;
var firstCardProperty;
var firstCardId;
var pairs = 6;
export default {
    data () {
        return {
            start: 'Start game',
            cards: [
                { id: 0, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'about', passive: false },
                { id: 1, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'projects', passive: false },
                { id: 2, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'skills', passive: false },
                { id: 3, text: '<i class="demo-icon icon-mail-1"></i>', checked: true, property: 'contact', passive: false },
                { id: 4, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false },
                { id: 5, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false },
                { id: 6, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'about', passive: false },
                { id: 7, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'projects', passive: false },
                { id: 8, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'skills', passive: false },
                { id: 9, text: '<i class="demo-icon icon-mail-1"></i>', checked: true, property: 'contact', passive: false },
                { id: 10, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false },
                { id: 11, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false }
            ]
        }
    },
    methods: {
        switchCard: function(card, cards) {

            var vm = this;

            var changeCardFalse = function() {
                vm.cards[firstCardId].checked = true;
                card.checked = true;
            }

            var changeCardTrue = function() {
                vm.cards[firstCardId].passive = true;
                card.passive = true;
            }

            if(lock === false) {
                lock = true;
                if(card.passive === false){
                card.checked = false;
                    if(oneVisible === false) { //first card
                        oneVisible = true;
                        firstCardProperty = card.property;
                        firstCardId = card.id;
                        lock = false;
                    }
                    else { //second card
                        if(card.property === firstCardProperty) { //similarity
                            setTimeout(changeCardTrue, 750);
                            pairs--;
                            lock = false;
                        }
                        else { //lack of similarity
                            setTimeout(changeCardFalse, 1000);
                            lock = false;
                            //debug
                            console.log(firstCardId);
                            console.log(vm.cards[firstCardId]);
                        }
                        turnCounter++;
                        oneVisible = false;
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