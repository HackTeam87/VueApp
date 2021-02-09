<template>
  <div class="white lighten-3">

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

    <h2 class="heading">Додаткові послуги</h2>
    <v-container>
      <v-row>

        <v-col cols="12" sm="6" >
          <div class="services_price" >
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/setup_router.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/drilling-machine.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Goldennet</div>
                  <v-list-item-title class="subtitle-2 mb-1">Виклик фахівця</v-list-item-title>
                  <v-list-item-subtitle> * для огляду та консультації - 100 грн.</v-list-item-subtitle>
                  <v-list-item-subtitle> * Терміновий виклик спеціаліста або термінове підключення - 100 грн. (протягом
                    24-х годин)
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="65">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/settings.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/setup_tv.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="mx-auto services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Goldennet
                  </div>
                  <v-list-item-title class="subtitle-2 mb-1">Обжим кабелю</v-list-item-title>
                  <v-list-item-subtitle>* Додаткова заміна (обтиск) коннектора RJ-45 - 15 грн/шт.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/crimping.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>


        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/ip.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/cable.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/internet_socket.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
                  <v-img src="https://golden.net.ua/assets/site/css/new-service/worker.svg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="services_price">
            <v-card class="services__item" max-width="100%" outlined hover data-aos="zoom-in" data-aos-easing="ease">
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

                <v-list-item-avatar tile size="70">
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
      slides: [
        {link: 'https://mag.golden.net.ua/static/img/sliders/new_year_box.webp'},
        {link: 'https://mag.golden.net.ua/static/img/sliders/new_year_box1.webp'}
      ],
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