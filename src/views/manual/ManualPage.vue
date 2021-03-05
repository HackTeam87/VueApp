<template>
  <div>
    <h1 class="heading">Інструкції</h1>
    <v-container>

      <div class="text-center d-flex pb-4">
        <v-btn @click="all">
          <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
        </v-btn>
        <div>{{ panel }}</div>
        <v-btn @click="none">
          <v-icon>mdi-minus-circle-outline</v-icon>
        </v-btn>
      </div>
      <v-expansion-panels v-model="panel" multiple>
        
        <v-expansion-panel>
          <v-expansion-panel-header>Налаштування роутера TP-LINK {{ item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              1. Підключіть кабель підключення нашої мережі до порту WAN,
              а кабель вашого комп'ютера до одного з портів LAN.
              Мережева карта вашого комп'ютера повинна бути налаштована
              в автоматичному режимі отримання мережевих налаштувань.
            </p>
            <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link1.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link1.webp"
            ></v-img>
            <p>2. Відкрийте будь-який інтернет-браузер і в адресному рядку наберіть https://tplinklogin.net.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link2.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link2.webp"
            ></v-img>
            <p>
              3. Натисніть Enter, далі ви побачите запит введення логіна і пароля для входу в інтерфейс управління
              роутером. Введіть логін і пароль, натисніть на кнопку Вхід (за замовчуванням, логін: admin пароль: admin).
            </p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link3.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link3.webp"
            ></v-img>
            <p>4. Перейдіть в меню Network - WAN.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link4.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link4.webp"
            ></v-img>
            <p>5. Переконайтеся в тому, що WAN Connection Type встановлений в режим Dynamic IP.</p>
                <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link5.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link5.webp"
            ></v-img>
            <p>6. Перейдіть в меню Network - MAC Clone.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Налаштування роутера TOTOLINK {{ item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              1. Підключіть кабель підключення нашої мережі до порту WAN,
              а кабель вашого комп'ютера до одного з портів LAN.
              Мережева карта вашого комп'ютера повинна бути налаштована
              в автоматичному режимі отримання мережевих налаштувань.
            </p>
            <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link1.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link1.webp"
            ></v-img>
            <p>2. Відкрийте будь-який інтернет-браузер і в адресному рядку наберіть https://tplinklogin.net.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link2.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link2.webp"
            ></v-img>
            <p>
              3. Натисніть Enter, далі ви побачите запит введення логіна і пароля для входу в інтерфейс управління
              роутером. Введіть логін і пароль, натисніть на кнопку Вхід (за замовчуванням, логін: admin пароль: admin).
            </p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link3.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link3.webp"
            ></v-img>
            <p>4. Перейдіть в меню Network - WAN.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link4.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link4.webp"
            ></v-img>
            <p>5. Переконайтеся в тому, що WAN Connection Type встановлений в режим Dynamic IP.</p>
                <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link5.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link5.webp"
            ></v-img>
            <p>6. Перейдіть в меню Network - MAC Clone.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Налаштування роутера ASUS {{ item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              1. Підключіть кабель підключення нашої мережі до порту WAN,
              а кабель вашого комп'ютера до одного з портів LAN.
              Мережева карта вашого комп'ютера повинна бути налаштована
              в автоматичному режимі отримання мережевих налаштувань.
            </p>
            <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link1.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link1.webp"
            ></v-img>
            <p>2. Відкрийте будь-який інтернет-браузер і в адресному рядку наберіть https://tplinklogin.net.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link2.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link2.webp"
            ></v-img>
            <p>
              3. Натисніть Enter, далі ви побачите запит введення логіна і пароля для входу в інтерфейс управління
              роутером. Введіть логін і пароль, натисніть на кнопку Вхід (за замовчуванням, логін: admin пароль: admin).
            </p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link3.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link3.webp"
            ></v-img>
            <p>4. Перейдіть в меню Network - WAN.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link4.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link4.webp"
            ></v-img>
            <p>5. Переконайтеся в тому, що WAN Connection Type встановлений в режим Dynamic IP.</p>
                <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link5.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link5.webp"
            ></v-img>
            <p>6. Перейдіть в меню Network - MAC Clone.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Налаштування роутера D-LINK {{ item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              1. Підключіть кабель підключення нашої мережі до порту WAN,
              а кабель вашого комп'ютера до одного з портів LAN.
              Мережева карта вашого комп'ютера повинна бути налаштована
              в автоматичному режимі отримання мережевих налаштувань.
            </p>
            <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link1.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link1.webp"
            ></v-img>
            <p>2. Відкрийте будь-який інтернет-браузер і в адресному рядку наберіть https://tplinklogin.net.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link2.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link2.webp"
            ></v-img>
            <p>
              3. Натисніть Enter, далі ви побачите запит введення логіна і пароля для входу в інтерфейс управління
              роутером. Введіть логін і пароль, натисніть на кнопку Вхід (за замовчуванням, логін: admin пароль: admin).
            </p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link3.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link3.webp"
            ></v-img>
            <p>4. Перейдіть в меню Network - WAN.</p>
             <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link4.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link4.webp"
            ></v-img>
            <p>5. Переконайтеся в тому, що WAN Connection Type встановлений в режим Dynamic IP.</p>
                <v-img
                lazy-src="@/assets/img/manual/tp-link/tp-link5.webp"
                max-height="750"
                max-width="550"
                src="@/assets/img/manual/tp-link/tp-link5.webp"
            ></v-img>
            <p>6. Перейдіть в меню Network - MAC Clone.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      items: 5,
    }
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    // Reset the panel
    none() {
      this.panel = []
    },
  },
}
</script>
