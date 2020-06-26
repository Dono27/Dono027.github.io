<template>
  <b-card
    :title="name"
    :sub-title="shortDescription"
    class="bg-secondary"
  >
    <b-card-header class="bg-yellow">
      <b-card-img
        :img-src="imgSrc"
        :img-alt="imgAlt"
        img-top
      />
    </b-card-header>
    <b-card-body class="bg-orange">
      <b-card-text>{{ description }}</b-card-text>
    </b-card-body>
    <b-card-footer class="bg-red">
      <div>{{ languages.join(', ') }}</div>
      <div>{{ license }}</div>
      <b-link
        v-if="gitlabRepositoryLink"
        :href="gitlabRepositoryLink"
        class="card-link"
      >
        GitLab Repository
      </b-link>
      <b-link
        v-if="githubRepositoryLink"
        :href="githubRepositoryLink"
        class="card-link"
      >
        GitHub Repository
      </b-link>
      <b-link
        v-if="website"
        :href="website"
        class="card-link"
      >
        Project Website
      </b-link>
    </b-card-footer>
  </b-card>
</template>

<script>
    export default {
        name: 'OpenSourceProject',

        props: {
            name: {
                type: String,
                default: 'Project Name'
            },
            imgSrc: {
                type: String,
                default: ''
            },
            imgAlt: {
                type: String,
                default: ''
            },
            shortDescription: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            languages: {
                type: Array,
                default: () => []
            },
            license: {
                type: String,
                default: ''
            },
            githubRepositoryLink: {
                type: String,
                default: ''
            },
            gitlabRepositoryLink: {
                type: String,
                default: ''
            },
            website: {
                type: String,
                default: ''
            }
        }
    };
</script>

<style scoped lang="scss">
</style>