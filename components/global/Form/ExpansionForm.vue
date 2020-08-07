<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col
      h2.text-h6.font-weight-bold Vos panneaux extensibles
      v-row(justify="center")
        v-col(v-for="(component, indice) in value", :key="indice", cols="12")
          v-text-field(v-if="is('text-field', component.type)", :label="component.label", v-model="component.value", :key="indice", outlined, hide-details)
          v-textarea(v-else-if="is('text-area', component.type)", :label="component.label", v-model="component.value", :key="indice", outlined, hide-details)
</template>

<script>
export default {
  name: 'ExpansionForm',
  props: {
    value: {
      type: Array,
      default: () => undefined,
    },
  },
  methods: {
    is(name, value) {
      return value === name
    },
  },
}
</script>
