export const getters = {
  GET_ERROR(state) {
    return state.err_message;
  },
};

export const mutations = {
  SET_ERROR(state, payload) {
    state.err_message = payload;
  },
};

export const actions = {
  async ON_ERROR(ctx, payload) {
    ctx.commit('SET_ERROR', payload);
  },
};

export const state = () => ({
  err_message: '',
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
