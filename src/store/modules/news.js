import backend from '@/backend';

export const getters = {
  GET_NEWS(state) {
    return state.news;
  },
  GET_LOADING(state) {
    return state.loading;
  },
};

export const mutations = {
  SET_NEWS(state, payload) {
    state.news = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

export const actions = {
  async FETCH_NEWS(ctx, filter) {
    ctx.commit('SET_LOADING', true);
    const data = await backend.news.fetchNews(filter);
    ctx.commit('SET_NEWS', data.articles);
    ctx.commit('SET_LOADING', false);
  },
};

export const state = () => ({
  news: [],
  loading: false,
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
