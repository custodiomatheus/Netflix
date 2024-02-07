import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import auth from "./modules/auth";

const vuexLocal = new VuexPersistence({
  key: "__vuetflix",
  storage: window.localStorage,
});

export default createStore({
  modules: { auth },
  plugins: [vuexLocal.plugin],
});
