<template>
  <v-container fluid class="visit-history">
    <div :class="{'pl-3': news.length}">
      <link-to label="go back to homepage" @on-read="$router.push({ name: 'home' })" />
    </div>
    <v-row>
      <v-col v-if="news.length" cols='12' sm='12'>
        <news-wrapper :news="news" :loading="loading" />
      </v-col>
      <v-col cols='12' sm='12' v-else>
        No recent news.
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsWrapper from '@/components/partials/NewsWrapper.vue';
import LinkTo from '@/components/common/LinkTo.vue';

export default {
  name: 'History',
  components: { NewsWrapper, LinkTo },
  computed: {
    ...mapGetters({
      news: 'history/GET_HISTORY',
      loading: 'history/GET_LOADING',
    }),
  },
};
</script>
