<template>
  <div>
    <v-app-bar
      app
      class="main-appbar">
      <v-icon v-if="hasHamburger" @click.stop="drawer = !drawer" class="mr-3">fas fa-bars</v-icon>
      <div @click.stop="routeHome" class="d-flex align-center app-bar-logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
        OEiNews
      </div>
      <v-spacer></v-spacer>
      <v-switch
        class="text"
        v-model="$vuetify.theme.dark"
        inset
        hide-details
      >
        <template #label>
          <v-icon>{{ !$vuetify.theme.dark ? 'far fa-moon' : 'fas fa-umbrella-beach' }}</v-icon>
        </template>
        <v-icon>fas fa-adjust</v-icon>
      </v-switch>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="side-drawer" app>
      <v-list dense nav>
        <v-list-item link @click="$router.push({ name: 'sources' })">
          <v-list-item-icon>
            <v-icon>mdi-source-branch</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sources</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$router.push({ name: 'history' })">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- vlist ends -->
      <v-divider></v-divider>
      <me class="mb-3" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Me from '@/components/partials/Me.vue';

export default {
  name: 'NavBar',
  props: {
    hasHamburger: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: true,
  }),
  components: {
    Me,
  },
  methods: {
    routeHome() {
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' });
      }
    },
  },
};
</script>
<style lang="scss">
 @import '@/scss/common/app-bar.scss';
</style>
