import Sources from './Sources.vue';
import SourcesSingle from './SourcesSingle.vue';

export default [
  { path: '/sources', name: 'sources', component: Sources },
  { path: '/sources/:id', name: 'sources-single', component: SourcesSingle },
];
