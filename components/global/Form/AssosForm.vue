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
          value: 'comed-insa',
        },
        {
          text: "INSA'brasse",
          value: 'insa-brasse',
        },
        {
          text: 'INSAction',
          value: 'insaction',
        },
        {
          text: "INS'Agora",
          value: 'insa-gora',
        },
        {
          text: "INSA'press",
          value: 'insa-press',
        },
        {
          text: 'INSArpège',
          value: 'insarpege',
        },
        {
          text: "Jard'INSA",
          value: 'jard-insa',
        },
        {
          text: 'Printemps des Grandes Écoles',
          value: 'pge',
        },
        {
          text: "Gree'NSA Blois",
          value: 'gree-nsa-blois',
        },
        {
          text: "Gree'NSA Bourges",
          value: 'gree-nsa-bourges',
        },
        {
          text: 'Insagénieuse',
          value: 'insagenieuses',
        },
        {
          text: 'INSA Safety',
          value: 'insa-safety',
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
          value: 'ins-actif',
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
          text: "insa'roule",
          value: 'insa-roule',
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
