<template>
  <v-container fluid>
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
  name: 'Home',
  components: { NewsWrapper },
  computed: {
    ...mapGetters({
      news: 'news/GET_NEWS',
      loading: 'news/GET_LOADING',
    }),
  },
  created() {
    this.$store.dispatch('news/FETCH_NEWS', {
      q: 'latest',
    });
  },
};
</script>
