interface Show {
  type: string;
  id: number;
}

export default {
  namespaced: true,
  state: {
    type: "home",
    id: 0,
  } as Show,
  getters: {
    getShowType(state: Show): string {
      return state.type;
    },
    getShowId(state: Show): number {
      return state.id;
    },
  },
  mutations: {
    setShowType(state: Show, newState: string): void {
      state.type = newState;
    },
    setShowId(state: Show, newState: number): void {
      state.id = newState;
    },
  },
  actions: {
    ActionSetShowType(context: any, page: string): void {
      context.commit("setShowType", page);
    },
    ActionSetShowId(context: any, id: number): void {
      context.commit("setShowId", id);
    },
  },
};
