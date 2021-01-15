
<template>
  <div>

    <v-container fluid class="">
      <v-row>

        <v-col cols="12" sm="12">
          <template>

            <v-tabs
                color="deep-purple accent-4"
                center
            >
              <v-tab>Роутери</v-tab>
              <v-tab>Домофони</v-tab>
              <v-tab>Кронштейни</v-tab>
              <v-tab>Кабель</v-tab>


              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col v-for="(product, i) in PRODUCTS" class="mx-auto" max-width="344" cols="12" md="4">

                      <v-card>
                        <v-card-text>
                          <div class="font-weight-light subtitle-1  text-right ">Ціна:<span style="color:red;">{{product.price}}</span>.грн</div>
                          <p class="display-1 font-weight-light text-uppercase" >{{ product.title }}</p>

                           <v-img class="white--text align-end" height="250px" v-bind:src="product.image"></v-img>

                          <div class="text--primary">
                            relating to or dependent on charity; charitable.<br>
                            "an eleemosynary educational institution."
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn text color="teal accent-4" @click="reveal = true">
                              <v-icon aria-hidden="false" class="display-1">mdi-chevron-double-up</v-icon>
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                            <v-card-text class="pb-0">
                              <p class="display-1 text--primary">
                                Origin
                              </p>
                              <p>{{ product.description }}</p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn text color="teal accent-4" @click="reveal = false">
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
              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col v-for="(item, i) in products" :key="i" class="mx-auto" max-width="344" cols="12" md="4">

                      <v-card>
                        <v-card-text>
                          <div>Word of the Day</div>
                          <p class="display-1 text--primary">
                            el·ee·mos·y·nar·y
                          </p>
                          <p>adjective</p>
                          <div class="text--primary">
                            relating to or dependent on charity; charitable.<br>
                            "an eleemosynary educational institution."
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                              text
                              color="teal accent-4"
                              @click="reveal = true"
                          >
                            Характеристики
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              <p class="display-1 text--primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): from
                                medieval Latin
                                eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                                ‘compassion’ </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn text color="teal accent-4" @click="reveal = false">
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-expand-transition>
                      </v-card>

                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col v-for="(item, i) in products" :key="i" class="mx-auto" max-width="344" cols="12" md="4">

                      <v-card>
                        <v-card-text>
                          <div>Word of the Day</div>
                          <p class="display-1 text--primary">
                            el·ee·mos·y·nar·y
                          </p>
                          <p>adjective</p>
                          <div class="text--primary">
                            relating to or dependent on charity; charitable.<br>
                            "an eleemosynary educational institution."
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn text color="teal accent-4" @click="reveal = true">
                            Характеристики
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                            <v-card-text class="pb-0">
                              <p class="display-1 text--primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): from
                                medieval Latin
                                eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                                ‘compassion’ </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn text color="teal accent-4" @click="reveal = false">
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-expand-transition>
                      </v-card>

                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col v-for="(item, i) in products" :key="i" class="mx-auto" max-width="344" cols="12" md="4">

                      <v-card>
                        <v-card-text>
                          <div>Word of the Day</div>
                          <p class="display-1 text--primary">
                            el·ee·mos·y·nar·y
                          </p>
                          <p>adjective</p>
                          <div class="text--primary">
                            relating to or dependent on charity; charitable.<br>
                            "an eleemosynary educational institution."
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                              text
                              color="teal accent-4"
                              @click="reveal = true"
                          >
                            Характеристики
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              <p class="display-1 text--primary">
                                Origin
                              </p>
                              <p>late 16th century (as a noun denoting a place where alms were distributed): from
                                medieval Latin
                                eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                                ‘compassion’ </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn
                                  text
                                  color="teal accent-4"
                                  @click="reveal = false"
                              >
                                Close
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


                <v-chip  outlined>
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
    products: [
      {
        title: 'tp-link_c20',
        image: 'https://backend.lanet.ua/imgs/devices/7421.png',
        short_description: '',
        description: 'tp-link_c20',
        price: '800',
        discount: '',
        group: 'Роутери'
      },
      {
        title: 'toto-link A720R',
        image: 'https://backend.lanet.ua/imgs/devices/7421.png',
        short_description: '',
        description: 'toto-link A720R',
        price: '950',
        discount: '',
        group: 'Роутери'
      },
      {title: 'tp-link_c20', image: 'https://backend.lanet.ua/imgs/devices/1251.png', short_description: '', description: '', price: '2000', discount: '', group: ''},
      {title: 'tp-link_c20', image: 'https://backend.lanet.ua/imgs/devices/1251.png', short_description: '', description: '', price: '1000', discount: '', group: ''},
      {title: 'tp-link_c20', image: 'https://backend.lanet.ua/imgs/devices/1251.png', short_description: '', description: '', price: '500', discount: '', group: ''},
      {title: 'tp-link_c20', image: 'https://backend.lanet.ua/imgs/devices/1251.png', short_description: '', description: '', price: '1500', discount: '', group: ''}
    ],
    groups: [
      {title: 'Домофони', icon: 'mdi-phone-forward'},
      {title: 'Роутери', icon: 'mdi-access-point'},
      {title: 'Кронштейни', icon: 'mdi-code-brackets'},
      {title: 'Кабель', icon: 'mdi-ethernet-cable'},
    ],
    filters: {
      product_filter: function (value) {
        if (this.products.group = 'Роутери') {
          return console.log(this.products.group)

        }
        return console.log('Test')
      }
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
  mounted(){
    this.GET_PRODUCTS_FROM_API()
    .then((response) =>{
      if(response.data){
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