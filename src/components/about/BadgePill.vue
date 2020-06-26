<template>
  <b-badge
    pill
    :variant="variant"
  >
    {{ label }}
  </b-badge>
</template>

<script>
    export default {
        name: 'BadgePill',

        props: {
            variant: {
                type: String,
                default: '',
                required: true
            },
            label: {
                type: String,
                default: ''
            }
        }
    };
</script>

<style scoped>
</style>