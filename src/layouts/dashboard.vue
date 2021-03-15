<template>
  <div class="dashboard-layout">
    <nav-bar />
    <v-navigation-drawer class="side-drawer" app>
      <me />
    </v-navigation-drawer>
    <router-view />
    <pop-gallery />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue';
import Me from '@/components/partials/Me.vue';
import PopGallery from '@/components/common/PopGallery.vue';

export default {
  name: 'DashboardLayout',
  components: {
    NavBar,
    Me,
    PopGallery,
  },
};
</script>
<style lang="scss">
 @import '@/scss/common/side-drawer.scss';
</style>
