import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import vuetify from './plugins/vuetify';
import router from './router/router';
import getAPI from './plugins/api';
import VueBreadcrumbs from 'vue-2-breadcrumbs';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false
Vue.use(getAPI)
Vue.use(Notifications)
Vue.use(VueBreadcrumbs)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCsCygeqW-mKj8K7iL9TMV8XojDLymPdsc",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
