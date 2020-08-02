<template lang="pug">
  v-form(ref="form", v-if="content")
    v-row(tag="section")
      v-col(v-for="(part, key) in content.form", :key="key", cols="12")
        v-card(outlined)
          v-card-title.text-uppercase.primary--text {{ key }}
          v-card-text
            template(v-for="(component, indice) in part", )
              v-text-field(v-if="isTextField(component.type)", :label="component.label", v-model="component.value", :key="indice", outlined)
              v-textarea(v-if="isTextArea(component.type)", :label="component.label", v-model="component.value", :key="indice", outlined)
    v-row
      v-col(cols="12", align="end")
        v-btn(@click="validate()", depressed, color="primary") valider
</template>

<script>
import FileSaver from 'file-saver'

export default {
  name: 'FormGenerator',
  props: {
    content: {
      type: Object,
      default: () => undefined,
    },
  },
  data() {
    return {}
  },
  methods: {
    isTextField(v) {
      return v === 'text-field'
    },
    isTextArea(v) {
      return v === 'text-area'
    },
    generateFrontMatter(content) {
      let frontMatter = ``
      frontMatter += '---\n'
      for (const element of content) {
        frontMatter += `${element.name}: ${element.value}\n`
      }
      frontMatter += '---\n'
      return frontMatter
    },
    generateBody(content) {
      let body = ''
      for (const element of content) {
        body += `${element.md ? element.md + ' ' : ''}${element.value}\n\n`
      }
      return body
    },
    generateFile(fileName, content) {
      const blob = new Blob([content], {
        type: 'text/plain;charset=utf-8',
      })
      FileSaver.saveAs(blob, fileName)
    },
    validate() {
      const frontMatter = this.generateFrontMatter(
        this.content.form['front-matter']
      )

      const body = this.generateBody(this.content.form.body)

      const content = `${frontMatter}\n${body}`

      this.generateFile('monFichierCampus.md', content)
    },
  },
}
</script>
