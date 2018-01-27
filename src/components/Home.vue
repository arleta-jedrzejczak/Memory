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

<script>
export default {
    data () {
        var cards = [
                { id: 0, text: '<span class="game__card--icon"><span class="demo-icon icon-user" aria-hidden="true"></span><span class="game__card--visuallyhidden">about icon</span></span>', checked: true, property: 'About', passive: false },
                { id: 1, text: '<span class="game__card--icon"><span class="demo-icon icon-user" aria-hidden="true"></span><span class="game__card--visuallyhidden">about icon</span></span>', checked: true, property: 'About', passive: false },
                { id: 2, text: '<span class="game__card--icon"><span class="demo-icon icon-file-code" aria-hidden="true"></span><span class="game__card--visuallyhidden">projects icon</span></span>', checked: true, property: 'Projects', passive: false },
                { id: 3, text: '<span class="game__card--icon"><span class="demo-icon icon-file-code" aria-hidden="true"></span><span class="game__card--visuallyhidden">projects icon</span></span>', checked: true, property: 'Projects', passive: false },
                { id: 4, text: '<span class="game__card--icon"><span class="demo-icon icon-cog-alt" aria-hidden="true"></span><span class="game__card--visuallyhidden">skills icon</span></span>', checked: true, property: 'Skills', passive: false },
                { id: 5, text: '<span class="game__card--icon"><span class="demo-icon icon-cog-alt" aria-hidden="true"></span><span class="game__card--visuallyhidden">skills icon</span></span>', checked: true, property: 'Skills', passive: false },
                { id: 6, text: '<span class="game__card--icon"><span class="demo-icon icon-mail" aria-hidden="true"></span><span class="game__card--visuallyhidden">contact icon</span></span>', checked: true, property: 'Contact', passive: false },
                { id: 7, text: '<span class="game__card--icon"><span class="demo-icon icon-mail" aria-hidden="true"></span><span class="game__card--visuallyhidden">contact icon</span></span>', checked: true, property: 'Contact', passive: false },
                { id: 8, text: '<span class="game__card--icon"><span class="demo-icon icon-github-circled" aria-hidden="true"></span><span class="game__card--visuallyhidden">github icon</span></span>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 9, text: '<span class="game__card--icon"><span class="demo-icon icon-github-circled" aria-hidden="true"></span><span class="game__card--visuallyhidden">github icon</span></span>', checked: true, property: 'github', passive: false, link: '<a href="https://github.com/laililang" target="_blank">Go to my GitHub</a>' },
                { id: 10, text: '<span class="game__card--icon"><span class="demo-icon icon-linkedin" aria-hidden="true"></span><span class="game__card--visuallyhidden">linkedin icon</span></span>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' },
                { id: 11, text: '<span class="game__card--icon"><span class="demo-icon icon-linkedin" aria-hidden="true"></span><span class="game__card--visuallyhidden">linkedin icon</span></span>', checked: true, property: 'linkedin', passive: false, link: '<a href="https://pl.linkedin.com/in/arleta-j%C4%99drzejczak-167345147" target="_blank">Go to my LinkedIn</a>' }];
                cards.sort(function() { return 0.5 - Math.random() });
        return {
            firstCardProperty: '',
            firstCardId: '',
            firstCard: '',
            lock: false,
            turnCounter: 0,
            pairs: 6,
            oneVisible: false,
            cards: cards
        }
    },
    methods: {
        switchCard: function(card, cards) {

            var vm = this;

            function winnerAlert(turnCounter) {
                vm.$emit('winnerAlert', vm.turnCounter);
            }

            function changeComponent(firstCardProperty) {
                vm.$emit('changeComponent', vm.firstCardProperty);
            }

            function changeGithub() {
                vm.$emit('changeGithub', true);
            }

            function changeLinked() {
                vm.$emit('changeLinked', true);
            }

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
                    changeGithub(true);
                }
                else if(vm.firstCardId > 9) { //LinedIn
                    changeLinked(true);
                }
                else { // other components
                    changeComponent(vm.firstCardProperty);
                }
                vm.lock = false;
            }

            if(vm.lock === false && card.checked === true) {
                vm.lock = true;
                if(card.passive === false){
                    vm.lock = true;
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
                                setTimeout(winnerAlert, 1000);
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
    }
}
</script>

<style lang="scss">


</style>
