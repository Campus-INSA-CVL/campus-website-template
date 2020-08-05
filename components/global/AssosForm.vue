<template lang="pug">
  v-select(label="Choisir son asso", :items="assosSort", :menu-props="{bottom: true, offsetY: true}", hide-details, outlined, dense, color="primary", item-color="primary", v-model="asso")
</template>

<script>
export default {
  name: 'AssosForm',
  data() {
    return {
      value: '',
      assos: [
        {
          text: 'Club oenologie',
          value: 'club-oenologie',
        },
        {
          text: "Comed'INSA",
          value: 'comedinsa',
        },
        {
          text: 'INSAbrasse',
          value: 'insabrasse',
        },
        {
          text: 'INSAction',
          value: 'insaction',
        },
        {
          text: "INS'Agora",
          value: 'insagora',
        },
        {
          text: "INSA'press",
          value: 'insapress',
        },
        {
          text: 'INSArpège',
          value: 'insarpege',
        },
        {
          text: "Jard'INSA",
          value: 'jardinsa',
        },
        {
          text: 'Printemps des Grandes Écoles',
          value: 'pge',
        },
        {
          text: "Gree'NSA Blois",
          value: 'greensa-blois',
        },
        {
          text: "Gree'NSA Bourges",
          value: 'greensa-bourges',
        },
        {
          text: 'Insagénieuse',
          value: 'insagenieuses',
        },
        {
          text: 'INSA Safety',
          value: 'insasafety',
        },
        {
          text: '5 Continents 5 Sommets',
          value: '5s5c',
        },
        {
          text: 'Élèves sans frontières',
          value: 'eleves-sans-frontieres',
        },
        {
          text: 'Genepi',
          value: 'genepi',
        },
        {
          text: 'INSA kids',
          value: 'insa-kids',
        },
        {
          text: "INS'Actif",
          value: 'insactif',
        },
        {
          text: 'R3: Rencontrer, Réaliser, Réussir',
          value: 'r3',
        },
        {
          text: 'High-five',
          value: 'high-five',
        },
        {
          text: 'INSAil',
          value: 'insail',
        },
        {
          text: 'INSAVIRON',
          value: 'insaviron',
        },
        {
          text: '4L Trophy',
          value: '4l-trophy',
        },
        {
          text: 'Club robotique',
          value: 'club-robotique',
        },
        {
          text: "Gam'INSA",
          value: 'gaminsa',
        },
        {
          text: 'ISI',
          value: 'isi',
        },
        {
          text: 'mécanique automobile',
          value: 'mecanique-automobile',
        },
        {
          text: "Rac'INSA",
          value: 'racinsa',
        },
      ],
    }
  },
  computed: {
    assosSort() {
      const assos = this.assos
      return assos.sort((a, b) => {
        const fa = a.text.toLowerCase()
        const fb = b.text.toLowerCase()

        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
    },
    asso: {
      get() {
        return this.value
      },
      set(v) {
        this.value = v
        this.$emit('asso', v)
      },
    },
  },
}
</script>
