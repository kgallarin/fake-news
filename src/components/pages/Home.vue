<template>
  <v-container fluid>
    <v-row>
      <v-col cols='12' sm='2'>
        <me />
      </v-col>
      <v-col cols='12' sm='10' >
        <news-wrapper :items="items" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsWrapper from '@/components/partials/NewsWrapper.vue';
import Me from '@/components/partials/Me.vue';

export default {
  name: 'Home',
  components: { NewsWrapper, Me },
  computed: {
    ...mapGetters({
      items: 'news/GET_NEWS',
    }),
  },
};
</script>
