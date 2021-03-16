<template>
  <div class="news-tile-wrapper">
    <v-card height='100%' color='blue'
      :class="[
        { 'dark-card' : $vuetify.theme.dark },
        { 'news-tile': true }]"
      @click="handleSource(item)"
      >
      <v-card-title>
        {{item.name}}
      </v-card-title>
      <v-card-title>
        Language: {{item.language}}
      </v-card-title>
      <v-card-text>{{item.description}}</v-card-text>
      <v-card-text>
        <a :href="item.url">{{item.url}}</a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SourceTile',
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
  created() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      await this.sleep(950);
      this.$redrawVueMasonry();
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async handleSource(item) {
      await this.$store.dispatch('sources/SELECT_SOURCE', item);
      this.$router.push({ name: 'sources-single', params: { id: item.id } });
    },
  },
};
</script>
<style lang="scss">
  @import '@/scss/partials/news-tile.scss';
</style>
