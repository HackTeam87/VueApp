<template>
  <div class="white lighten-3">
    <v-container fluid>
      <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
        <template v-slot:prev="{ on, attrs }">
          <v-btn color="success" v-bind="attrs" v-on="on">Previous slide</v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
        </template>
        <v-carousel-item v-for="slide in slides">
          <v-sheet height="100%">

            <div class="display-3">
              <v-img v-bind:src="slide.link" width="130%"></v-img>
            </div>

          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <h1 class="heading">Інтернет + IPTV</h1>
    <v-container>
      <v-row no-gutters>

        <v-col cols="12" sm="3" md="3" lg="3" v-cloak>

          <h3 class="heading" style="color:#002244;">Швидкість 30</h3>
          <div class="services_price">

            <div class="services__item" v-for="service in prices.price_30"
                 v-on:click="toggleActive(service)"
                 v-bind:class="{ 'activate' : service.activate }">
              <span>{{ service.name }}</span> <span>{{ service.price | currency }}</span>
            </div>
          </div>

          <p class="total">
            <span>Разом:</span> <span>{{ total_30() | currency }}/м</span>
          </p>

        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3" v-cloak>

          <h3 class="heading" style="color:#002244;">Швидкість 50</h3>
          <div class="services_price">

            <div class="services__item" v-for="service in prices.price_50"
                 v-on:click="toggleActive(service)"
                 v-bind:class="{ 'activate' : service.activate }">
              <span>{{ service.name }}</span> <span>{{ service.price | currency }}</span>
            </div>
          </div>

          <p class="total">
            <span>Разом:</span> <span>{{ total_50() | currency }}/м</span>
          </p>

        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3" v-cloak>

          <h3 class="heading" style="color:#002244;">Швидкість 100</h3>
          <div class="services_price">

            <div class="services__item" v-for="service in prices.price_100"
                 v-on:click="toggleActive(service)"
                 v-bind:class="{ 'activate' : service.activate }">
              <span>{{ service.name }}</span> <span>{{ service.price | currency }}</span>
            </div>
          </div>

          <p class="total">
            <span>Разом:</span> <span>{{ total_100()| currency }}/м</span>
          </p>

        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3" v-cloak>

          <h3 class="heading" style="color:#002244;">Швидкість 500</h3>
          <div class="services_price">

            <div class="services__item" v-for="service in prices.price_500"
                 v-on:click="toggleActive(service)"
                 v-bind:class="{ 'activate' : service.activate }">
              <span>{{ service.name }}</span> <span>{{ service.price | currency }}</span>
            </div>
          </div>

          <p class="total">
            <span>Разом:</span> <span>{{ total_500() | currency }}/м</span>
          </p>

        </v-col>

        <br>
        <div class="container services_description">
          <div class="row">
            <ul>
              <li>
                <p style="font-weight:bold;border-bottom: 2px solid #ff4500;"> * Послуга ОТТ телебачення надається
                  SweetTV</p>
              </li>
            </ul>
          </div>
        </div>

      </v-row>
    </v-container>

    <h2 class="heading">Додаткові послуги</h2>
    <v-container>
      <v-row>

        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">
                    Налаштування Wi-Fi роутера
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    * - Роутер абонента, базові налаштування Інтернет - 100 грн. з урахуванням налаштування одного
                    пристрою, за другий і наступні - 50 грн.
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    * - Роутер Голденнет базові налаштування Інтернет - 0 грн. з урахуванням налаштування одного
                    пристрою, за другий і наступні - 50 грн.
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    * Розширене налаштування програмного забезпечення Wi-Fi роутера: - Переадресація портів,
                    налаштування систем безпеки, VPN та ін. - 250 грн
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/setup_router.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
         <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">
                    Монтаж кронштейну
                  </v-list-item-title>
                  <v-list-item-subtitle>* Установка телевізора (до 26") на цеглу / бетон/ піноблок 250 грн.
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>* Установка телевізора (до 42") на цеглу / бетон/ піноблок 350 грн.
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>* Установка телевізора (до 56") на цеглу / бетон/ піноблок 450 грн.
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/drilling-machine.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Goldennet</div>
                  <v-list-item-title class="subtitle-2 mb-1">Виклик фахівця</v-list-item-title>
                  <v-list-item-subtitle> * для огляду та консультації - 100 грн.</v-list-item-subtitle>
                  <v-list-item-subtitle> * Терміновий виклик спеціаліста або термінове підключення - 100 грн. (протягом
                    24-х годин)
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/settings.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
         <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">Телевізор SMART Android TV</v-list-item-title>
                  <v-list-item-subtitle>
                    * Налаштування мережевого медіаплеєра або SMART-TV - виклик майстра додому для налаштування . -
                    Обладнання абонента - 100 грн.
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    * Розширене налаштування програмного забезпечення SMART-TV або медіаплеєра: - Обладнання абонента -
                    200 грн.
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/setup_tv.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
          <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="mx-auto services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">Обжим кабелю</v-list-item-title>
                  <v-list-item-subtitle>* Додаткова заміна (обтиск) коннектора RJ-45 - 15 грн/шт.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/crimping.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>


         <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Goldennet</div>
                  <v-list-item-title class="subtitle-2 mb-1">
                    Статичний (зовнішній) IP адрес
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    * - 30 грн/міс.
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/ip.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">
                    Монтаж короба
                  </v-list-item-title>
                  <v-list-item-subtitle>Монтаж кабельного короба - 8 грн/метр.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/cable.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">
                    Монтаж інтернет-розетки
                  </v-list-item-title>
                  <v-list-item-subtitle>* - 50 грн/шт. RJ-45</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/internet_socket.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">Монтаж кабелю</v-list-item-title>
                  <v-list-item-subtitle>* - 8 грн/метр.</v-list-item-subtitle>
                  <v-list-item-subtitle>
                    * Додатковий монтаж кабелю в приміщенні замовника відкритим шляхом (кріплення кабелю кліпсами по
                    плінтусу),без урахування кабелю.
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/worker.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">
                    Патч-корд
                  </v-list-item-title>
                  <v-list-item-subtitle>Додаткове виготовлення патч-корду, (до 5 м) - 50 грн/шт</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/two_patch_cables.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {

  data() {
    return {
      prices: {
        price_30: [
          {
            name: '30 Мбіт/с',
            price: 120,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 154 канали',
            price: 0,
            activate: true
          },
          {
            name: '+ TV 208 каналів',
            price: 50,
            activate: false
          },
          {
            name: '+ TV 210 каналів + Футбол',
            price: 80,
            activate: false
          },
          {
            name: '+ TV 224 канали',
            price: 100,
            activate: false
          },
          {
            name: '+ TV 226 каналів + Футбол',
            price: 120,
            activate: false
          }
        ],
        price_50: [
          {
            name: '50 Мбіт/с',
            price: 140,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 154 канали',
            price: 0,
            activate: true
          },
          {
            name: '+ TV 208 каналів',
            price: 50,
            activate: false
          },
          {
            name: '+ TV 210 каналів + Футбол',
            price: 80,
            activate: false
          },
          {
            name: '+ TV 224 канали',
            price: 100,
            activate: false
          },
          {
            name: '+ TV 226 каналів + Футбол',
            price: 120,
            activate: false
          }],
        price_100: [
          {
            name: '100 Мбіт/с',
            price: 180,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 154 канали',
            price: 0,
            activate: true
          },
          {
            name: '+ TV 208 каналів',
            price: 50,
            activate: false
          },
          {
            name: '+ TV 210 каналів + Футбол',
            price: 80,
            activate: false
          },
          {
            name: '+ TV 224 канали',
            price: 100,
            activate: false
          },
          {
            name: '+ TV 226 каналів + Футбол',
            price: 120,
            activate: false
          }],
        price_500: [
          {
            name: '500 Мбіт/с',
            price: 250,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 154 канали',
            price: 0,
            activate: true
          },
          {
            name: '+ TV 208 каналів',
            price: 50,
            activate: false
          },
          {
            name: '+ TV 210 каналів + Футбол',
            price: 80,
            activate: false
          },
          {
            name: '+ TV 224 канали',
            price: 100,
            activate: false
          },
          {
            name: '+ TV 226 каналів + Футбол',
            price: 120,
            activate: false
          }],
      },
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        {link: 'https://golden.net.ua/assets/site/img/footer/new_year_box.jpg'},
        {link: 'https://golden.net.ua/assets/site/img/footer/GoldenNet3.jpg'}
      ],
    }
  },
  methods: {
    toggleActive: function (s) {
      s.activate = !s.activate;
    },
    total_30: function () {
      var total = 0;
      this.prices.price_30.forEach(function (s) {
        if (s.activate) {
          total += s.price;
        }
      });


      return total
    },
    total_50: function () {
      var total = 0;
      this.prices.price_50.forEach(function (s) {
        if (s.activate) {
          total += s.price;
        }
      });


      return total
    },
    total_100: function () {
      var total = 0;
      this.prices.price_100.forEach(function (s) {
        if (s.activate) {
          total += s.price;
        }
      });


      return total
    },
    total_500: function () {
      var total = 0;
      this.prices.price_500.forEach(function (s) {
        if (s.activate) {
          total += s.price;
        }
      });


      return total
    },

  },
  filters: {
    currency: function (value) {
      return value.toFixed(2) + '.грн';
    }
  }

}
</script>

<style scoped>


.heading {
  /*font-family: Rochester;*/
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .01rem;
  text-align: center;
  /*color: #ffffff;*/
  color: #002244;
  /*text-shadow: 0 3px 0 #37718E #FFC107;*/
  text-shadow: 0 3px 0 #fec422;
}


.services_price {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: .5rem;
  list-style: none;
  margin: 3px;
}

.services__item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: #ffffff;
  padding: 0.2rem;
  margin-bottom: 0.4rem;
  border-radius: .25rem;
  box-shadow: 0 3px 3px 0 #37718E;
}

.services__item span {
  color: #006080;
}


.activate {
  color: #ffffff;
  /*background-color: #ff4500;*/
  /*background-color: #fec422;*/
  background-color: #002244;
}

.activate span {
  color: #ffffff;
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ffffff;
  margin: 3px;
}

.total span {
  /*color: #ffffff;*/
  color: #002244;
  font-size: 1.6rem;
}

.services_description li {
  font-size: 1.1em;
  list-style: none;
  /*color: #ffffff;*/
}

.bl {
  color: #00387f;
}


</style>