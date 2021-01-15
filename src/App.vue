<template>
  <v-app>
    <header-page>
      
    </header-page>
     <v-main>
       <router-view></router-view>
     </v-main>
    <footer-page></footer-page>

  </v-app>



</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import Loader from '@/views/Loader.vue'
import FooterPage from '@/components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    Loader,
    FooterPage
  }
}
</script>


