<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('pages', 'base').fetch()

    return {
      page,
    }
  },
}
</script>
