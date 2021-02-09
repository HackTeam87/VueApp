<template>
  <div class="main">
    <h1 class="heading">Про компанію</h1>
    <v-container>
      <v-switch
      v-model="reverse"
      label="Toggle reverse"
    ></v-switch>
    <v-timeline
      :reverse="reverse"
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="n in 2"
        :key="n"
      >
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            Lorem ipsum
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline
      :reverse="reverse"
      dense
    >
      <v-timeline-item
        v-for="n in 2"
        :key="n"
      >
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            Lorem ipsum
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-card-text class=" indigo white--text pt-0">
        Інтернет провайдер <span>GoldeNNet</span> успішно працює на ринку послуг
        доступу в Інтернет з 2018 року.
        Висока якість послуг і сервісу, доступні ціни, а також індивідуальний підхід до кожного
        клієнта, дозволили компанії <span>GoldeNNet</span> завоювати довіру широкого
        кола
        користувачів мережі Інтернет і знайти репутацію надійного та вигідного партнера по бізнесу.
      </v-card-text>
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