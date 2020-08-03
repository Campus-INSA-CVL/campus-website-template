<template lang="pug">
  v-form(ref="form", v-if="content")
    v-row(tag="section")
      v-col(v-for="(part, key) in content.form", :key="key", cols="12")
        v-card(outlined)
          v-card-title.text-uppercase.primary--text {{ key }}
          v-card-text.pb-2
            template(v-for="(component, indice) in part")
              v-text-field(v-if="isTextField(component.type)", :label="component.label", v-model="component.value", :key="indice", outlined)
              v-textarea(v-else-if="isTextArea(component.type)", :label="component.label", v-model="component.value", :key="indice", outlined)
              color-form(v-else-if="isColor(component.type)", :key="indice", @color="updateColor")
              team-form(v-else-if="isTeam(component.type)", v-model="component.fields.bureau", :key="indice")
              social-form(v-else-if="isSocial(component.type)", v-model="component.fields", :key="indice").mt-4
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
    updateColor(v) {
      for (const value of this.content.form['front-matter']) {
        if (value.name === 'color') {
          value.value = v
        }
      }
    },
    isTextField(v) {
      return v === 'text-field'
    },
    isTextArea(v) {
      return v === 'text-area'
    },
    isTeam(v) {
      return v === 'team'
    },
    isSocial(v) {
      return v === 'social'
    },
    isColor(v) {
      return v === 'color'
    },
    generateSocial(content) {
      let social = 'social:\n'
      for (const key in content) {
        const element = content[key]
        social += `  ${element.name}: ${element.value}\n`
      }
      return social
    },
    generateTeam(content) {
      let team = 'team:\n  '
      for (const key in content) {
        const elements = content[key]
        team += `${key}:\n`
        for (const element of elements) {
          team += `    - responsability: ${element.responsability}\n      name: ${element.value}\n      description:\n`
        }
      }
      return team
    },
    generateFrontMatter(content) {
      let frontMatter = ``
      frontMatter += '---\n'
      for (const element of content) {
        if (element.name === 'team') {
          frontMatter += this.generateTeam(element.fields)
        } else if (element.name === 'social') {
          frontMatter += this.generateSocial(element.fields)
        } else {
          frontMatter += `${element.name}: ${element.value}\n`
        }
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
