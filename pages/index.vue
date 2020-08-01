<template lang="pug">
  section
    h1.font-weight-bold Bienvenue dans les templates pour les associations
    v-row(tag="section", no-gutters)
      v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
        v-row(justify="center")
          v-col(cols="12", sm="6", lg="6", v-for="layout in content", :key="layout.path")
            campus-card(:content="layout")
</template>

<script>
export default {
  async asyncData({ $content }) {
    const content = await $content('pages')
      .only(['title', 'description', 'color', 'slug'])
      .fetch()
    console.log('content:', content)

    return {
      content,
    }
  },
}
</script>
