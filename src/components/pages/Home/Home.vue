<template>
  <v-container fluid>
    <v-row>
      <v-col cols='12' sm='12' >
        <news-wrapper />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsWrapper from '@/components/partials/NewsWrapper.vue';

export default {
  name: 'Home',
  components: { NewsWrapper },
};
</script>
