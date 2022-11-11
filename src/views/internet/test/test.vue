<template>
  <div class="white lighten-3">
    <h1 class="heading">Тестовая страница</h1>
    <v-container fluid>
      <v-row no-gutters>
        <section class="pt-35">
          <div class="mt-30 mb-40">
            <h3 class="card-title text-center">Виберіть населений пункт:</h3>
          </div>

          <v-chip
            v-ripple="{ class: `warning--text` }"
            class="ma-2"
            outlined
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
              'indigo darken-4--text',
              { orange: currentTab === tab },
              'active',
              { active: currentTab === tab },
            ]"
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
                  <template v-slot:default v-if="tab.id === currentTab.id">
                    <thead>
                      <tr>
                        <th class="text-left" style="color:orange;">&#10003; Швидкість_30</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                        <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: large;">{{ total_30()}}/міс</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_30"
                        :key="index"
                      >
                        <td>
                          <v-checkbox
                            v-model="i.checkbox"
                            :class="{ 'checkbox' : i.checkbox }"
                            :disabled="i.disabled"
                          ></v-checkbox>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price }}</span>грн
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
                        <th class="text-left" style="color:orange;">&#10003; Швидкість_50</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                         <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: large;">{{ total_50()}}грн/міс</span>
                         </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_50"
                        :key="index"
                      >
                        <td>
                          <v-checkbox
                            v-model="i.checkbox"
                            :class="{ 'checkbox' : i.checkbox }"
                            :disabled="i.disabled"
                          ></v-checkbox>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price }}</span>грн
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
                        <th class="text-left" style="color:orange;">&#10003; Швидкість_100</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                        <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: large;">{{ total_100()}}/міс</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_100"
                        :key="index"
                      >
                        <td>
                          <v-checkbox
                            v-model="i.checkbox"
                            :class="{ 'checkbox' : i.checkbox }"
                            :disabled="i.disabled"
                          ></v-checkbox>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price }}</span>грн
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
                        <th class="text-left" style="color:orange;">&#10003; Швидкість_500</th>
                        <th class="text-left">Тариф</th>
                        <th class="text-left">Ціна</th>
                         <th>
                            Разом:
                            <br>
                            <span style="color:#4A148C;font-size: large;">{{ total_500()}}/міс</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in tab.prices.price_500"
                        :key="index"
                      >
                        <td>
                          <v-checkbox
                            v-model="i.checkbox"
                            :class="{ 'checkbox' : i.checkbox }"
                            :disabled="i.disabled"
                          ></v-checkbox>
                        </td>
                        <td class="text-left">
                          <span>{{ i.name }}</span>
                        </td>
                        <td class="text-left">
                          <span>{{ i.price }}</span>грн
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-col>



          </v-row>
        </section>
      </v-row></v-container
    >
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
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false,},
              {price_id: 3, name: "+ TV 193 канали",price: 0.0, checkbox: true, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5, name: "+ TV 259 канали",  price: 100.0, checkbox: false},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true },
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3,  name: "+ TV 193 канали",price: 0.0, checkbox: true, disabled: true},
              {price_id: 4,  name: "+ TV 245 каналів",price: 50.0, checkbox: false},
              {price_id: 5,  name: "+ TV 259 канали", price: 100.0, checkbox: false},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true },
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false},
            ],
          },
        },

        {
          id: 1,
          location: "Жк Данія",
          prices: {
            price_30: [
              { price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true },
              {price_id: 2,  name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3,  name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4,  name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5,  name: "+ TV 259 канали",  price: 100.0, checkbox: false},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2,  name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3,  name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4,  name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5,  name: "+ TV 259 канали", price: 100.0, checkbox: false},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: true, disabled: true},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5, name: "+ TV 259 канали",price: 100.0, checkbox: false},
            ],
          },
        },

        {
          id: 2,
          location: "Жк Променада",
          prices: {
            price_30: [
              {price_id: 1, name: "30 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0,checkbox: false},
            ],
            price_50: [
              {price_id: 1, name: "50 Мбіт/с", price: 160, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false},
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 210, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false},
            ],
            price_500: [
              {price_id: 1, name: "100 Мбіт/с", price: 300, checkbox: true, disabled: true},
              {price_id: 2, name: "+ Зовнішній IP", price: 50, checkbox: false},
              {price_id: 3, name: "+ TV 193 канали", price: 0.0, checkbox: false},
              {price_id: 4, name: "+ TV 245 каналів", price: 50.0, checkbox: false},
              {price_id: 5, name: "+ TV 259 канали", price: 100.0, checkbox: false},
            ],
          },
        },

        {
          id: 3,
          location: "Жк OneHouse",
          prices: {
            price_30: [
              { price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_50: [
              { price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_100: [
              { price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
          },
        },
        {
          id: 4,
          location: "Лобановского 56 (Star Centre)",
          prices: {
            price_30: [
              { price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_50: [
              { price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_100: [
              { price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
          },
        },
        {
          id: 5,
          location: "Берковецька 6а",
          prices: {
            price_30: [
              { price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_50: [
              { price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_100: [
              { price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
          },
        },

        {
          id: 6,
          location: "Житлові комплекси бізнес",
          prices: {
            price_30: [
              { price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_50: [
              { price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_100: [
              { price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
          },
        },

        {
          id: 7,
          location: "ЖК Петрівський квартал",
          prices: {
            price_30: [
              { price_id: 1, name: "30 Мбіт/с", price: 120, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_50: [
              { price_id: 1, name: "50 Мбіт/с", price: 140, checkbox: true, disabled: true},
              {
                price_id: 2,
                name: "+ Зовнішній IP",
                price: 50,
                checkbox: false,
              },
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
            ],
            price_100: [
              {price_id: 1, name: "100 Мбіт/с", price: 180, checkbox: true, disabled: true},
              {price_id: 2,  name: "+ Зовнішній IP", price: 50, checkbox: false},
              {
                price_id: 3,
                name: "+ TV 193 канали",
                price: 0.0,
                checkbox: false,
              },
              {
                price_id: 4,
                name: "+ TV 245 каналів",
                price: 50.0,
                checkbox: false,
              },
              {
                price_id: 5,
                name: "+ TV 259 канали",
                price: 100.0,
                checkbox: false,
              },
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
    total_30: function () {
      var total = 0;
      this.tabs[0].prices.price_30.forEach(function (s) {
        if (s.checkbox) {
          total += s.price;
        }
      });

      return total;
    },
    total_50: function () {
      var total = 0;
      this.tabs[0].prices.price_50.forEach(function (s) {
        if (s.checkbox) {
          total += s.price;
        }
      });

      return total;
    },
    total_100: function () {
      var total = 0;
      this.tabs[0].prices.price_100.forEach(function (s) {
        if (s.checkbox) {
          total += s.price;
        }
      });

      return total;
    },
    total_500: function () {
      var total = 0;
      this.tabs[0].prices.price_100.forEach(function (s) {
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
.services_price {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
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
  border-radius: 0.25rem;
  box-shadow: 0 3px 3px 0 #37718e;
}

.services__item span {
  color: #006080;
}

.activate {
  color: #ffffff;
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
  color: #002244;
  font-size: 1.6rem;
}

.services_description li {
  font-size: 1.1em;
  list-style: none;
}

.bl {
  color: #00387f;
}
</style>