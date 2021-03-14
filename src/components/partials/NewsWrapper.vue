<template>
  <v-container fluid>
    <v-row v-masonry>
      <v-col v-for='(data, index) in news' transition-duration="0" :key='index' cols='12' sm='3'>
        <news-tile :item="data" />
      </v-col>
    </v-row>
    <div v-if="loading">asd</div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsTile from './NewsTile.vue';

export default {
  name: 'NewsWrapper',
  components: { NewsTile },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      news: 'news/GET_NEWS',
      loading: 'news/GET_LOADING',
      filter: 'news/GET_FILTER',
    }),
  },
  created() {
    this.$store.dispatch('news/FETCH_NEWS', {
      q: 'latest',
    });
  },
};
</script>
