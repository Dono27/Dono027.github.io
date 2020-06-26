<template>
  <header
    class="bg-black"
    :class="$isMobile() ? 'margin-top-150' : 'margin-bottom-150'"
  >
    <b-navbar
      :class="$isMobile() ? 'fixed-bottom' : 'fixed-top'"
      type="dark"
      variant="dark-1"
    >
      <b-navbar-brand to="/">
        {{ brandLabel }}
      </b-navbar-brand>
      <b-nav-item to="/">
        <div v-if="$isMobile()">
          <home-icon size="2x" />
        </div>
        <div v-else>
          <home-icon size="3x" />
          <span class="ml-12">{{ navbarLabels.home }}</span>
        </div>
      </b-nav-item>
      <b-nav-item to="/open-source">
        <div v-if="$isMobile()">
          <code-icon size="2x" />
        </div>
        <div v-else>
          <code-icon size="3x" />
          <span class="ml-2">{{ navbarLabels.openSource }}</span>
        </div>
      </b-nav-item>
      <b-nav-item href="window.location = http://bencelaszlo.hu/blog">
        <div v-if="$isMobile()">
          <book-open-icon size="2x" />
        </div>
        <div v-else>
          <book-open-icon size="3x" />
          <span class="ml-2">{{ navbarLabels.blog }}</span>
        </div>
      </b-nav-item>
      <b-nav-item to="/about">
        <div v-if="$isMobile()">
          <info-icon size="2x" />
        </div>
        <div v-else>
          <info-icon size="3x" />
          <span class="ml-2">{{ navbarLabels.about }}</span>
        </div>
      </b-nav-item>
    </b-navbar>
  </header>
</template>

<script>
    import {
        BookOpenIcon,
        CodeIcon,
        HomeIcon,
        InfoIcon
        } from "vue-feather-icons";

    export default {
        name: "NavBar",

        components: {
            BookOpenIcon,
            CodeIcon,
            HomeIcon,
            InfoIcon
        },


        props: {},

        data :() => {
            return {
                brandLabel: 'Bence László',
                navbarLabels: {
                    home: 'Home',
                    openSource: 'Open Source Contributions',
                    blog: 'Blog',
                    about: 'About'
                }
            }
        },

        computed: {}
    };
</script>

<style lang="scss">
    @import "../style/main.scss";

    .margin-top-150 {
        margin-top: 150px !important;
    }

    .margin-bottom-150 {
        margin-bottom: 150px !important;
    }

    body {
        background-color: #c18f41 !important;
    }
</style>