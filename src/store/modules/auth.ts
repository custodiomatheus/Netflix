import * as user from "@/service/user";

interface AuthState {
  token: string;
  // id: number | undefined;
  // token: string | undefined;
  // flat: Flat | undefined;
}

const state: AuthState = {
  token: "",
};

const getters = {
  getToken: (state: AuthState) => state.token,
};

const mutations = {
  SET_TOKEN(state: AuthState, { token }: { token: string }) {
    state.token = token;
  },
};

const actions = {
  async handleLogin(
    { commit }: { commit: any },
    { userEmail, userPassword }: { userEmail: string; userPassword: string }
  ) {
    const response = await user.userLogin({ userEmail, userPassword });

    if (response) {
      commit("SET_TOKEN", { token: response });
    }

    return response;
  },
};

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state,
};
