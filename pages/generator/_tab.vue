<template lang="pug">
  v-row(justify="center", no-gutters)
    v-col(cols="12", md="8", lg="6")
      form-generator(:content="content[0]")
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const tab = route.params.tab
    if (!tab) {
      return {
        content: undefined,
      }
    }
    const content = await $content('pages')
      .where({ extension: '.yaml', title: tab })
      .fetch()

    console.log('content:', content)
    return {
      content,
    }
  },
}
</script>
