<template lang="pug">
  v-dialog(v-model="dialog", width="500")
    v-card
      v-card-title
        h1.text-uppercase.primary--text.font-weight-bold que faire du dossier téléchargé ?
      v-card-text
        p.text-justify Le dossier que tu viens de télécharger contient tous les fichiers pour que ta fiche descriptive puisse être intégrée au site ! Il faut donc que tu l'envoie par mail aux respos infos ou assos du bde !
      v-card-actions
        v-spacer
        v-btn(depressed, @click="dialog = false", color="primary") close
</template>

<script>
export default {
  name: 'DialogSendMail',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('dialog', v)
      },
    },
  },
}
</script>
