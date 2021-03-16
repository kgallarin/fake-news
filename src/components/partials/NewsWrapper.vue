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
import NewsTile from './NewsTile.vue';

export default {
  name: 'NewsWrapper',
  props: {
    news: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: { NewsTile },
  methods: {
    isLoaded() {
      this.localLoaded = false;
    },
  },
};
</script>
<style lang="scss">
  @import '@/scss/partials/news-wrapper.scss';
</style>
