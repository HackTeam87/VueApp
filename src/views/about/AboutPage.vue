<template>
  <div class="main">
    <h1 class="heading">Про компанію</h1>
    <v-container>
      <v-row  >
        <v-col sm7>

          <v-img
              height="98%"
              width="100%"
              src="@/assets/img/about/team.webp"
          ></v-img>

        </v-col>
        <v-col sm5>
          <v-list>
            <v-list-item>
              <p class="text-sm-left subtitle-1">
                Наша компанія інтернет-провайдер <span class="subtitle-2 text-uppercase heading">«ГОЛДЕННЕТ»</span> з
                2018 року
                розвивається так само стрімко та швидко,
                як і швидкість інтернету, що ми пропонуємо.
                Наша молода компанія працює лише з високоосвіченими фахівцями
                та сертифікованим обладнанням відомих світових брендів.
              </p>
            </v-list-item>

            <v-list-item>
              <p class="text-sm-left title">
                Послуги, якими Ви можете скористатися в нашій компанії:
              </p>
            </v-list-item>
            <v-list-item>
              <p class="text-sm-left subtitle-1 text-uppercase">
                • Підключення високошвидкісного Інтернету + телебачення;
              </p>
            </v-list-item>
            <v-list-item>
              <p class="text-sm-left subtitle-1 text-uppercase">
                • Встановлення та обслуговування аудіо- та відеодомофонів;
              </p>
            </v-list-item>
            <v-list-item>
              <p class="text-sm-left subtitle-1 text-uppercase">
                • Оснащення програмою «Розумний будинок»,
                «Розумний ключ», «Фейсайді» ( в доступ в під’їзд по розпізнаванню по обличу)
              </p>
            </v-list-item>
            <v-list-item>
              <p class="text-sm-left subtitle-1 text-uppercase">
                • Відеонагляд та системи безпеки ( будинків, квартир, комерційних приміщень і т. д.)
              </p>
            </v-list-item>
            <br>
            <v-list-item>
              <p class="text-sm-left subtitle-1">
                Наша компанія не знає, що таке «стоп розвиток», саме тому ми постійно розвиваємося,
                співпрацюємо з кращими спеціалістами та фахівцями,
                слідкуємо за новинками у сфері техніки, яка обов’язково має сертифікати якості.
              </p>
            </v-list-item>
          </v-list>

        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h4 class="heading  ">ЧОМУ ВАРТО ОБРАТИ «ГОЛДЕННЕТ»?</h4>
      <v-timeline :reverse="reverse" dense>
        <v-timeline-item>
          <v-card class="elevation-5">
            <v-card-text class="title">
              За свою продуктивну працю ми встигли зарекомендувати себе як надійний партнер,
              з яким співпрацюють великі відомі компанії України.
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>

    <v-container>
      <h4 class="heading text-uppercase">ОБИРАЮЧИ НАС ВИ ОТРИМУЄТЕ:</h4>
      <v-timeline dense>
        <v-timeline-item>
          <v-card class="elevation-1">

            <v-card-text class="subtitle-2 text-uppercase">
              доступні ціни;
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <v-timeline dense>
        <v-timeline-item>
          <v-card class="elevation-2">

            <v-card-text class="subtitle-2 text-uppercase">
              високу якість послуг та сервісу;
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <v-timeline dense>
        <v-timeline-item>
          <v-card class="elevation-2">

            <v-card-text class="subtitle-2 text-uppercase">
              індивідуальний підхід до кожного клієнта;
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <v-timeline dense>
        <v-timeline-item>
          <v-card class="elevation-2">

            <v-card-text class="subtitle-2 text-uppercase">
              високошвидкісний інтернет у Києві та не тільки;
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <v-timeline dense>
        <v-timeline-item>
          <v-card class="elevation-2">

            <v-card-text class="subtitle-2 text-uppercase">
              швидку реакцію на Ваші звернення, заявки, пропозиції.
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>

    </v-container>

  </div>
</template>


<script>
export default {
  data: () => ({
    reverse: true,
  }),
}
</script>


<style scoped>

.heading {
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  letter-spacing: .2rem;
  text-align: center;
  color: #002244;
  text-shadow: 0 3px 0 #fec422;
}

.main {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

a {
  text-decoration: none;
  color: #ffffff;
}

a:hover {
  opacity: 0.8;
}
</style>