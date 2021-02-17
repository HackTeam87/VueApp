<template>
  <v-container >
    <v-row justify="space-around">
      <v-col cols="5">
        <div class="title mb-1">
          Default (cover)
        </div>
        <div class="subheading">
          Matching
        </div>
        <v-img
          src="@/assets/img/partners/custom_shop.webp"
          aspect-ratio="1.7"
        ></v-img>
        <div class="subheading pt-4">
          Too high
        </div>
        <v-img
          src="@/assets/img/partners/cygnet.webp"
          aspect-ratio="2"
        ></v-img>
        <div class="subheading pt-4">
          Too low
        </div>
        <v-img
          src="@/assets/img/partners/fozzy-logo.webp"
          aspect-ratio="1.4"
        ></v-img>
      </v-col>

      <v-col cols="5">
        <div class="title mb-1">
          Contain
        </div>
        <div class="subheading">
          Matching
        </div>
        <v-img
          src="@/src/assets/img/partners/onehouse_logo.webp"
          aspect-ratio="1.7"
          contain
        ></v-img>
        <div class="subheading pt-4">
          Too high
        </div>
        <v-img
          src="@/assets/img/partners/papafeta.webp"
          aspect-ratio="2"
          contain
        ></v-img>
        <div class="subheading pt-4">
          Too low
        </div>
        <v-img
          src="@/assets/img/partners/roda.webp"
          aspect-ratio="1.4"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>