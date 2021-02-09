<template>
  <v-app>
    <header-page></header-page>
     <v-main>

       <pre-loader></pre-loader>
       <router-view></router-view>


     </v-main>
<!--    <footer-page></footer-page>-->

  </v-app>



</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import PreLoader from '@/components/PreLoader.vue'
// import ContactButton from '@/components/ContactButton.vue'


export default {
  name: 'App',
  components: {
    PreLoader,
    HeaderPage,
    // FooterPage
  }
}
</script>


