<template>
  <div :class="[{'dark': $vuetify.theme.dark}, {'me': true}]">
    <div class="me-info">
      <filter-form />
      <div class="me-info__inner">
        <p class='me-info__created mb-0'>
          Created with ❤️
        </p>
        <h3 class='me-info__name mb-0'>
          Kevin Gallarin
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import FilterForm from '@/components/partials/FilterForm.vue';

export default {
  name: 'Me',
  components: { FilterForm },
  data: () => ({
    rules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
};
</script>
<style lang="scss">
  @import '@/scss/partials/me.scss';
</style>
