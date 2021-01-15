<template>
  <div class="main">
    <v-container fluid grid-list-md>
      <v-layout row wrap>

        <v-flex d-flex sm4>
          <v-card>
            <router-link to="/video">
              <v-card-title class="text-right">Безпека</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/drone_640.jpg">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
            </router-link>

          </v-card>
        </v-flex>

        <v-flex d-flex sm4>
          <v-card>
            <router-link to="/internet">
              <v-card-title class="text-right">Інтернет</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/social_640.jpg">
              </v-img>

              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
            </router-link>
          </v-card>
        </v-flex>

        <v-flex d-flex sm4>
          <v-card>
            <router-link to="/intercom">
              <v-card-title class="text-right">Домофони</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/intercom_640.jpg">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
            </router-link>
          </v-card>
        </v-flex>

        <v-flex sm6>
          <v-card>
            <router-link to="/intercom">
              <v-card-title class="text-right">Інструкції</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/tool_640.jpg">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
            </router-link>
          </v-card>
        </v-flex>
        <v-flex sm6>
          <v-card>
            <router-link to="/shop">
              <v-card-title class="text-right">Магазин</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/keyboard_640.jpg">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>
            </router-link>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me 2'},
    ],
  }),

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&family=Roboto&family=Roboto+Slab&display=swap');

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