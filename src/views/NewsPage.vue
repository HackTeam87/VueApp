<template>
<div class="main">
   <h1 class="heading">Новини</h1>
    <v-container grid-list-md>
       <v-layout row wrap>
    <v-flex d-flex sm6 v-for="(article, index) in articles" :key="index">
      <v-card class="my-3" hover data-aos="zoom-in" data-aos-easing="ease">

            <h3 class="headline mb-0 text-center" style="background-color:#002244;color:#ffffff;">{{article.title}}</h3>

        <v-img v-bind:src="article.urlToImage" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>

            <h3 class="headline mb-0">{{article.title}}</h3>
            <div> {{ article.text }} </div>

        </v-card-title>

         <v-card-actions>
                   <v-btn icon class="red--text"><v-icon small>mdi-facebook</v-icon></v-btn>
                   <v-btn icon class="blue--text text--darken-4"><v-icon small>mdi-instagram</v-icon></v-btn>
                   <v-spacer></v-spacer>
                    <v-btn small replace color="info" v-bind:href="article.url" target="_blank">Детально</v-btn>
                  </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
</div>

</template>


<style scoped>
.heading {
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .2rem;
  text-align: center;
  color: #002244;
  text-shadow: 0 3px 0 #fec422;
  margin-bottom: 30px;
}
</style>
<script>
export default {
  data: () => ({
    articles: [
      {title: 'Послуга домофон в жк Данія',
        urlToImage: 'https://golden.net.ua/assets/site/img/news/dania1.jpg',
        description: 'Послуга домофон в жк Данія',
        text: 'test lorem10aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
      {title: 'Послуга домофон в жк Данія',
        urlToImage: 'https://golden.net.ua/assets/site/img/news/dania1.jpg',
        description: 'Послуга домофон в жк Данія',
        text: 'test lorem10aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
      {title: 'Послуга домофон в жк Данія',
        urlToImage: 'https://golden.net.ua/assets/site/img/news/dania1.jpg',
        description: 'Послуга домофон в жк Данія',
        text: 'test lorem10aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
      {title: 'Послуга домофон в жк Данія',
        urlToImage: 'https://golden.net.ua/assets/site/img/news/dania1.jpg',
        description: 'Послуга домофон в жк Данія',
        text: 'test lorem10aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
    ],
  })
}
</script>