<template lang="pug">
  v-row(justify="center")
    v-col(cols="12", md="10", lg="8")
      h1(v-if="is404").text-center.text-h4 {{ pageNotFound }}
      h1(v-else).text-center.text-h4 {{ otherError }}
      v-row
        v-col(align="center")
          nuxt-link(to="/") Back to home
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  methods: {
    is404() {
      return this.error.statusCode === 404
    },
  },
  head() {
    const title = this.is404() ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
