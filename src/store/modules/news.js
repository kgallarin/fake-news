import backend from '@/backend';

function sampleData() {
  return [
    {
      id: 1,
      title: '1',
      img: 'https://picsum.photos/200/300',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 2,
      title: '2',
      img: 'https://picsum.photos/400/200',
      text: 'Lorem ipsum dolor.',
    },
    {
      id: 3,
      title: '3',
      img: 'https://picsum.photos/200/200',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
    },
    {
      id: 4,
      title: '4',
      img: 'https://picsum.photos/200/200',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
    },
    {
      id: 5,
      title: '5',
      img: 'https://picsum.photos/400/200',
      text: 'Lorem ipsum dolor.',
    },
    {
      id: 6,
      title: '6',
      img: 'https://picsum.photos/200/300',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];
}

export const getters = {
  GET_NEWS(state) {
    return state.news;
  },
};

export const mutations = {
  SET_NEWS(state, payload) {
    state.loading = payload;
  },
};

export const actions = {
  async FETCH_NEWS(ctx) {
    console.log(backend);
    const filter = {
      q: 'latest',
    };
    const { data } = await backend.news.fetchNews(filter);
    ctx.commit('SET_NEWS', data);
  },
};

export const state = () => ({
  news: sampleData(),
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
