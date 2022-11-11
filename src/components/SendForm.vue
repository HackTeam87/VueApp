<template>
  <div>
    <v-container>
      <notifications group="foo" />
      <v-btn
        block
        class="my-btn py-sm-5 title rounded-xl"
        @click="dialog = true"
      >
        Підключитись
      </v-btn>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="#002244" class="nav-line">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items> </v-toolbar-items>
          </v-toolbar>

          <v-container>
            <v-subheader class="headline">Надіслати</v-subheader>
            <v-form lazy-validation ref="form">
              <!--              <input type="hidden" name="_token" :value="csrf">-->
              <v-text-field
                prepend-icon="mdi-account-edit"
                label="Ім'я"
                v-model="user_name"
                :rules="inputRules"
                placeholder="Ім'я, По Батькові"
                renquired
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-phone-in-talk"
                label="Телефон"
                v-model="user_phone"
                :rules="inputRules"
                placeholder="+380"
                required
              ></v-text-field>
              <v-select
                prepend-icon="mdi-message-draw"
                :items="message_items"
                v-model="message"
                item-text="name"
                item-value="value"
              ></v-select>

              <v-btn
                block
                @click="submitForm()"
                class="my-btn py-sm-5 title rounded-xl"
              >
                Надіслати
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    </v-container>

    <v-container fluid grid-list-md class="text-center">
      <v-divider></v-divider>
      <v-layout row wrap>
        <v-card-text style="color: #002244">
          <a
            href="https://mag.golden.net.ua/static/docs/offer.pdf"
            target="_blank"
            style="text-decoration: none; font-size: 0.85em"
          >
            Договір публічної оферти
          </a>

          <br />
          <a
            href="https://mag.golden.net.ua/static/docs/privat_policy.pdf"
            style="text-decoration: none; font-size: 0.85em"
            target="_blank"
          >
            Політика конфіденційності персональних даних
          </a>
          <br />

          2018 - {{ new Date().getFullYear() }}
          <strong>GoldeNNet <span>© All rights reserved</span></strong>
          <br />
          info@golden.net.ua
          <v-btn
            class="mx-4"
            style="color: #002244"
            icon
            href="mailto: info@golden.net.ua"
            target="_blank"
          >
            <v-icon size="24px"> mdi-email-send-outline </v-icon>
          </v-btn>
          noc@golden.net.ua

          <br />
          <v-btn
            v-for="(icon, index) in social"
            :key="index"
            class="mx-4"
            style="color: #002244"
            icon
            :href="icon.link"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon.title }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
let send_message = new Audio(
  require("@/assets/music/success-sound-effect.mp3")
);
export default {
  data: () => ({
    dialog: false,
    //csrf token
    csrf: "",
    inputRules: [(v) => v.length >= 3 || "Не вистачає символів"],
    user_name: "",
    user_phone: "",
    message: "Підключення",
    message_items: [
      { name: "Підключення", value: "Підключення" },
      { name: "Зміна тарифу", value: "Зміна тарифу" },
      { name: "Фінансові питання", value: "Фінансові питання" },
      {
        name: "Про роботу підрозділу / співробітника компанії",
        value: "Про роботу підрозділу / співробітника компанії",
      },
      { name: "Інше", value: "Інше" },
    ],
    social: [
      {
        title: "mdi-facebook",
        link: "https://www.facebook.com/Goldennet-104002168883904/",
      },
      { title: "mdi-instagram", link: "https://instagram.com/golden.net.ua" },
    ],
  }),
  methods: {
    submitForm() {
      send_message.play();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (this.$refs.form.validate()) {
        this.dialog = false;
        axios
          .post(
            "https://mag.golden.net.ua/api/question",
            {
              name: this.user_name,
              phone: this.user_phone,
              message: this.message,
            },
            config
          )
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
        this.$notify({
          group: "foo",
          title: "Дякую",
          text: "Ми зателефонуємо Вам найближчим часом",
        });
        this.user_name = "";
        this.user_phone = "";
        this.message = "";
      } else {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Помилка",
          text: "заповніть форму",
        });
      }
    },
  },
  mounted() {
    axios.get("https://mag.golden.net.ua/api/csrf/cookie").then(
      (response) => {
        // console.log(response.data.csrfToken);
        axios.defaults.headers.common["X-CSRF-TOKEN"] = response.data.csrfToken;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

