<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col
      h2.text-h6.font-weight-bol.mb-4 Vos images pour le carousel
      v-row(justify="center", no-gutters)
        v-col(cols="12", v-for="field in fields", :key="field.fileName")
          image-form(:label="field.label", :fileName="field.fileName", @image="addImage")
</template>

<script>
export default {
  name: 'CarouselForm',
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addImage(v) {
      this.$emit('carousel', v)
    },
  },
}
</script>
