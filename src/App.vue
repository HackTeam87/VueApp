<template>
    <v-app>
        <header-page></header-page>
        <v-main>

            <pre-loader></pre-loader>
            <bread-crumbs></bread-crumbs>
            <router-view></router-view>
            <scroll-back-button></scroll-back-button>

        </v-main>
            <footer-page></footer-page>

    </v-app>


</template>

<script>
    import HeaderPage from '@/components/HeaderPage.vue'
    import BreadCrumbs from '@/components/BreadCrumbs.vue'
    import PreLoader from '@/components/PreLoader.vue'
    import ScrollBackButton from '@/components/ScrollBackButton.vue'
    import FooterPage from '@/components/FooterPage.vue'

    // import ContactButton from '@/components/ContactButton.vue'


    export default {
        name: 'App',
        components: {
            PreLoader,
            HeaderPage,
            BreadCrumbs,
            ScrollBackButton,
            FooterPage
        }
    }
</script>

<style>
    .main {
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }

    .nav-line {
        border-bottom: 1px solid #fec422 !important;
    }

    .heading {
        font-size: 2rem;
        -webkit-font-smoothing: antialiased;
        letter-spacing: .2rem;
        text-align: center;
        color: #002244;
        text-shadow: 0 3px 0 #fec422;
    }

    .my-btn {
        background-color: #ffffff !important;
        color: #002244 !important;
        border: 1px solid #fec422;

    }

    .v-divider {
        border-color: #cccccc !important;
    }
</style>


