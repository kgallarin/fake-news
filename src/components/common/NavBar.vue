<template>
  <v-app-bar
    app
    class="main-appbar">
    <div @click.stop="routeHome" class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="40"
      />
      OeiNews
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
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({ }),
  methods: {
    routeHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
<style lang="scss">
 @import '@/scss/common/app-bar.scss';
</style>
