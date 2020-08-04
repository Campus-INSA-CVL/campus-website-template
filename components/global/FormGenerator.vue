<template lang="pug">
  v-form(ref="form", v-if="content")
    v-row(tag="section")
      v-col(cols="12")
        v-card(outlined)
          v-card-text
            pole-form(@pole="addPole")
      v-col(v-for="(part, key) in content.form", :key="key", cols="12")
        v-card(outlined)
          v-card-title.text-uppercase.primary--text {{ key }}
          v-card-text.pb-2
            template(v-for="(component, indice) in part")
              v-text-field(v-if="is('text-field', component.type)", :label="component.label", v-model="component.value", :key="indice", outlined)
              v-textarea(v-else-if="is('text-area', component.type)", :label="component.label", v-model="component.value", :key="indice", outlined)
              color-form(v-else-if="is('color', component.type)", :key="indice", @color="addColor")
              team-form(v-else-if="is('team', component.type)", v-model="component.fields.bureau", :key="indice").mt-4
              social-form(v-else-if="is('social', component.type)", v-model="component.fields", :key="indice").mt-4
              image-form(v-else-if="is('image', component.type)", :key="indice", :label="component.label", :fileName="component.fileName", @image="addImage").mt-4
    v-row
      v-col(cols="12", align="end")
        v-btn(@click="validate()", depressed, color="primary", :disabled="loading") valider
</template>

<script>
import base64toblob from 'base64toblob'
import FileSaver from 'file-saver'
import JSZip from 'jszip'

export default {
  name: 'FormGenerator',
  props: {
    content: {
      type: Object,
      default: () => undefined,
    },
  },
  data() {
    return {
      loading: false,
      images: [],
      pole: '',
    }
  },
  methods: {
    addColor(v) {
      for (const value of this.content.form['front-matter']) {
        if (value.name === 'color') {
          value.value = v
        }
      }
    },
    addImage(v) {
      this.images.push(v)
    },
    addPole(v) {
      this.pole = v
    },
    is(name, value) {
      return value === name
    },
    generateImage(zip) {
      for (const image of this.images) {
        const path = this.pole ? `assets/${this.pole}` : 'assets'
        zip.file(
          `${path}/${image.fileName}.jpeg`,
          base64toblob(image.base64.split(',')[1], 'image/jpeg')
        )
      }
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
    generateFile(content) {
      return new Blob([content], {
        type: 'text/plain;charset=utf-8',
      })
    },
    validate() {
      const frontMatter = this.generateFrontMatter(
        this.content.form['front-matter']
      )

      const body = this.generateBody(this.content.form.body)

      const content = `${frontMatter}\n${body}`

      const zip = new JSZip()

      zip.file('index.md', this.generateFile(content))

      this.generateImage(zip)

      this.loading = true
      this.$nuxt.$loading.start()
      zip.generateAsync({ type: 'blob' }).then((content) => {
        this.$emit('finish', true)
        this.loading = false
        this.$nuxt.$loading.finish()
        FileSaver.saveAs(content, 'campus-insa.zip')
      })
    },
  },
}
</script>
