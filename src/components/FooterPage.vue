<template>
  <v-footer dark padless class=" lighten-1 white--text text-center" color="#002244">

    <!--    <v-container fluid grid-list-md>-->
    <!--      <v-divider></v-divider>-->
    <!--      <v-container>-->
    <!--        <v-row justify="space-around">-->
    <!--          <v-col v-for="i in  FooterLinkPay" cols="12" sm="3" >-->
    <!--              <v-list-item :href="i.link" class="mx-auto" height="50" width="100" style="padding:5px;">-->
    <!--                <v-img v-bind:src="i.img" ></v-img>-->
    <!--              </v-list-item>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--      </v-container>-->

    <!--      <v-divider></v-divider>-->
    <!--    </v-container>-->

    <v-container grid-list-md>

      <v-layout row wrap>
        <v-flex d-flex sm3>
          <v-card flat tile>
            <v-list v-for="i in contacts" class=" lighten-1 white--text text-center" color="#002244">
              <v-list-item :href="`tel:`+ i.link">
                <v-list-item-action>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>


        <v-flex d-flex sm3>
          <v-card flat tile>
            <v-list v-for="i in FooterLinkGroup1" class=" lighten-1 white--text text-center" color="#002244">
              <v-list-item :to="i.link">
                <v-icon>mdi-bookmark-outline</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex d-flex sm3>
          <v-card flat tile>
            <v-list v-for="i in FooterLinkGroup2" class=" lighten-1 white--text text-center" color="#002244">
              <v-list-item :to="i.link">
                <v-icon>mdi-bookmark-outline</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex d-flex sm3>
          <v-card flat tile>
            <v-list v-for="i in FooterLinkGroup3" class=" lighten-1 white--text text-center" color="#002244">
              <v-list-item :href="i.link">
                <v-icon>mdi-bookmark-outline</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>

      </v-layout>

      <v-btn block color="error" class="py-sm-5 title rounded-xl" @click="dialog = true">
        Підключитись
      </v-btn>

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <v-toolbar dark color="#002244">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items>

            </v-toolbar-items>
          </v-toolbar>

          <v-container>
            <v-subheader class="headline">Підключайся</v-subheader>
            <v-form ref="form" lazy-validation>
              <v-text-field :counter="20" label="Ім'я" required></v-text-field>
              <v-text-field :counter="20" label="Прізвище"></v-text-field>
              <v-text-field :counter="20" label="Телефон" required></v-text-field>


              <v-btn block color="error" class="py-sm-5 title rounded-xl">
                Надіслати
              </v-btn>

            </v-form>
          </v-container>
        </v-card>


      </v-dialog>


    </v-container>

    <v-container fluid grid-list-md>
      <v-divider></v-divider>
      <v-layout row wrap>
        <v-card-text class="white--text">
          2018 - {{ new Date().getFullYear() }} <strong>GoldeNNet <span>© All rights reserved</span></strong>
          <v-btn v-for="icon in social" class="mx-4 white--text" icon :href="icon.link" target="_blank">
            <v-icon size="24px">
              {{ icon.title }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {


  data: () => ({
    dialog: false,
    social: [
      {title: 'mdi-facebook', link: 'https://www.facebook.com/golden.net.ua/'},
    ],
    FooterLinkGroup1: [
      {title: 'Домашня', link: '/'},
      {title: 'Інтернет', link: '/internet'},
      {title: 'Домофони', link: '/intercom'},
    ],
    FooterLinkGroup2: [
      {title: 'Безпека', link: '/security'},
      {title: 'Новини', link: '/news'},
      {title: 'Магазин', link: '/shop'},
    ],
    FooterLinkGroup3: [
      {title: 'Профіль', link: 'https://my.golden.net.ua'},
      {title: 'ТелеграмБот', link: 'https://t.me/GoldenNetUaBot'},
      {title: 'SpeedTest', link: 'https://test.golden.net.ua'},
    ],
    FooterLinkPay: [
      {
        img: 'http://185.190.150.21:8080/img/ibox3.f38f1f40.png',
        link: 'http://185.190.150.21:8080/img/2click.bff49012.png'
      },
      {
        img: 'http://185.190.150.21:8080/img/ibox3.f38f1f40.png',
        link: 'http://185.190.150.21:8080/img/city-24.a22e9cee.png'
      },
      {
        img: 'http://185.190.150.21:8080/img/ibox3.f38f1f40.png',
        link: 'http://185.190.150.21:8080/img/easypay4.56d9c6c8.png'
      },
      {
        img: 'http://185.190.150.21:8080/img/ibox3.f38f1f40.png',
        link: 'http://185.190.150.21:8080/img/ibox3.f38f1f40.png'
      },
    ],
    contacts: [
      {title: '+38(097) 354 4545', link: '0973544545'},
      {title: '+38(099) 354 4545', link: '0993544545'},
      {title: '+38(093) 354 4545', link: '0933544545'},
    ]
  }),

}
</script>

<style scoped>

</style>