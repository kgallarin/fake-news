<template>
  <v-container fluid>
    <div v-if="loading" class="spinner">
      <v-progress-circular
        :width="3"
        color="red"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-row v-masonry>
      <v-col v-for='(data, index) in news' transition-duration="0" :key='index' cols='12' sm='3'>
        <news-tile v-masonry-tile transition-duration="0" :item="data" />
      </v-col>
    </v-row>
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
  methods: {
    isLoaded() {
      this.localLoaded = false;
    },
  },
  created() {
    this.$store.dispatch('news/FETCH_NEWS', {
      q: 'latest',
    });
  },
};
</script>
<style lang="scss">
  @import '@/scss/partials/news-wrapper.scss';
</style>
