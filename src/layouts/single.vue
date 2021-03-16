<template>
  <div class="dashboard-layout">
    <nav-bar />
    <v-container fill-height fluid>
      <router-view />
    </v-container>
    <pop-gallery />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue';
import PopGallery from '@/components/common/PopGallery.vue';

export default {
  name: 'DashboardLayout',
  components: {
    NavBar,
    PopGallery,
  },
};
</script>
