import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const requireContext = require.context('./modules', false, /.*\.js$/);
const modules = requireContext.keys()
  .map((file) => [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)])
  .reduce((reducedMod, [name, module]) => {
    reducedMod[name] = module.default || module; // eslint-disable-line no-param-reassign
    return reducedMod;
  }, {});

export default new Vuex.Store({
  modules,
  strict: debug,
  plugins: [],
});
