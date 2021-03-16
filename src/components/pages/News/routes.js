import NewsSingle from './NewsSingle.vue';

export default [
  {
    path: '/single-news/:id',
    name: 'single-news',
    pathMatch: 'full',
    props: (route) => ({
      ...route.params,
    }),
    component: NewsSingle,
  },
];
