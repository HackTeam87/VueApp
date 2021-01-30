<template>
  <div>

    <v-container fluid class="">
      <v-row>

        <v-col cols="12" sm="12">
          <template>

            <v-tabs color="deep-purple accent-4" center>
              <v-tab >Роутери</v-tab>
              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col v-for="(product, index) in PRODUCTS" :key="index"  class="mx-auto" max-width="210" cols="12" sm="3">
                      <v-card>
                        <v-card-text>
                          <div class="font-weight-light subtitle-1  text-right ">Ціна: <span style="color:red;">{{ product.price }}</span>.грн
                          </div>
                          <p class="headline font-weight-light text-uppercase">{{ product.name }}</p>

                          <v-img class="white--text align-end" height="200px" v-bind:src="product.img"></v-img>

                          <div class="text--primary">
                            {{ product.short_description }}
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn text color="primary" @click="reveal = true">
                            <v-icon aria-hidden="false" class="display-1">mdi-chevron-double-up</v-icon>
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal"
                                  style="height: 100%;">
                            <v-card-text class="pb-0">
                              <p class="display-1 text--primary">
                                Детальніше
                              </p>
                              <p>{{ product.description }}</p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn text color="primary" @click="reveal = false">
                                <v-icon aria-hidden="false" class="display-1">mdi-chevron-double-down</v-icon>
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-expand-transition>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>


            <v-chip outlined>
              <v-icon left>
                mdi-check
              </v-icon>
              сортування
            </v-chip>
            <v-chip class="ma-2" color="deep-purple accent-4" outlined>
              Від дешевих до дорогих
            </v-chip>
            <v-chip class="ma-2" color="deep-purple accent-4" outlined>
              Від дорогих до дешевих
            </v-chip>
            <v-chip class="ma-2" color="deep-purple accent-4" outlined>
              За рейтингом
            </v-chip>


          </template>
        </v-col>

      </v-row>

    </v-container>
  </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data: () => ({
    reveal: false,
    selectedItem: 1,
    groups: [
      {title: 'Домофони', icon: 'mdi-phone-forward'},
      {title: 'Роутери', icon: 'mdi-access-point'},
      {title: 'Кронштейни', icon: 'mdi-code-brackets'},
      {title: 'Кабель', icon: 'mdi-ethernet-cable'},
    ],
    filters: {
     
    }
  }),
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('DATA Arrived!')
          }
        })
  }


}
</script>
<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.vv {
  height: 100%;
}
</style>