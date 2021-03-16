<template>
  <div class="news-tile-wrapper">
    <v-card height='100%' color='blue'
      :class="[
        { 'dark-card' : $vuetify.theme.dark },
        { 'news-tile': true }]"
      >
      <div class="tile-toolbar d-flex justify-space-between">
        <link-to label="edit" @on-read="handleTitle(item)" />
        <link-to label="read more" @on-read="handleLink(item)" />
      </div>
      <v-card-title>
        {{item.title}}
      </v-card-title>
      <v-img v-if='item.urlToImage' :src='item.urlToImage' @load="onLoad"></v-img>
      <v-card-text>{{item.description}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LinkTo from '@/components/common/LinkTo.vue';

export default {
  name: 'NewsTile',
  components: { LinkTo },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    dialog: true,
  }),
  mounted() {
    this.onLoad();
  },
  computed: {
    ...mapGetters({
      submittedTitle: 'news_tile/GET_TITLE',
      activeNews: 'news_tile/GET_ACTIVE_NEWS',
    }),
  },
  created() {
    this.$emit('isLoaded');
    this.onLoad();
  },
  watch: {
    'item.title': function (newVal) {
      if (newVal) {
        this.onLoad();
      }
    },
  },
  methods: {
    async onLoad() {
      await this.sleep(950);
      this.$redrawVueMasonry();
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    handleTitle(item) {
      this.$store.dispatch('pop_gallery/HEADER_TTL', true);
      this.$store.commit('news_tile/SET_ACTIVE_NEWS', item);
    },
    handleLink(item) {
      this.$router.push({ name: 'single-news', params: { id: item.title, data: item } });
    },
  },
};
</script>
<style lang="scss">
  @import '@/scss/partials/news-tile.scss';
</style>
