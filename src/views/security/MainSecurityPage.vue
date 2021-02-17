<template>
  <div class="main">
    <h1 class="heading">Безпека</h1>
    <v-container  grid-list-md>
      <v-layout row wrap>

        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security/video/surveillance">
              <v-card-title class="font-weight-medium  headline">Відеоспостереження</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/security_page/cctv.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security/access/control">
              <v-card-title class="font-weight-medium  headline">Контроль доступу</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/security_page/exit-control.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security/alarm/security">
              <v-card-title class="font-weight-medium  headline">Охоронна сигналізація</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/security_page/new-security.webp">
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

<script>
export default {
  data: () => ({
  }),

}
</script>

<style scoped>
/*@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&family=Roboto&family=Roboto+Slab&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');*/

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