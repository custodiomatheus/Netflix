import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import auth from "./modules/auth";
import content from "./modules/content";

const vuexLocal = new VuexPersistence({
  key: "__vuetflix",
  storage: window.localStorage,
});

export default createStore({
  modules: { auth, content },
  plugins: [vuexLocal.plugin],
});
