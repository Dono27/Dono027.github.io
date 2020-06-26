<template>
  <a
    :href="link"
    target="_blank"
    :alt="alt"
    :lang="lang"
    class=".flex-fill"
  >
    <b-list-group-item :class="backgroundColor">
      <div v-if="$isMobile()">
        <linkedin-icon size="1x" />
      </div>
      <div v-else>
        <linkedin-icon size="2x" />
        <span class="ml-2">{{ name }}</span>
      </div>
    </b-list-group-item>
  </a>
</template>

<script>
    export default {
        name: 'ContactItem',

        props: {
            name: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: 'message-circle-icon size="2x"/>'
            },
            link: {
                type: String,
                default: '#'
            },
            alt: {
                type: String,
                default: ''
            },
            lang: {
                type: String,
                default: 'en'
            },
            backgroundColor: {
                type: String,
                default: 'red'
            }
        }
    };
</script>

<style scoped lang="scss">
</style>