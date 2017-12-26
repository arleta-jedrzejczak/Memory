<template>
    <div>
    <div class="game" v-bind:class="{hidden: hidden}">
        <div class="game__card"
        v-on:click="switchCard(card, cards)"
        v-for="card in cards"
        v-bind:key="card.id"
        v-html="card.text"
        v-bind:class="{checked: card.checked, passive: card.passive}"
        >
        </div>
        <p>Turn counter: {{ turnCounter }}</p>
    </div>
    <div v-bind:class="{secret: secret}">
        <div class="button"  v-on:click="secret = !secret, hidden = !hidden">BACK TO GAME</div>
        <div class="button" id="link"></div>
    </div>
    <div v-bind:class="{end: end}">
        <p>You won in {{ turnCounter }} turns!</p>
    </div>
    </div>
</template>

//v-on:DOMContentLoaded="randomList"

<script>
export default {
    data () {
        return {
            firstCardLink: '',
            firstCardProperty: '',
            firstCardId: '',
            secret: true,
            end: true,
            hidden: false,
            lock: false,
            turnCounter: 0,
            pairs: 6,
            oneVisible: false,
            cards: [
                { id: 0, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'about', passive: false },
                { id: 1, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'about', passive: false },
                { id: 2, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'projects', passive: false },
                { id: 3, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'projects', passive: false },
                { id: 4, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'skills', passive: false },
                { id: 5, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'skills', passive: false },
                { id: 6, text: '<i class="demo-icon icon-mail-1"></i>', checked: true, property: 'contact', passive: false },
                { id: 7, text: '<i class="demo-icon icon-mail-1"></i>', checked: true, property: 'contact', passive: false },
                { id: 8, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 9, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 10, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' },
                { id: 11, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' }
            ]
        }
    },
    methods: {
        switchCard: function(card, cards) {

            var vm = this;

            var changeCardFalse = function() { //cards don't match
                vm.cards[vm.firstCardId].checked = true;
                card.checked = true;
                vm.lock = false;
            }

            var changeCardTrue = function() { //cards match
                vm.cards[vm.firstCardId].passive = true;
                card.passive = true;
                const target = document.querySelector('#link'); //create link button
                if(vm.firstCardId > 7) {
                    target.innerHTML = vm.firstCardLink;
                }
                else {
                    target.innerHTML = "test";
                }
                vm.lock = false;
            }

            var hideGame = function() {
                vm.hidden = true;
                vm.secret = false;
            }

            var endGame = function() {
                if(vm.hidden === false) {
                    vm.hidden = true;
                    vm.secret = true;
                    vm.end = false;
                }
            }

            if(vm.lock === false) {
                vm.lock = true;
                if(card.passive === false){
                card.checked = false;
                    if(vm.oneVisible === false) { //first card chosen
                        vm.oneVisible = true;
                        vm.firstCardProperty = card.property;
                        vm.firstCardId = card.id;
                        vm.firstCardLink = card.link;
                        vm.lock = false;
                    }
                    else { //second card chosen
                        if(card.property === vm.firstCardProperty) { //similarity
                            setTimeout(changeCardTrue, 750);
                            setTimeout(hideGame, 750);
                            vm.pairs--;
                            if(vm.pairs === 0) {
                                setTimeout(endGame, 5000);
                            }
                        }
                        else { //lack of similarity
                            setTimeout(changeCardFalse, 1000);
                            //debug
                            console.log(vm.firstCardId);
                            console.log(vm.cards[vm.firstCardId]);
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