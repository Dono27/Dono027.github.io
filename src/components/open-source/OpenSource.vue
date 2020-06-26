<template>
  <div class="bg-dark text-light">
    <h2>Open Source Contributions</h2>

    <b-card-group bg-dark>
      <OpenSourceProject
        v-for="project in projects"
        :key="project.name"
        v-bind="project"
      />
    </b-card-group>
  </div>
</template>

<script>
    import OpenSourceProject from "./OpenSourceProject";

    export default {
        name: "OpenSource",

        components: {
            OpenSourceProject
        },

        props: {},

        data: () => {
            return {
                projects: [
                    {
                        name: "KEECO",
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "Home Automation System.",
                        description: "Home Automation System.",
                        languages: ["JavaScript", "C++"],
                        license: "GPL-3.0",
                        githubRepositoryLink: "",
                        gitlabRepositoryLink: "",
                        website: ""
                    },
                    {
                        name: "randoom",
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "CLI Random Data Generator.",
                        description:
                            "An easy-to-use CLI tool for generating random numbers, colors, characters and strings.",
                        languages: ["Rust"],
                        license: "GPL-3.0",
                        githubRepositoryLink:
                            "https://github.com/bencelaszlo/randoom",
                        gitlabRepositoryLink:
                            "https://gitlab.com/bencelaszlo/randoom",
                        website: ""
                    },
                    {
                        name: "Freenetic World",
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "2D Tower-Defense Videogame",
                        description: "",
                        languages: ["Rust"],
                        license: "GPL-V3.0",
                        githubRepositoryLink:
                            "https://github.com/bencelaszlo/freeneticworld",
                        gitlabRepositoryLink: "",
                        website: ""
                    },
                    {
                        name: "Cubique",
                        imgSrc: "",
                        imgAlt: "",
                        shortDescription: "3D Videogame",
                        description: "Cubique - 3D Videogame with OpenGL.",
                        languages: ["C"],
                        license: "",
                        githubRepositoryLink:
                            "https://github.com/bencelaszlo/cubique",
                        gitlabRepositoryLink: "",
                        website: ""
                    }
                ]
            };
        }
    };
</script>

<style scoped lang="scss">
    @import "../../style/main.scss";
</style>