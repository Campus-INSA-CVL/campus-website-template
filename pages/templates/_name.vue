<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content[0]", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto", :id="color")
</template>

<script>
import Team from '@/components/campus/Team'
import Social from '@/components/campus/Social'
import Center from '@/components/campus/Center'
import ResponsiveImage from '@/components/campus/ResponsiveImage'
import Carousel from '@/components/campus/Carousel'
import ExpansionPanels from '@/components/campus/ExpansionPanels'

export default {
  components: {
    CampusTeam: Team,
    CampusSocial: Social,
    CampusCenter: Center,
    CampusResponsiveImage: ResponsiveImage,
    CampusCarousel: Carousel,
    CampusExpansionPanels: ExpansionPanels,
  },
  async asyncData({ $content, route }) {
    const name = route.params.name
    const content = await $content('pages')
      .where({ extension: '.md', slug: name })
      .fetch()

    return {
      content,
    }
  },
  computed: {
    color() {
      return this.content[0]?.color ?? 'primary'
    },
  },
  head() {
    return {
      title:
        this.content[0]?.title?.toUpperCase() ?? 'chargement...'.toUpperCase(),
    }
  },
}
</script>
