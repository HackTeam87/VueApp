<template>
  <div class="white lighten-3" style="margin-top: 200px;">
    <h1 class="heading">Інтернет + IPTV</h1>
    <v-container grid-list-md>
      <v-layout row wrap>

        <v-flex d-flex sm4>
          <v-card href="/internet/price/daniya" hover data-aos="zoom-in" data-aos-easing="ease" >

              <v-card-title class="text-right">Жк Данія</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/internet_price/daniya.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-server-network</v-icon>
              </v-card-text>


          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card href="/internet/price/eurocity" hover data-aos="zoom-in" data-aos-easing="ease">

              <v-card-title class="text-right">Жк Евромісто</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/internet_price/eurocity.webp">
              </v-img>

              <v-card-text>
                <v-icon aria-hidden="false">mdi-server-network</v-icon>
              </v-card-text>

          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card href="/internet/price/promenada" hover data-aos="zoom-in" data-aos-easing="ease">

              <v-card-title class="text-right">Жк Променада</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/internet_price/promenada.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-server-network</v-icon>
              </v-card-text>

          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {

  data() {
    return {
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.heading {
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .01rem;
  text-align: center;
  color: #002244;
  text-shadow: 0 3px 0 #fec422;
}

.services__item {
  /*box-shadow: 0 3px 3px 0 #37718E;*/
  box-shadow: 0 1px 1px 0 #fec422;
}

</style>