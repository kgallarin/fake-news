import backend from '@/backend';

export const getters = {
  GET_SOURCES(state) {
    return state.sources;
  },
  GET_LOADING(state) {
    return state.loading;
  },
  GET_SELECTED_SOURCE(state) {
    return state.selectedSource;
  },
};

export const mutations = {
  SET_SOURCES(state, payload) {
    state.sources = payload;
  },
  SET_SELECTED_SOURCE(state, payload) {
    state.selectedSource = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

export const actions = {
  async FETCH_SOURCES(ctx) {
    ctx.commit('SET_LOADING', true);
    try {
      const { sources } = await backend.news.fetchSources();
      ctx.commit('SET_SOURCES', sources);
    } catch (e) {
      console.log(e);
      ctx.commit('app/SET_ERROR', e.message, { root: true });
    } finally {
      ctx.commit('SET_LOADING', false);
    }
  },
  async SELECT_SOURCE(ctx, payload) {
    ctx.commit('SET_LOADING', true);
    try {
      ctx.commit('SET_SELECTED_SOURCE', payload);
    } catch (e) {
      ctx.commit('app/SET_ERROR', e, { root: true });
    } finally {
      ctx.commit('SET_LOADING', false);
    }
  },
};

export const state = () => ({
  sources: [],
  selectedSource: {},
  loading: false,
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
