<template lang="pug">
  section
    h1 Bienvenue dans les templates pour les associations
    pre {{ content }}
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
