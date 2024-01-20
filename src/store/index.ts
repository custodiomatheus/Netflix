// TODO: PERSISTIR ESTADO
import { createStore } from "vuex";
// import VuexPersistence from "vuex-persist";

import auth from "./modules/auth";
// import user from "./modules/user";
// import show from "./modules/show";

// // const vuexLocal = new VuexPersistence({
// //   // key: "__vuetflix",
// //   // modules: ["account"],
// //   // reducer: (state: any) => ({
// //   //   account: state.account,
// //   //   user: state.user,
// //   //   show: state.show,
// //   // }),
// //   // storage: window.localStorage,
// // });w

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

// export default createStore({
//   // modules: {
//   //   account,
//   //   // user,
//   //   // show,
//   // },
//   plugins: [vuexLocal.plugin],
// });

export default createStore({
  modules: {
    auth,
  },
});
