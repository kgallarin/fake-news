<template>
  <div class="dashboard-layout">
    <nav-bar has-hamburger />
    <router-view />
    <pop-gallery />
    <v-alert v-if="error !== ''" class="error-flag" type="error" dismissible>
      {{error}}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '@/components/common/NavBar.vue';
import PopGallery from '@/components/common/PopGallery.vue';

export default {
  name: 'DashboardLayout',
  components: {
    NavBar,
    PopGallery,
  },
  computed: {
    ...mapGetters({
      error: 'app/GET_ERROR',
    }),
  },
  data: () => ({
    drawer: true,
  }),
};
</script>
<style lang="scss">
 @import '@/scss/common/side-drawer.scss';
</style>
