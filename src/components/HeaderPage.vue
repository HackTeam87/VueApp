<template>
  <div>


    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up" width="100%">
      <v-container>
        <v-card
            v-scroll.self="onScroll"
            class="overflow-y-auto"
            max-height="500"
        >
          <v-banner
              class="justify-center headline font-weight-light"
              sticky
          >
            Scroll Me - Method invoked
          </v-banner>
          <v-list>
            <v-list-item href="https://my.golden.net.ua" target="_blank">
              <v-icon aria-hidden="false">mdi-account</v-icon>
              Профіль
            </v-list-item>
            <v-list-item href="https://test.golden.net.ua" target="_blank">
              <v-icon aria-hidden="false">mdi-access-point-network</v-icon>
              Speedtest
            </v-list-item>
            <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
              <v-list-item-action>
                <v-icon aria-hidden="false" left v-html="item.icon"></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
          </v-list>
           <v-list>
            <v-list-item href="https://my.golden.net.ua" target="_blank">
              <v-icon aria-hidden="false">mdi-account</v-icon>
              Профіль
            </v-list-item>
            <v-list-item href="https://test.golden.net.ua" target="_blank">
              <v-icon aria-hidden="false">mdi-access-point-network</v-icon>
              Speedtest
            </v-list-item>
            <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
              <v-list-item-action>
                <v-icon aria-hidden="false" left v-html="item.icon"></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
          </v-list>
           <v-list>
            <v-list-item href="https://my.golden.net.ua" target="_blank">
              <v-icon aria-hidden="false">mdi-account</v-icon>
              Профіль
            </v-list-item>
            <v-list-item href="https://test.golden.net.ua" target="_blank">
              <v-icon aria-hidden="false">mdi-access-point-network</v-icon>
              Speedtest
            </v-list-item>
            <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
              <v-list-item-action>
                <v-icon aria-hidden="false" left v-html="item.icon"></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
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
              lazy-src="@/assets/img/main_page/logo-newg.png"
              max-height="80"
              max-width="130"
              src="@/assets/img/main_page/logo-newg.png"
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
            <v-list-item v-for="contact  in contacts" :href="`tel:`+ contact.link">
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
            <v-list-item v-for="item in company" :to="item.link">
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
          icon: 'mdi-home-automation',
          title: '',
          m_title: '',
          route: '/'
        },

      ]
    }
  }
})

</script>

