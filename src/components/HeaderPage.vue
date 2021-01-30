<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up" width="80%">
      <v-container>
        <v-card v-scroll.self="onScroll" class="overflow-y-auto" max-height="100%">

          <v-banner class="justify-center headline font-weight-light" sticky>
            <v-list-group :value="false" no-action sub-group>
              <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Контакти</v-list-item-title>
            </v-list-item-content>
              </template>
          <v-list-item>
            <v-list-item-title >
              <a href="tel:+38(097) 354 45 45" style="text-decoration: none;">+38(097) 354 45 45</a>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title >
              <a href="tel:+38(099) 354 45 45" style="text-decoration: none; color:red;">+38(099) 354 45 45</a>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title >
              <a href="tel:+38(093) 354 45 45" style="text-decoration: none; color:orange;">+38(093) 354 45 45</a>
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
          </v-banner>

          <v-list>
             <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
              <v-list-item-action>
                <v-icon aria-hidden="false" left v-html="item.icon"></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item href="/internet" >
              <v-icon aria-hidden="false">mdi-check</v-icon>
              Інтернет
            </v-list-item>
            <v-list-item href="/intercom" >
              <v-icon aria-hidden="false">mdi-check</v-icon>
              Домофон
            </v-list-item>

             <v-list-item href="/main/security" >
              <v-icon aria-hidden="false">mdi-check</v-icon>
              Безпека
            </v-list-item>
             <v-list-item href="/shop" >
              <v-icon aria-hidden="false">mdi-check</v-icon>
              Магазин
            </v-list-item>
             <v-list-item href="/IoT" >
              <v-icon aria-hidden="false">mdi-check</v-icon>
              Розумний Дім
            </v-list-item>
             <v-list-item href="/manual" >
              <v-icon aria-hidden="false">mdi-check</v-icon>
              Інструкції
            </v-list-item>
            <v-spacer></v-spacer>
          </v-list>
        </v-card>
      </v-container>
    </v-navigation-drawer>


    <v-app-bar relative app dark  color="#002244">


      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor: pointer;">
        <v-toolbar-title flat>
          <v-img
              lazy-src="@/assets/img/logo/Goldennet_logo_white.png"
              max-height="50"
              max-width="90"
              src="@/assets/img/logo/Goldennet_logo_white.png"
          ></v-img>
        </v-toolbar-title>
      </router-link>

      <v-col class="d-flex" cols="12" sm="6">
        <v-menu transition="fab-transition" bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#002244" elevation="0" v-bind="attrs" v-on="on">
              <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              +38(097) 354 4545
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(contact,index ) in contacts" :key="index" :href="`tel:`+ contact.link">
              <v-list-item-title>
                {{ contact.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-menu transition="fab-transition" bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#002244" elevation="0" v-bind="attrs" v-on="on">
              <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              Про Компанію
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in company" :key="index" :to="item.link">
              <v-list-item-title to="/">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>


        <v-btn href="https://my.golden.net.ua" target="_blank" color="#002244" elevation="0">
          <v-icon aria-hidden="false">mdi-account</v-icon>
          Профіль
        </v-btn>
        <v-btn href="https://test.golden.net.ua" target="_blank" color="#002244" elevation="0">
          <v-icon aria-hidden="false">mdi-access-point-network</v-icon>
          Speedtest
        </v-btn>

        <v-btn v-for="(item, i) in menuItems" :key="`menuitem${i}`" :to="item.route" color="#002244" elevation="0">
          <v-icon aria-hidden="false" left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>


  </div>

</template>

<script>

export default ({
  data() {
    return {
      scrollInvoked: 0,
      contacts: [
        {title: '+38(097) 354 4545', link: '0973544545'},
        {title: '+38(099) 354 4545', link: '0993544545'},
        {title: '+38(093) 354 4545', link: '0933544545'},
      ],
      company: [
        {title: 'Про Компанію', link: '/about'},
        {title: 'Новини', link: '/news'},
        {title: 'Партнери', link: '/partners'},
      ],
      drawer: false
    }
  },
  methods: {
    onScroll() {
      this.scrollInvoked++
    },
  },
  computed: {
    menuItems() {
      return [

        {
          icon: 'mdi-home-automation  large',
          title: '',
          route: '/'
        },

      ]
    }
  }
})

</script>

