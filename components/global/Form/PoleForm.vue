<template lang="pug">
  v-select(label="Choisir sa provenance", :items="poles", :menu-props="{bottom: true, offsetY: true}", hide-details, outlined, dense, color="primary", item-color="primary", v-model="pole")
</template>

<script>
export default {
  name: 'PoleForm',
  data() {
    return {
      value: '',
      poles: [
        {
          text: 'INSAPP',
          value: 'federation/insapp',
        },
        {
          text: 'AIEP',
          value: 'federation/aiep',
        },
        {
          text: 'Élus',
          value: 'federation/elus',
        },
        {
          text: 'Pôle Culturel',
          value: 'federation/culturel',
        },
        {
          text: 'Pôle Sport',
          value: 'federation/sports',
        },
        {
          text: 'Gala',
          value: 'federation/gala',
        },
        {
          text: 'Pôle des Solidarités',
          value: 'federation/solidarites',
        },
        {
          text: 'Pôle Techniques',
          value: 'federation/techniques',
        },
        {
          text: 'Les autres assos',
          value: 'federation/les-autres-assos',
        },
        {
          text: 'Cafet',
          value: 'services',
        },

        {
          text: 'Partenariats',
          value: 'services',
        },
        {
          text: 'Shop',
          value: 'services',
        },
        {
          text: 'Alumni',
          value: 'alumniColor',
        },
        {
          text: 'Documents',
          value: 'outils',
        },
        {
          text: 'Élèves',
          value: 'outils',
        },
        {
          text: 'Tutorinsa',
          value: 'outils',
        },
        {
          text: 'Olympiades',
          value: 'olympiades',
        },
      ],
    }
  },
  computed: {
    pole: {
      get() {
        return this.value
      },
      set(v) {
        this.value = v
        this.$emit('pole', v)
      },
    },
  },
}
</script>
