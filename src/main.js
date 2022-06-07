import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router/index.js";
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();