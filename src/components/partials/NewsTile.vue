<template>
  <v-card height='100%' color='blue' class='pt-1 pb-1'>
    <template v-if="!loading">
      <v-card-title>{{item.title}}</v-card-title>
      <v-img :src='item.img' @load="onLoad"></v-img>
      <v-card-text>{{item.text}}</v-card-text>
    </template>
    <template v-else>
      <p>loading ...</p>
    </template>
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
