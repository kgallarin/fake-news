<template functional>
  <a href="#" class="link-to" @click.prevent="listeners['on-read']">
    {{ props.label }}
  </a>
</template>

<script>
export default {
  name: 'LinkTo',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
  @import '@/scss/common/link-to.scss';
</style>
