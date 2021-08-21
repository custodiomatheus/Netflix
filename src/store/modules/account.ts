interface Account {
  id: number | undefined;
  token: string | undefined;
}

export default {
  namespaced: true,
  state: {
    token: undefined as string | undefined,
    id: undefined as number | undefined,
  } as Account,
  getters: {
    getToken(state: Account): string | undefined {
      return state.token;
    },

    getId(state: Account): number | undefined {
      return state.id;
    },
  },
  mutations: {
    setToken(state: Account, newState: string): void {
      state.token = newState;
    },

    setId(state: Account, newState: number): void {
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
