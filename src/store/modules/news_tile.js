export const getters = {
  GET_TITLE(state) {
    return state.htitle;
  },
  GET_ACTIVE_NEWS(state) {
    return state.activeNews;
  },
};

export const mutations = {
  SET_TITLE(state, payload) {
    state.activeNews.title = payload;
  },
  SET_ACTIVE_NEWS(state, payload) {
    state.activeNews = payload;
  },
};

export const actions = {
  async EDIT_TITLE(ctx, payload) {
    ctx.commit('SET_TITLE', payload);
    const activeItem = ctx.rootGetters['news_tile/GET_ACTIVE_NEWS'];
    const allNews = ctx.rootGetters['news/GET_NEWS'];
    const updatedItems = allNews.map((el) => (el.title === activeItem.title ? activeItem : el));
    ctx.commit('news/SET_NEWS', updatedItems, { root: true });
  },
};

export const state = () => ({
  htitle: '',
  activeNews: {},
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
