<template>
  <div
    id="app"
    class="bg-dark-1"
  >
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
    import NavBar from "./NavBar.vue";
    export default {
        name: "App",


        components: {
            NavBar
        },


        data: () => {
            return {
            };
        },

        created () {
            document.title = 'Bence László';
        }
    };
</script>

<style lang="scss">
    @import "../style/main.scss";

    a {
        color: white !important;
    }

    a:hover {
        color: darker(20%) !important;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-bottom: 100px !important;
    }
</style>
