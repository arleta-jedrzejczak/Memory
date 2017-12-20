<template>
    <div class="game">
           <div class="game__card" v-on:click="switchCard(card, cards)" v-for="card in cards" v-bind:key="card.id" v-html="card.text" v-bind:class="{checked: card.checked}" v-on:DOMContentLoaded="randomList">
               </div>
    </div>
</template>



<script>
var propertyArray = [];
export default {
  data () {
    return {
        start: 'Start game',
        cards: [
            { id: 0, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'about', active: true },
            { id: 1, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'projects', active: true },
            { id: 2, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'skills', active: true },
            { id: 3, text: '<i class="demo-icon icon-mail-1"></i>', checked: true, property: 'contact', active: true },
            { id: 4, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', active: true },
            { id: 5, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', active: true },
            { id: 6, text: '<i class="demo-icon icon-user"></i>', checked: true, property: 'about', active: true },
            { id: 7, text: '<i class="demo-icon icon-file-code"></i>', checked: true, property: 'projects', active: true },
            { id: 8, text: '<i class="demo-icon icon-cog-alt"></i>', checked: true, property: 'skills', active: true },
            { id: 9, text: '<i class="demo-icon icon-mail-1"></i>', checked: true, property: 'contact', active: true },
            { id: 10, text: '<i class="demo-icon icon-github-circled"></i>', checked: true, property: 'github', active: true },
            { id: 11, text: '<i class="demo-icon icon-linkedin"></i>', checked: true, property: 'linkedin', active: true }
        ]
    }
  },
  methods: {
      switchCard: function(card, cards) {
            var vm = this;
            card.checked = !card.checked;
            function Array(propertyArray, cards) {
                if(propertyArray.length < 2) {
                    propertyArray.push(card);
                    while(propertyArray.length == 2){
                        if(propertyArray[0].property === propertyArray[1].property) {
                            for(var i = 0; i < vm.cards.length; i++) {
                                if(propertyArray[0] == vm.cards[i] || propertyArray[1] == vm.cards[i]) {
                                    vm.cards[i].active = false;
                                }
                            }
                        }
                    return propertyArray;
                    }
                }
                else {
                }
            }
            return console.log(Array(propertyArray));
      }
},
  computed: {
        randomList: function(){
          return this.cards.sort(function() {
              return 0 - Math.random()});
        }
    }
}
</script>

<style lang="scss">


</style>
