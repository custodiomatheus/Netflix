interface account {
  id: number | undefined;
  token: string | undefined ;
}

export default {
  namespaced: true,
  state: {
    token: undefined as string | undefined,
    id: undefined as number | undefined,
  } as account,
  getters: {
    getToken(state: account): string | undefined {
      return state.token;
    },

    getId(state: account): number | undefined {
      return state.id;
    },
  },
  mutations: {
    setToken(state: account, newState: string): void {
      state.token = newState;
    },

    setId(state: account, newState: number): void {
      state.id = newState;
    },
  },
  actions: {
    ActionSetToken(context: any, value: string): void {
      context.commit("setToken", value);
    },

    ActionSetId(context: any, value: number): void {
      context.commit("setId", value);
    },
  },
};
