export const getters = {
  GET_HEADER_TTL(state) {
    return state.headerTtl;
  },
};

export const mutations = {
  SET_HEADER_TTL(state, payload) {
    state.headerTtl = payload;
  },
};

export const actions = {
  async HEADER_TTL(ctx, show) {
    ctx.commit('SET_HEADER_TTL', show);
  },
};

export const state = () => ({
  headerTtl: false,
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
