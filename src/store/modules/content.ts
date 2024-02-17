import { Trending } from "@/types/TmdbType";

interface ContentState {
  trendings: Trending[];
}

const state: ContentState = {
  trendings: [],
};

const getters = {
  getTrendings: (state: ContentState) => state.trendings,
};

const mutations = {
  SET_TRENDINGS(state: ContentState, { trendings }: { trendings: [] }) {
    state.trendings = trendings;
  },
};

const actions = {};

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state,
};
