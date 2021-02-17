<template>
  <v-card id="create">
    <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="deep-orange accent-3" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-comment-multiple-outline</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green" to="/contact">
        <v-icon>mdi-google-maps</v-icon>
      </v-btn>
      <v-btn fab dark small color="light-blue accent-3" :href="'https://t.me/GoldenNetUaBot'">
        <v-icon> mdi-telegram</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-phone-incoming</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    direction: 'bottom',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: true,
    right: true,
    bottom: false,
    left: false,
    transition: 'slide-y-reverse-transition',
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case 'one':
          return {class: 'purple', icon: 'account_circle'}
        case 'two':
          return {class: 'red', icon: 'edit'}
        case 'three':
          return {class: 'green', icon: 'keyboard_arrow_up'}
        default:
          return {}
      }
    },
  },

}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: fixed;
  top: 70px;
  right: 15px;
  z-index: 999;
}

#create .v-btn--floating {

}
</style>