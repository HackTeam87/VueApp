<template>
  <div>
     <h1 class="heading">Омо</h1>
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
    }}

}
</script>

<style scoped>
.heading {
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .2rem;
  text-align: center;
  color: #002244;
  text-shadow: 0 3px 0 #fec422;
}
</style>