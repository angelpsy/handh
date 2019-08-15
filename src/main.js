import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/utilities.scss";
import "@/assets/styles/common.scss";
import "normalize.css/normalize.css";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

// https://www.npmjs.com/package/vue2-google-maps
Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_MAPS_KEY,
        libraries: "places",
        language: "ru",
    },
});

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
