import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "@/libs/vee-validate";

const app = createApp(App);

app.use(store);
app.use(router);
// app.use(VueProgressiveImage);

app.mount("#app");
