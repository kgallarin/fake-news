<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="filter"
            label="Filter"
            solo-inverted
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'FilterForm',
  data: () => ({
    filter: '',
  }),
  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },
  watch: {
    filter(n) {
      if (n !== '') {
        this.$store.dispatch('news/FETCH_NEWS', {
          q: n,
        });
      } else {
        this.$store.dispatch('news/FETCH_NEWS', {
          q: 'latest',
        });
      }
    },
  },
  methods: {
    clearMessage() {
      this.filter = '';
    },
  },
};
</script>
