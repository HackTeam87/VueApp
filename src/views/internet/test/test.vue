<template>
  <div class="white lighten-3">
  <h1 class="heading">Інтернет + IPTV</h1>
    <v-container>
      <v-row no-gutters>
        <section class="pt-35">
          <div class="mt-30 mb-40">
            <h3 class="card-title text-center">Виберіть населений пункт:</h3>
          </div>

          <v-chip
            v-ripple="{ class: `warning--text` }"
            class="ma-2"
            dark
            v-for="(tab, index) in tabs" :key="index" 
            :class="['blue darken-3--text',{ 'active selected_tab yellow darken-2' : currentTab === tab }]"
            @click="currentTab = tab"
          >
            <v-avatar left>
              <v-icon>mdi-share</v-icon>
            </v-avatar>
            {{ tab.location }}
          </v-chip>

          <v-row no-gutters>
            <v-col cols="12" sm="4" md="4" lg="4" v-cloak>
              <template>
                <v-simple-table v-for="(tab, index) in tabs" :key="index">
                  <template v-slot:default  v-if="tab.id === currentTab.id">
                    <thead>
                      <tr>
                        <th class="text-left" >&#10003; Швидкість_30</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                        <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: 1.3em;">{{ total_30(tab.id) }}<br>грн/міс</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_30"
                        :key="index"
                      >
                        <td>
                         <v-switch 
                         color="blue darken-3"
                         v-model="i.checkbox" 
                         :class="{ 'checkbox' : i.checkbox }" 
                         :disabled="i.disabled">
                         </v-switch>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price | currency}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-col>

            <v-col cols="12" sm="4" md="4" lg="4" v-cloak>
              <template>
                <v-simple-table v-for="(tab, index) in tabs" :key="index">
                  <template v-slot:default v-if="tab.id === currentTab.id">
                    <thead>
                      <tr>
                        <th class="text-left" >&#10003; Швидкість_50</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                         <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: 1.3em;">{{ total_50(tab.id) }}<br>грн/міс</span>
                         </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_50"
                        :key="index"
                      >
                        <td>
                          <v-switch 
                         color="blue darken-3"
                         v-model="i.checkbox" 
                         :class="{ 'checkbox' : i.checkbox }" 
                         :disabled="i.disabled">
                         </v-switch>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price | currency}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-col>

            <v-col cols="12" sm="4" md="4" lg="4" v-cloak>
              <template>
                <v-simple-table v-for="(tab, index) in tabs" :key="index">
                  <template v-slot:default v-if="tab.id === currentTab.id">
                    <thead>
                      <tr>
                        <th class="text-left" >&#10003; Швидкість_100</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                        <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: 1.3em;">{{ total_100(tab.id) }}<br>грн/міс</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_100"
                        :key="index"
                      >
                        <td>
                         <v-switch 
                         color="blue darken-3"
                         v-model="i.checkbox" 
                         :class="{ 'checkbox' : i.checkbox }" 
                         :disabled="i.disabled">
                         </v-switch>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price | currency}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-col>


            <v-col cols="12" sm="4" md="4" lg="4" v-cloak>
              <template>
                <v-simple-table  v-for="(tab, index) in tabs" :key="index">
                  <template v-slot:default v-if="tab.id === currentTab.id" >
                    <thead>
                      <tr>
                        <th class="text-left" >&#10003;Швидкість_500</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                         <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: 1.3em;">{{ total_500(tab.id) }}<br>грн/міс</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_500"
                        :key="index"
                      >
                        <td>
                          <v-switch 
                         color="blue darken-3"
                         v-model="i.checkbox" 
                         :class="{ 'checkbox' : i.checkbox }" 
                         :disabled="i.disabled">
                         </v-switch>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price | currency}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-col>

          </v-row>
        </section>
      </v-row>
      </v-container>
  </div>
</template>
                    



<script>
export default {
  data() {
    return {
      search: "",
      price: 1,
      checked: false,
      currentTab: "0",
      tabs: [
        {
          id: 0,
          location: "ЖК Софіївський Квартал",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали",price: 0.0, checkbox: true, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали",  price: 100.0, checkbox: false, disabled: true},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true },
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3,  name: "+ TV 193 канали",price: 0.0, checkbox: true, disabled: true},
              {price_id: 4,  name: "+ TV 245 каналів",price: 50.0, checkbox: false, disabled: true},
              {price_id: 5,  name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true },
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
          },
        },

        {
          id: 1,
          location: "Жк Данія",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true },
              {price_id: 2,  name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3,  name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4,  name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5,  name: "+ TV 259 канали",  price: 100.0, checkbox: false, disabled: true},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2,  name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3,  name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4,  name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5,  name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали",price: 100.0, checkbox: false, disabled: true},
            ],
          },
        },

        {
          id: 2,
          location: "Жк Променада",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0,checkbox: false, disabled: false},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 160, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 210, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_500: [
              {price_id: 1, name: "500 Мбіт/с", price: 300, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
          },
        },

        {
          id: 3,
          location: "Жк OneHouse",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
          },
        },
        {
          id: 4,
          location: "Лобановского (Star Centre)",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали",price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0,checkbox: false, disabled: false},
            ],
          },
        },
        {
          id: 5,
          location: "Берковецька 6а",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: false},
            ],
          },
        },

        {
          id: 6,
          location: "Житлові комплекси бізнес",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0,checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
          },
        },

        {
          id: 7,
          location: "ЖК Петрівський квартал",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false, disabled: true},
            ],
            price_100: [
              {price_id: 1,  name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2,  name: "+ Зовнішній IP", price: 50, checkbox: false, disabled: true},
              {price_id: 3,  name: "+ TV 193 канали", price: 0.0,checkbox: false, disabled: true},
              {price_id: 4,  name: "+ TV 245 каналів", price: 50.0, checkbox: false, disabled: true},
              {price_id: 5,  name: "+ TV 259 канали",  price: 100.0, checkbox: false, disabled: true},
            ],
          },
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.tabs.filter((i) => {
        return (
          !this.search ||
          i.location.toUpperCase().indexOf(this.search.toUpperCase()) !== -1
        );
      });
    },
  },
  methods: {
    Checker: function () {
      this.checked = !this.checked;
    },

    toggleActive: function (s) {
      s.activate = !s.activate;
    },
    total_30: function (id) {
      var total = 0;
      this.tabs[id].prices.price_30.forEach(function (s) {
        if (s.checkbox) {
          total += s.price;
        }
      });

      return total;
    },
    total_50: function (id) {
      var total = 0;
      this.tabs[id].prices.price_50.forEach(function (s) {
        if (s.checkbox) {
          total += s.price;
        }
      });

      return total;
    },
    total_100: function (id) {
      var total = 0;
      this.tabs[id].prices.price_100.forEach(function (s) {
        if (s.checkbox) {
          total += s.price;
        }
      });

      return total;
    },
    total_500: function (id) {
      var total = 0;
      this.tabs[id].prices.price_500.forEach(function (s) {
        if (s.checkbox) {
          total += s.price;
        }
      });

      return total;
    },
  },
  filters: {
    currency: function (value) {
      return value.toFixed(2) + ".грн";
    },
  },
};
</script>

<style scoped>
.selected_tab{
  font-size:1.15em;
}
</style>