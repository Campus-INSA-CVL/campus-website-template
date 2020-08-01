<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto")
</template>

<script>
import Team from '@/components/campus/team'

export default {
  components: {
    CampusTeam: Team,
  },
  async asyncData({ $content, route }) {
    const content = await $content('pages', route.params.name).fetch()

    return {
      content,
    }
  },
}
</script>
