<template>
  <v-app>
    <v-main>
      <nav-bar />
      <home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/pages/Home.vue';
import NavBar from './components/common/NavBar.vue';

export default {
  name: 'App',
  components: {
    Home,
    NavBar,
  },
  mounted() {
    console.log(process.env.VUE_APP_API_KEY);
    this.$store.dispatch('news/FETCH_NEWS');
  },
};

</script>
