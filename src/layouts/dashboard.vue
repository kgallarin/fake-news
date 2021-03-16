<template>
  <div class="dashboard-layout">
    <nav-bar />
    <v-navigation-drawer class="side-drawer" app>
      <v-divider></v-divider>
        <me class="mb-3" />
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content @click="handleHistory">
            <v-list-item-title>History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
  methods: {
    handleHistory() {
      this.$router.push({ name: 'history' });
    },
  },
};
</script>
<style lang="scss">
 @import '@/scss/common/side-drawer.scss';
</style>
