import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import account from "./modules/account";
import user from "./modules/user";

const vuexLocal = new VuexPersistence({
  reducer: (state: any) => ({
    account: state.account,
    user: state.user
  }),
  storage: window.sessionStorage,
});

export default createStore({
  modules: {
    account,
    user,
  },
  plugins: [vuexLocal.plugin],
});
