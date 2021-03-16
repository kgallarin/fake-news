import backend from '@/backend';

export const getters = {
  GET_NEWS(state) {
    return state.news;
  },
  GET_LOADING(state) {
    return state.loading;
  },
  GET_FILTER(state) {
    return state.filter;
  },
};

export const mutations = {
  SET_NEWS(state, payload) {
    state.news = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  SET_FILTER(state, payload) {
    state.filter = payload;
  },
};

export const actions = {
  async FETCH_NEWS(ctx, filter) {
    ctx.commit('SET_LOADING', true);
    try {
      const data = await backend.news.fetchNews(filter);
      ctx.commit('SET_NEWS', data.articles);
    } catch (e) {
      ctx.commit('app/SET_ERROR', e.message, { root: true });
    } finally {
      ctx.commit('SET_LOADING', false);
    }
  },
  async SET_FILTER(ctx, payload) {
    ctx.commit('SET_FILTER', payload);
  },
};

export const state = () => ({
  news: [],
  filter: '',
  loading: false,
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
