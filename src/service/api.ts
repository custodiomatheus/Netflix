import store from "@/store";
import axios from "axios";

const api = axios.create({
  baseURL: `http://${process.env.VUE_APP_ROOT_BASE_URL}`,
  timeout: 100000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data, header) => {
      const vuexAccount = store.state.account;
      const sessionStore = JSON.parse(sessionStorage.getItem("vuex") || "");
      let token = undefined;
      if (sessionStore) {
        token = sessionStore.account.token && vuexAccount.token;
      }
      if (token) {
        header["Authorization"] = `Bearer ${token}`;
      }

      return JSON.stringify(data);
    },
  ],
});

export default api;
