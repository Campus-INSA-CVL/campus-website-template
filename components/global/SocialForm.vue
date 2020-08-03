<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col
      h2.text-h6.font-weight-bold Vos réseaux sociaux
      v-row(justify="center")
        v-col(v-for="(component, indice) in value", :key="indice", cols="12")
          v-text-field(v-if="isTextField(component.type)", :label="component.label", v-model="component.value", :key="indice", outlined, hide-details)
</template>

<script>
export default {
  name: 'SocialForm',
  props: {
    value: {
      type: Array,
      default: () => undefined,
    },
  },
  methods: {
    isTextField(v) {
      return v === 'text-field'
    },
  },
}
</script>
