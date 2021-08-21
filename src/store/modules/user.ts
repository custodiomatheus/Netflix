import { User } from "../../types/UserType"; 

export default {
  namespaced: true,
  state: {
    id: undefined as number | undefined,
    nickname: undefined as string | undefined,
  } as User,
  getters: {
    getUserId(state: User): number | undefined {
      return state.id;
    },

    getUserNickname(state: User): string | undefined {
      return state.nickname;
    },
  },
  mutations: {
    setUserId(state: User, newState: number): void {
      state.id = newState;
    },

    setUserNickname(state: User, newState: string): void {
      state.nickname = newState;
    },
  },
  actions: {
    ActionSetUserId(context: any, value: number): void {
      context.commit("setId", value);
    },

    ActionSetUserNickname(context: any, value: string): void {
      context.commit("setNickname", value);
    },
  },
};
