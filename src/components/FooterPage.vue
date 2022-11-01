<template>
  <v-footer dark padless class="lighten-1 white--text text-center" color="#002244">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex sm3 >
          <v-card flat tile>
            <v-list v-for="(i ,index) in contacts" :key="index" class=" lighten-1 white--text text-center"
                    color="#002244">
              <v-list-item :href="'tel:'+ i.link">
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
        <v-flex d-flex sm3 >
          <v-card flat tile>
            <v-list v-for="(i,index) in FooterLinkGroup1" :key="index" class=" lighten-1 white--text text-center"
                    color="#002244">
              <v-list-item :to="i.link">
                <v-icon>mdi-bookmark-outline</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex d-flex sm3 >
          <v-card flat tile>
            <v-list v-for="(i,index) in FooterLinkGroup2" :key="index" class=" lighten-1 white--text text-center"
                    color="#002244">
              <v-list-item :to="i.link">
                <v-icon>mdi-bookmark-outline</v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex d-flex sm3 >
          <v-card flat tile>
            <v-list v-for="(i,index) in FooterLinkGroup3" :key="index" class=" lighten-1 white--text text-center"
                    color="#002244">
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
    </v-container>
    <v-container fluid white>
      <send-form></send-form>
    </v-container>
  </v-footer>
</template>

<script>
        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn.bitrix24.ua/b18672047/crm/site_button/loader_2_ycu79q.js');
</script>

<script>
import SendForm from '@/components/SendForm.vue'

export default {
  data: () => ({
    social: [
      {title: 'mdi-facebook', link: 'https://www.facebook.com/Goldennet-104002168883904/'},
      {title: 'mdi-instagram', link: 'https://instagram.com/golden.net.ua'},
    ],
    FooterLinkGroup1: [
      {title: 'Домашня', link: '/'},
      {title: 'Інтернет', link: '/internet'},
      {title: 'Домофони', link: '/intercom'},
    ],
    FooterLinkGroup2: [
      {title: 'Безпека', link: '/main/security'},
      {title: 'Новини', link: '/news'},
      {title: 'Магазин', link: '/shop/group'},
    ],
    FooterLinkGroup3: [
      {title: 'Інструкції', link: '/manual'},
      {title: 'Профіль', link: 'https://my.golden.net.ua'},
      {title: 'SpeedTest', link: 'https://test.golden.net.ua'},
    ],
    contacts: [
      {title: '+38(097) 354 4545', link: '0973544545'},
      {title: '+38(099) 354 4545', link: '0993544545'},
      {title: '+38(093) 354 4545', link: '0933544545'},
    ]
  }),
  components: {
    SendForm
  },

}
</script>
