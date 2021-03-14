<template>
  <v-card height='100%' color='blue' class='pt-1 pb-1'>
    <v-card-title>{{item.title}}</v-card-title>
    <v-img v-if='item.urlToImage' :src='item.urlToImage' @load="onLoad"></v-img>
    <v-card-text>{{item.description}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'NewsTile',
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
  mounted() {
    this.onLoad();
  },
  created() {
    this.$emit('isLoaded');
  },
  methods: {
    async onLoad() {
      await this.sleep(950);
      this.$redrawVueMasonry();
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>
