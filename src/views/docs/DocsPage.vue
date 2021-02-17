<template>
  <div class="main">
    <h1 class="heading">Документи</h1>
    <v-container  grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease"     @click="readFileInternetP()">
              <v-card-title class="font-weight-medium  headline">Договір  фізичним  особам <br> інтернет</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/docs/images/private.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease"  @click="readFileInternetB()">
              <v-card-title class="font-weight-medium  headline">Договір  юридичним особам <br> інтернет</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/docs/images/business.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease"  @click="readFileInternetI()">
              <v-card-title class="font-weight-medium  headline">Договір  фізичним  особам <br> домофон</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/docs/images/intercom.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>




<script>
export default {
  name: 'docs-page',
  data: () => ({
  }),
  methods: {
    readFileInternetP() {
     window.open('https://mag.golden.net.ua/static/docs/contract_internet.pdf', '_blank')
   },
    readFileInternetB() {
     window.open('https://mag.golden.net.ua/static/docs/business_contract_internet.pdf', '_blank')
   },
    readFileInternetI() {
     window.open('https://mag.golden.net.ua/static/docs/contract_intercom.pdf', '_blank')
   },
  }

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

.main {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

a {
  text-decoration: none;
  color: #ffffff;
}

a:hover {
  opacity: 0.8;
}
</style>