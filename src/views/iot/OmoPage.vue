<template>
  <div>

    <video autoplay="" loop="" muted width="100%">
      <source src="@/assets/video/newomo-1.mp4" type="video/mp4"/>
    </video>

    <h1 class="heading">Омо</h1>

    <v-container fluid>
      <v-row>
        <v-col sm5>

          <v-img
              height="100%"
              width="60%"
              src="@/assets/img/IoT/home-ua-omo.webp"
          ></v-img>

        </v-col>
        <v-col sm7>

          <v-list>
            <v-list-item>
              <p class="text-sm-left heading">
                Проста реєстрація і старт роботи
              </p>
            </v-list-item>
            <v-list-item>
              <p class="text-sm-left title">
                Контролюйте та відчиняйте двері під'їзду
              </p>
            </v-list-item>
          </v-list>
          <v-row>
            <v-col sm3>
              <v-chip class="ma-2" outlined   large href="https://play.google.com/store/apps/details?id=com.omo.systems">

                <v-icon x-large>
                  mdi-google-play
                </v-icon>
                Google play
              </v-chip >
            </v-col>
            <v-col sm3>
              <v-chip class="ma-2" outlined   large href="https://apps.apple.com/ru/app/omo/id1453033660">

                <v-icon x-large>
                  mdi-apple
                </v-icon>
                AppStore
              </v-chip>
            </v-col>
            <v-col sm6></v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>

     <v-container fluid>
      <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
        <template v-slot:prev="{ on, attrs }">
          <v-btn color="#fec422" v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-double-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn color="#fec422" v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-double-right</v-icon>
          </v-btn>
        </template>
        <v-carousel-item v-for="(slide,index) in slides" :key="index">
          <v-sheet height="100%">

            <div class="display-3">
              <v-img v-bind:src="slide.link" width="130%"></v-img>
            </div>

          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {link: 'https://mag.golden.net.ua/static/img/sliders/omo.webp'},
      ],
    }
  },


}
</script>

