<template>
  <div class="white lighten-3" >
    <h1 class="heading">Жк Евромісто</h1>
    <v-container>
      <v-row no-gutters>

        <v-col cols="12" sm="3" md="3" lg="3" v-cloak>

          <h3 class="heading" style="color:#002244;">Швидкість 30</h3>
          <div class="services_price">

            <div class="services__item" v-for="(service,index) in prices.price_30" :key="index"
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

            <div class="services__item" v-for="(service,index) in prices.price_50" :key="index"
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

            <div class="services__item" v-for="(service,index) in prices.price_100" :key="index"
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

            <div class="services__item" v-for="(service,index) in prices.price_500" :key="index"
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

        <div class="container services_description">
          <p style="font-weight:bold;font-size:2em;text-align:center;">Шановні абоненти!</p>

<p style="font-weight:bold;" >З метою розвитку, з вересня 2022 року, ми почали проводити поступове об'єднання мереж GOLDENNET та SIMNET на ЖК "Евромісто". </p>
<p> Технічні фахівці проводитимуть поступове переключення абонентів на біллінг 
 <a style="text-decoration:none;" href="https://www.simnet.kiev.ua"> (особистий кабінет) SIMNET (https://www.simnet.kiev.ua) </a>
  з збереженням існуючих коштів на балансі та переліком послуг.
</p>
<p>
В більшості випадків переключення відбудеться автоматично без додаткових налаштувань, у разі проблем з доступом після переключення - одразу телефонуйте до технічної підтримки SIMNET. 
Всі виклики майстрів в перехідній період - безкоштовні.
</p>

<p>
В подальшому послуги будуть надаватись під торговою маркою SIMNET (ТОВ Старгруп).

Типовий договір-оферта розміщений в особистому кабінеті SIMNET та за посиланням 
<a style="text-decoration:none;" href="https://simnet.kiev.ua/simnet_stargroup.pdf">https://simnet.kiev.ua/simnet_stargroup.pdf</a>
</p>

<p>
Після одержання СМС від SIMNET з номером договору оплату слід проводити на їх реквізити.
<br>

Способи оплати SIMNET:
<a style="text-decoration:none;" href=" https://simnet.kiev.ua/payments"> https://simnet.kiev.ua/payments</a>
<br>
Телефони SIMNET: <a style="text-decoration:none;" href="tel:0442248434">(044) 224-84-34</a>, 
<br> 
<a style="text-decoration:none;" href="tel:0986444471">(098) 6-4444-71</a>,
     <a style="text-decoration:none;" href="tel:0666444470">(066) 6-4444-70</a>, 
     <a style="text-decoration:none;" href="tel:0936444470">(093) 6-4444-70</a>

<br>
Сайт: <a style="text-decoration:none; color: blue;" href="https://simnet.kiev.ua">https://simnet.kiev.ua</a>
          </p>
        </div>

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
            price: 140,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 50,
            activate: false
          },
          {
            name: '+ TV 193 канали',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 245 каналів',
            price: 50,
            activate: false
          },
          
          {
            name: '+ TV 259 канали',
            price: 100,
            activate: false
          }
        ],
        price_50: [
          {
            name: '50 Мбіт/с',
            price: 160,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 50,
            activate: false
          },
           {
            name: '+ TV 193 канали',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 245 каналів',
            price: 50,
            activate: false
          },
          
          {
            name: '+ TV 259 канали',
            price: 100,
            activate: false
          }
          ],
        price_100: [
          {
            name: '100 Мбіт/с',
            price: 210,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 50,
            activate: false
          },
           {
            name: '+ TV 193 канали',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 245 каналів',
            price: 50,
            activate: false
          },
          
          {
            name: '+ TV 259 канали',
            price: 100,
            activate: false
          }
          ],
        price_500: [
          {
            name: '500 Мбіт/с',
            price: 300,
            activate: true
          },
          {
            name: '+ Зовнішній IP',
            price: 50,
            activate: false
          },
           {
            name: '+ TV 193 канали',
            price: 30,
            activate: false
          },
          {
            name: '+ TV 245 каналів',
            price: 50,
            activate: false
          },
          
          {
            name: '+ TV 259 канали',
            price: 100,
            activate: false
          }
          ],
      },
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