<template lang="pug">
  v-row(justify="center", no-gutters)
    v-col(cols="12", sm="8", md="6", lg="4")
      dialog-send-mail(:value="dialog", @dialog="toggleDialog")
      form-generator(:content="content[0]", @finish="toggleDialog")
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

    return {
      content,
    }
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    route() {
      return this.$route
    },
  },
  methods: {
    toggleDialog(v) {
      this.dialog = v
    },
  },
  head() {
    return {
      title:
        this.$route?.params?.tab?.toUpperCase() + ' generator'.toUpperCase(),
    }
  },
}
</script>
