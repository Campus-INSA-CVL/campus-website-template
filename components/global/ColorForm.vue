<template lang="pug">
section
  v-select(label="Choisir son pôle", :items="colors", :menu-props="{bottom: true, offsetY: true}", hide-details, outlined, dense, color="primary", item-color="primary", v-model="color")
</template>

<script>
export default {
  name: 'ColorForm',
  data() {
    return {
      value: '',
      colors: [
        {
          text: 'Élus',
          value: 'elusColor',
        },
        {
          text: 'Pôle Culturel',
          value: 'culturelColor',
        },
        {
          text: 'Pôle Sport',
          value: 'sportColor',
        },
        {
          text: 'Gala',
          value: 'galaColor',
        },
        {
          text: 'Pôle des Solidarités',
          value: 'solidaritesColor',
        },
        {
          text: 'Pôle Techniques',
          value: 'techniquesColor',
        },
        {
          text: 'Les autres assos',
          value: 'othersColor',
        },
        {
          text: 'Cafet',
          value: 'cafetColor',
        },

        {
          text: 'Partenariats',
          value: 'partenariatsColor',
        },
        {
          text: 'Shop',
          value: 'shopColor',
        },
        {
          text: 'Alumni',
          value: 'alumniColor',
        },
        {
          text: 'Documents',
          value: 'documentsColor',
        },
        {
          text: 'Élèves',
          value: 'elevesColor',
        },
        {
          text: 'Tutorinsa',
          value: 'tutorinsaColor',
        },
      ],
    }
  },
  computed: {
    color: {
      get() {
        return this.value
      },
      set(v) {
        this.value = v
        this.$emit('color', v)
      },
    },
  },
}
</script>
