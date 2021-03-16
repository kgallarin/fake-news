<template>
  <v-container fluid>
    <div :class="{'pl-10': selectedSource.length}">
      <h3>Source: {{ selectedSource.id }}</h3>
    </div>
    <v-row>
      <v-col cols='12' sm='12' >
        <news-wrapper :news="news" :loading="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsWrapper from '@/components/partials/NewsWrapper.vue';

export default {
  name: 'SourcesSingle',
  components: { NewsWrapper },
  computed: {
    ...mapGetters({
      news: 'news/GET_NEWS',
      loading: 'news/GET_LOADING',
      selectedSource: 'sources/GET_SELECTED_SOURCE',
    }),
  },
  mounted() {
    this.$store.dispatch('news/FETCH_NEWS', {
      sources: this.selectedSource.id,
    });
  },
  beforeDestroy() {
    this.$store.dispatch('sources/SELECT_SOURCE', {});
  },
};
</script>
