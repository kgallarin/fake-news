<template>
  <v-container fluid>
    <v-row v-masonry>
      <v-col v-for='(data, index) in items' transition-duration="0" :key='index' cols='12' sm='3'>
        <news-tile @isLoaded="handleLoading" :item="data" :loading="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsTile from './NewsTile.vue';

export default {
  name: 'NewsWrapper',
  components: { NewsTile },
  data: () => ({
    loading: true,
  }),
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleLoading() {
      this.loading = false;
    },
  },
};
</script>
