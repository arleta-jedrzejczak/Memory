<template>
    <section class="head">
    <div class="game">
        <div class="game__card"
        v-on:click="switchCard(card, cards)"
        v-for="card in cards"
        v-bind:key="card.id"
        v-html="card.text"
        v-bind:class="{checked: card.checked, passive: card.passive}"
        >
        </div>
        <p class="game__counter">Turn counter: {{ turnCounter }}</p>
    </div>
    <div>
        <div class="button" id="link" v-on:click="changeComponent(firstCardProperty)"></div>
    </div>
    <div>
        <p>You won in {{ turnCounter }} turns!</p>
    </div>
    <div class="head__how2play-button">
        <p>HOW TO PLAY?</p>
    </div>
    </section>
</template>

//v-on:DOMContentLoaded="randomList"

<script>
export default {
    data () {
        return {
            firstCardLink: '',
            firstCardProperty: '',
            firstCardId: '',
            lock: false,
            turnCounter: 0,
            pairs: 6,
            oneVisible: false,
            cards: [
                { id: 0, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'About', passive: false, flipped: false },
                { id: 1, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'About', passive: false, flipped: false },
                { id: 2, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'Projects', passive: false, flipped: false },
                { id: 3, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'Projects', passive: false, flipped: false },
                { id: 4, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'Skills', passive: false, flipped: false },
                { id: 5, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'Skills', passive: false, flipped: false },
                { id: 6, text: '<i class="demo-icon icon-mail"></i>', checked: true, property: 'Contact', passive: false, flipped: false },
                { id: 7, text: '<i class="demo-icon icon-mail"></i>', checked: true, property: 'Contact', passive: false, flipped: false },
                { id: 8, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>', flipped: false },
                { id: 9, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>', flipped: false },
                { id: 10, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>', flipped: false },
                { id: 11, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>', flipped: false }
            ]
        }
    },
    methods: {
        sendLink: function(firstCardLink) {
          var vm = this;
          this.$emit('sendLink', vm.firstCardLink);
        },
        changeComponent: function(firstCardProperty) {
          var vm = this;
          this.$emit('changeComponent', vm.firstCardProperty);
        },
        switchCard: function(card, cards) {

            var vm = this;

            function flipCard() {
                card.checked = false;
                card.flipped = true;
            }

            function changeCardFalse() { //cards don't match
                vm.cards[vm.firstCardId].checked = true;
                card.checked = true;
                vm.lock = false;
            }

            function changeCardTrue() { //cards match
                vm.cards[vm.firstCardId].passive = true;
                card.passive = true;
                if(vm.firstCardId > 7) { //GitHub and LinkedIn
                    vm.firstCardProperty = 'Links';
                    vm.changeComponent(vm.firstCardProperty);
                    vm.sendLink(vm.firstCardLink);
                }
                else { // other components
                    vm.changeComponent(vm.firstCardProperty);
                }
                vm.lock = false;
            }

            if(vm.lock === false) {
                vm.lock = true;
                if(card.passive === false){
                    setTimeout(flipCard, 250);
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
                            vm.pairs--;
                            if(vm.pairs === 0) {
                                //score
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