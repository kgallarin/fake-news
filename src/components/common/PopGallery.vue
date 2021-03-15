<template>
  <v-dialog
    v-model="headerTtl"
    persistent
    max-width="600px"
  >
    <v-form ref="headerEdit" v-model="valid">
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Header Title"
                  :counter="30"
                  :rules="newsTitleRule"
                  required
                  v-model="htitle"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closePop('HEADER_TTL')"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="!valid"
            @click="validate"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PopGallery',
  data: () => ({
    valid: true,
    newsTitleRule: [
      (v) => (v && v.length >= 10) || 'Title must be greater than 10 characters',
    ],
    htitle: '',
  }),
  computed: {
    ...mapGetters({
      headerTtl: 'pop_gallery/GET_HEADER_TTL',
    }),
    asdqq() {
      return this.newsTitleRule;
    },
  },
  methods: {
    closePop(ttl) {
      this.$store.dispatch(`pop_gallery/${ttl}`, false);
      this.htitle = '';
      this.resetValidation();
    },
    saveTitle() {
      this.$store.dispatch('pop_gallery/HEADER_TTL', false);
      this.$store.dispatch('news_tile/EDIT_TITLE', this.htitle);
      this.htitle = '';
      this.resetValidation();
    },
    validate() {
      this.$refs.headerEdit.validate();
    },
    resetValidation() {
      this.$refs.headerEdit.resetValidation();
    },
  },
};
</script>
<style>

</style>
