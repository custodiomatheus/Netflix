import { Flat } from "@/types/FlatType";
interface Account {
  id: number | undefined;
  token: string | undefined;
  flat: Flat | undefined;
}

export default {
  namespaced: true,
  state: {
    token: undefined as string | undefined,
    id: undefined as number | undefined,
    flat: undefined as Flat | undefined,
  } as Account,
  getters: {
    getToken(state: Account): string | undefined {
      return state.token;
    },

    getId(state: Account): number | undefined {
      return state.id;
    },

    getFlat(state: Account): Flat | undefined {
      return state.flat;
    },
  },
  mutations: {
    setToken(state: Account, newState: string): void {
      state.token = newState;
    },

    setId(state: Account, newState: number): void {
      state.id = newState;
    },

    setFlat(state: Account, newState: Flat): void {
      state.flat = newState;
    },

    resetAccount(state: Account): void {
      state.id = undefined;
      state.token = undefined;
      state.flat = undefined;
    }
  },
  actions: {
    ActionSetToken(context: any, value: string): void {
      context.commit("setToken", value);
    },

    ActionSetId(context: any, value: number): void {
      context.commit("setId", value);
    },

    ActionSetFlat(context: any, value: Flat): void {
      context.commit("setFlat", value);
    },

    ActionResetAccount(context: any): void {
      context.commit("resetAccount");
    }
  },
};
