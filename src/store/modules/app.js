export const getters = {
  GET_LOADING(state) {
    return state.loading;
  },
};

export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

export const state = () => ({
  loading: false,
});

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
