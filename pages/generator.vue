<template lang="pug">
  section
    v-tabs(centered, show-arrows, color="primary")
      v-tabs-slider(color="primary")
      v-tab(v-for="(tab, indice) in tabs", :key="indice", :to="`${tab.slug}`", nuxt, exact) {{ tab.title }}
    v-container(fluid)
    v-row(no-gutters)
      v-col(cols="12")
        nuxt-child
</template>

<script>
export default {
  middleware({ redirect, route }) {
    if (route.fullPath.match(/^\/generator\/?$/)) {
      redirect('/generator/base')
    }
  },
  async asyncData({ $content }) {
    const tabs = await $content('pages').where({ extension: '.yaml' }).fetch()

    return {
      tabs,
    }
  },
}
</script>
