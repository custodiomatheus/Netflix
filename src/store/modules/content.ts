import { Trending, Tv, Movie } from "@/types/TmdbType";

interface ContentState {
  trendings: Trending[];
  searchResult: {
    results: Tv[] | Movie[];
    total_results: number;
  };
}

const state: ContentState = {
  trendings: [],
  searchResult: {
    results: [],
    total_results: 0,
  },
};

const getters = {
  getTrendings: (state: ContentState) => state.trendings,
  getSearchResult: (state: ContentState) => state.searchResult,
};

const mutations = {
  SET_TRENDINGS(state: ContentState, { trendings }: { trendings: [] }) {
    state.trendings = trendings;
  },

  SET_SEARCH_RESULT(state: ContentState, { searchResult }: { searchResult: { results: []; total_results: 0 } }) {
    state.searchResult = searchResult;
  },

  SET_SEARCH_RESULT_APPEND(state: ContentState, { results }: { results: [] }) {
    state.searchResult.results = [...state.searchResult.results, ...results];
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
