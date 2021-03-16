<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col cols='12' sm='4' >
        <div class="news-tile-wrapper">
          <link-to label="go back" @on-read="handleLink" />
          <v-card height='100%' color='blue'
            :class="[
              { 'dark-card' : $vuetify.theme.dark },
              { 'news-tile no-grad': true }]"
            >
            <v-img v-if='news.urlToImage' :src='news.urlToImage'></v-img>
            <v-card-title>
              {{news.title}}
            </v-card-title>
            <v-card-text>{{news.description}}</v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LinkTo from '@/components/common/LinkTo.vue';

export default {
  name: 'NewsSingle',
  components: { LinkTo },
  data: () => ({
    news: {},
  }),
  created() {
    this.news = this.$route.params.data;
  },
  methods: {
    handleLink() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss">
  @import '@/scss/pages/news-single.scss';
</style>
