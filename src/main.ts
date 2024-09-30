import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./custom-styles.css";
import { createHead } from "@unhead/vue";

loadFonts();
const head = createHead();
createApp(App).use(router).use(vuetify).use(head).mount("#app");
