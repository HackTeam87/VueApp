<template>
  <div class="main">
    <h1 class="heading">Безпека</h1>
    <v-container grid-list-md>
      <v-layout row wrap>

        <v-flex d-flex sm3>
          <v-card hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security/video/surveillance">
            <v-card-title class="font-weight-medium  headline">Відеоспостереження</v-card-title>
            <v-img class="white--text align-end" height="150px"
                   src="@/assets/img/security_page/cctv.webp">
            </v-img>
            <v-card-text>
              <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex sm3>
          <v-card hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security/access/control">
            <v-card-title class="font-weight-medium  headline">Контроль доступу</v-card-title>
            <v-img class="white--text align-end" height="150px"
                   src="@/assets/img/security_page/exit-control.webp">
            </v-img>
            <v-card-text>
              <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex sm3>
          <v-card hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security/alarm/security">
            <v-card-title class="font-weight-medium  headline">Cигналізація</v-card-title>
            <v-img class="white--text align-end" height="150px"
                   src="@/assets/img/security_page/new-security.webp">
            </v-img>
            <v-card-text>
              <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex sm3>
          <v-card hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security/project/project">
            <v-card-title class="font-weight-medium  headline">Реалізовані проекти</v-card-title>
            <v-img class="white--text align-end" height="150px"
                   src="@/assets/img/security_page/project.webp">
            </v-img>
            <v-card-text>
              <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

