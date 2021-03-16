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
      <v-col v-for='(data, index) in sources' transition-duration="0" :key='index' cols='12' sm='3'>
        <source-tile v-masonry-tile transition-duration="0" :item="data" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SourceTile from './SourceTile.vue';

export default {
  name: 'SourceWrapper',
  props: {
    sources: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: { SourceTile },
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
