export const getters = {
  GET_HISTORY(state) {
    return state.history;
  },
  GET_LOADING(state) {
    return state.loading;
  },
};

export const mutations = {
  SET_HISTORY(state, payload) {
    state.history.push(payload);
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

export const actions = {
  async ADD_HISTORY(ctx, payload) {
    ctx.commit('SET_LOADING', true);
    try {
      await ctx.commit('SET_HISTORY', payload);
    } catch (e) {
      ctx.commit('app/SET_ERROR', e.message, { root: true });
    } finally {
      ctx.commit('SET_LOADING', false);
    }
  },
};

export const state = () => ({
  history: [],
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
