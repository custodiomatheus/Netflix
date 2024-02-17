// TODO: REMOVER AS REQUESTS DAQUI E FAZER NO COMPONENT ACHO MELHOR USAR A STORE APENAS PARA GERENCIAMENTO DE ESTADO GLOBAL E NO COMPONENT FICA MELHOR DE LIDAR COM AS REQUESTS
import * as user from "@/service/user";
import { UserLoginCredentials, User } from "@/types/UserType";

interface AuthState {
  token: string;
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
  async handleLogin({ commit }: { commit: any }, { userEmail, userPassword }: UserLoginCredentials) {
    const response = await user.userLogin({ userEmail, userPassword });

    if (response) {
      commit("SET_TOKEN", { token: response });
    }

    return response;
  },

  async handleRegister({ commit }: { commit: any }, { userName, userEmail, userPassword }: User) {
    const response = await user.userRegister({ userName, userEmail, userPassword });

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
