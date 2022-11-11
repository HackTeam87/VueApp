<template>
  <div class="main">
    <h1 class="heading">Магазин</h1>
    <v-container grid-list-md>
      <v-layout row wrap justify-center>
        <v-flex d-flex sm4 v-for="(i, index) in Main" :key="index">
          <v-card
            hover
            data-aos="zoom-in"
            data-aos-easing="ease"
            @click="SubGroup(i.id)"
          >
            <v-img class="white--text align-end" height="195px" :src="i.img">
            </v-img>
            <v-card-title class="font-weight-medium headline" justify-center>
              <v-spacer />
              {{ i.name }}
              <v-spacer />
            </v-card-title>

            <v-card-text>
              <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <br/>
      <br/>
      <h2>Доставка та Оплата</h2>
      <br/>

      <p class="text-left">
        Способи, порядок і терміни доставки товарів вказані на сайті в розділі
        «Доставка та оплата». Порядок і умови доставки замовленого товару
        Покупець погоджує з оператором інтернет-маркету в момент оформлення
        покупки
      </p>

      <p>Самовивіз товару:</p>

      <p class="text-left">
        Після формування заявки покупець може розрахуватися і отримати свій
        товар за адресою: Київська обл., село Софіївська Борщагівка, вул
        Райдужна 100 в будні з 09 до 18:00 (за умови навяності товару за
        попередньою домовленістю зі співробітником магазину).
      </p>

      <p class="text-left">
        Право власності та ризик випадкової втрати або пошкодження товару
        переходить до Замовника або його Представнику з моменту отримання товару
        шляхом і підписання Сторонами товарного чека та/або замовлення (та/або
        доручення на придбання і доставку товару) на доставку.
      </p>

      <p class="text-left">
        Доставка товару здійснюється власними силами співробітниками
        інтернет-маркету згідно з умовами доставки, або із залученням третіх
        осіб (перевізника).
      </p>

      <p class="text-left">
        При отриманні товару Замовник повинен у присутності представника кур'єра
        перевірити відповідність Товару якісним і кількісним характеристикам,
        (найменування товару, кількість, комплектність, термін придатності).
      </p>

      <p class="text-left">
        Замовник або Представник Замовника під час приймання товару підтверджує
        своїм підписом в товарному чеку та/або замовленні на доставку товарів,
        що не має претензій до кількості товару, зовнішнім виглядом і
        комплектності товару.
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    Main: [],
  }),
  created() {
    this.MainGroup();
  },
  methods: {
    async MainGroup() {
      const response = await this.$api.auth.getApi("/main-group-list/p");
      let Parent = response.data.data;
      this.Main = Parent;
    },
    SubGroup(id) {
      this.$router.push({ name: "SubGroup", query: { id: id } });
    },
  },
};
</script>
