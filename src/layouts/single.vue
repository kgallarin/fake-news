<template>
  <div class="dashboard-layout">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue';

export default {
  name: 'DashboardLayout',
  components: {
    NavBar,
  },
};
</script>
