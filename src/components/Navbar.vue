<template>
    <nav id="navigationAbsolute" class="navigation-bar">
        <div class="navigation-bar__icons navigation-bar__icons--menu material-icons" v-bind:class="{navmenu: navmenu}" v-on:click="hide = false, navmenu = true, navexit = false" >&#xE5D2;</div>
        <div class="navigation-bar__icons navigation-bar__icons--exit material-icons" v-bind:class="{navexit: navexit}" v-on:click="hide = true, navmenu = false, navexit = true">&#xE5CD;</div>
        <ul class="navbar" v-bind:class="{hide: hide}">
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
                { id: 0, link: '<span class="navbar__icon--cirle"><span class="material-icons navbar__icon--size" aria-hidden="true">&#xE88A;</span><span class="navbar__item--visuallyhidden">home icon</span></span>', description: 'Home', navbardescription: true },
                { id: 1, link: '<span class="navbar__icon--cirle"><span class="material-icons navbar__icon--size" aria-hidden="true">&#xE87C;</span><span class="navbar__item--visuallyhidden">about icon</span></span>', description: 'About', navbardescription: true },
                { id: 2, link: '<span class="navbar__icon--cirle"><span class="material-icons navbar__icon--size" aria-hidden="true">&#xE86F;</span><span class="navbar__item--visuallyhidden">projects icon</span></span>', description: 'Projects', navbardescription: true },
                { id: 3, link: '<span class="navbar__icon--cirle"><span class="material-icons navbar__icon--size" aria-hidden="true">&#xE869;</span><span class="navbar__item--visuallyhidden">skills icon</span></span>', description: 'Skills', navbardescription: true },
                { id: 4, link: '<span class="navbar__icon--cirle"><span class="material-icons navbar__icon--size" aria-hidden="true">&#xE0E1;</span><span class="navbar__item--visuallyhidden">contact icon</span></span>', description: 'Contact', navbardescription: true }
            ],
            hide: true,
            navmenu: false,
            navexit: true
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
