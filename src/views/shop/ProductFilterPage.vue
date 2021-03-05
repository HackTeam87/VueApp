<template>
  <div>
    <v-container >
            <v-tabs color="deep-purple accent-4" center>
              <v-tab v-for="(group, index) in GROUPS" :key="index">{{ group.tag }}</v-tab>
              <v-tab-item>
                <v-container fluid>
                  <v-row >
                    <v-col  v-for="product in PRODUCTS" :key="product.id" class="mx-auto" max-width="250" cols="12" sm="4">
                      <v-card v-if="product.group == 4">
                        <v-card-text>
                          <div class="font-weight-light subtitle-1  text-right ">Ціна: <span
                              style="color:red;">{{ product.price }}</span>.грн
                          </div>
                          <p class="headline font-weight-light text-uppercase">{{ product.name }}</p>

                          <v-img class="white--text align-end" height="280px" v-bind:src="product.img"></v-img>

                          <div class="text--primary">
                            {{ product.short_description }}
                          </div>
                        </v-card-text>
                         <ProductDetailPage v-show="clickedProduct === product.id" v-bind:product="product"></ProductDetailPage>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                              <v-btn small replace class="indigo" style="color:white;"  @click="clickedProduct = product.id">
                                Детально
                                <v-icon>
                                  mdi-chevron-double-right
                                </v-icon>
                              </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>

                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container fluid>
                  <v-row >
                    <v-col  v-for="product in PRODUCTS" :key="product.id" class="mx-auto" max-width="250" cols="12" sm="4">
                      <v-card v-if="product.group == 5">
                        <v-card-text>
                          <div class="font-weight-light subtitle-1  text-right ">Ціна: <span
                              style="color:red;">{{ product.price }}</span>.грн
                          </div>
                          <p class="headline font-weight-light text-uppercase">{{ product.name }}</p>

                          <v-img class="white--text align-end" height="280px" v-bind:src="product.img"></v-img>

                          <div class="text--primary">
                            {{ product.short_description }}
                          </div>
                        </v-card-text>
                         <ProductDetailPage v-show="clickedProduct === product.id" v-bind:product="product"></ProductDetailPage>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                              <v-btn small replace class="indigo" style="color:white;"  @click="clickedProduct = product.id">
                                Детально
                                <v-icon>
                                  mdi-chevron-double-right
                                </v-icon>
                              </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>

                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container fluid>
                  <v-row >
                    <v-col  v-for="product in PRODUCTS" :key="product.id" class="mx-auto" max-width="250" cols="12" sm="4">
                      <v-card v-if="product.group == 6">
                        <v-card-text>
                          <div class="font-weight-light subtitle-1  text-right ">Ціна: <span
                              style="color:red;">{{ product.price }}</span>.грн
                          </div>
                          <p class="headline font-weight-light text-uppercase">{{ product.name }}</p>

                          <v-img class="white--text align-end" height="280px" v-bind:src="product.img"></v-img>

                          <div class="text--primary">
                            {{ product.short_description }}
                          </div>
                        </v-card-text>
                         <ProductDetailPage v-show="clickedProduct === product.id" v-bind:product="product"></ProductDetailPage>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                              <v-btn small replace class="primary"  @click="clickedProduct = product.id">
                                Детально
                                <v-icon>
                                  mdi-chevron-double-right
                                </v-icon>
                              </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>

                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container fluid>
                  <v-row >
                    <v-col  v-for="product in PRODUCTS" :key="product.id" class="mx-auto" max-width="250" cols="12" sm="4">
                      <v-card v-if="product.group == 7">
                        <v-card-text>
                          <div class="font-weight-light subtitle-1  text-right ">Ціна: <span
                              style="color:red;">{{ product.price }}</span>.грн
                          </div>
                          <p class="headline font-weight-light text-uppercase">{{ product.name }}</p>

                          <v-img class="white--text align-end" height="280px" v-bind:src="product.img"></v-img>

                          <div class="text--primary">
                            {{ product.short_description }}
                          </div>
                        </v-card-text>
                         <ProductDetailPage v-show="clickedProduct === product.id" v-bind:product="product"></ProductDetailPage>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                              <v-btn small replace class="primary"  @click="clickedProduct = product.id">
                                Детально
                                <v-icon>
                                  mdi-chevron-double-right
                                </v-icon>
                              </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>

                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
    </v-container>
  </div>
</template>

<script>
import ProductDetailPage from '@/views/shop/ProductDetailPage.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'product-filter-page',
  components: {
    ProductDetailPage
  },
  data: () => ({
    clickedProduct: 0
  }),
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'GET_GROUPS_FROM_API']),
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'GROUPS'])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('DATA PRODUCTS Arrived!')
          }
        }),
        this.GET_GROUPS_FROM_API()
            .then((response) => {
              if (response.data) {
                console.log('DATA GROUPS Arrived!')
              }
            })
  }
}
</script>
