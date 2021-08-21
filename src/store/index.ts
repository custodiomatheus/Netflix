import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  reducer: (state: any) => ({
    account: state.account,
  }),
  storage: window.sessionStorage,
});

import account from "./modules/account";

export default createStore({
  modules: {
    account,
  },
  plugins: [vuexLocal.plugin],
});
