import { createApp } from "vue";
import { createPinia } from "pinia";

// BOOTSTRAP IMPORT
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import BootstrapVue from "bootstrap-vue-3";

import router from "./router/index.js";
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(BootstrapVue)
  .mount("#app");

// FONTAWESOME IMPORT

import "font-awesome/css/font-awesome.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();
