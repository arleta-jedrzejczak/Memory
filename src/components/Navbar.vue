<template>
    <nav id="navigationAbsolute" class="navigation-bar">
        <ul class="navbar">
            <li
            class="navbar__item"
            v-on:click="changeComponent(item, items)"
            v-on:mouseover="item.navbardescription = false, item.navdescription = false"
            v-on:mouseout="item.navbardescription = true, item.navdescription = true"
            v-for="item in items"
            v-bind:key="item.id">
                <div class="navbar__icon" v-html="item.link"></div>
                <p class="navbar__description" v-bind:class="{navbardescription: item.navbardescription, navdescription: item.navdescription}">{{ item.description }}</p>
            </li>
        </ul>
    </nav>
</template>

<script>


export default {
    props: {
        component: {
            type: String
        }
    },
    data () {
        return {
            items: [
                { id: 0, link: '<i class="demo-icon icon-home navbar__icon--size"></i>', description: 'Home', navbardescription: true },
                { id: 1, link: '<i class="demo-icon icon-user navbar__icon--size"></i>', description: 'About', navbardescription: true },
                { id: 2, link: '<i class="demo-icon icon-file-code navbar__icon--size"></i>', description: 'Projects', navbardescription: true },
                { id: 3, link: '<i class="demo-icon icon-cog-alt navbar__icon--size"></i>', description: 'Skills', navbardescription: true },
                { id: 4, link: '<i class="demo-icon icon-mail navbar__icon--size"></i>', description: 'Contact', navbardescription: true }
            ]
        }
    },
    methods: {
        changeComponent: function(item, items) {
            const vm = this;
            this.$emit('changeComponent', item.description );
        }
    }
}   

</script>

<style lang="scss">


</style>
