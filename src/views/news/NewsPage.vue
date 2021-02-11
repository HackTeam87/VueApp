<template>
  <div class="main">
    <v-parallax dark class="main_parallax"
                height="100%"
                src="@/assets/img/news/news_background.webp">
    <h1 class="heading">Новини</h1>
    <v-container grid-list-md>
      <v-layout row wrap v-for="post in NEWS" v-bind:key="post.id">
        <v-flex d-flex sm8 offset-sm-2>

          <v-card class="my-3" hover data-aos="zoom-in" data-aos-easing="ease">

            <h3 class="headline mb-0 text-center indigo" style="color:#ffffff;"  > {{ post.title }}</h3>

            <v-img v-bind:src="post.img" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>

              <div> {{ post.short_text }}</div>

            </v-card-title>
             <NewsDetailPage v-show="clickedPost === post.id" v-bind:post="post"></NewsDetailPage>

            <v-card-actions>
              <v-btn icon class="red--text">
                <v-icon small>mdi-facebook</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn small replace class="indigo" style="color:white;" @click="clickedPost = post.id">
                Детально
                <v-icon>
                  mdi-chevron-double-right
                </v-icon>
              </v-btn>

            </v-card-actions>
          </v-card>

        </v-flex>


      </v-layout>
    </v-container>
    </v-parallax>
  </div>

</template>

<script>
import NewsDetailPage from '@/views/news/NewsDetailPage.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "news-page",
  data: () => {
    return {
      clickedPost: 0,
    }
  },
  components: {
    NewsDetailPage
  },


  methods: {
    ...mapActions([
      'GET_NEWS_FROM_API'
    ]),
  },
  computed: {
    ...mapGetters(['NEWS']),
  },
  mounted() {
    this.GET_NEWS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('DATA NEWS Arrived!')
          }
        })
  },

}
</script>

<style scoped>
.heading {
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .2rem;
  text-align: center;
  /*color: #002244;*/
  color:#ffffff;
  /*text-shadow: 0 3px 0 #fec422;*/
  text-shadow: 0 3px 0 #002244;
  margin-bottom: 30px;
}
</style>