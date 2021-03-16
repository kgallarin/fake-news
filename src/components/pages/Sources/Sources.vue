<template>
  <v-container fluid class="visit-history">
    <div :class="{'pl-3': sources.length}">
      <link-to label="go back to homepage" @on-read="$router.push({ name: 'home' })" />
    </div>
    <v-row>
      <v-col cols='12' sm='12'>
        <source-wrapper :sources="sources" :loading="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import LinkTo from '@/components/common/LinkTo.vue';
import SourceWrapper from '@/components/partials/SourceWrapper.vue';

export default {
  name: 'Sources',
  components: { LinkTo, SourceWrapper },
  computed: {
    ...mapGetters({
      sources: 'sources/GET_SOURCES',
      loading: 'sources/GET_LOADING',
    }),
  },
  created() {
    this.$store.dispatch('sources/FETCH_SOURCES');
  },
};
</script>
