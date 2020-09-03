<template lang="pug">
  v-form(ref="form", v-if="content")
    v-row(tag="section")
      v-col(cols="12")
        v-card(outlined)
          v-card-text
            v-row
              v-col(cols="12")
                pole-form(@pole="addPole")
              v-col(cols="12")
                assos-form(@asso="addAsso")
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
              carousel-form(v-else-if="is('carousel', component.type)", :key="indice", :fields="component.fields", @carousel="addCarousel").mt-4
              expansion-form(v-else-if="is('expansion', component.type)", :key="indice", v-model="component.fields").mt-4
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
      asso: '',
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
      for (const value of this.content.form.body) {
        if (value.type === 'image' && v.fileName === value.fileName) {
          value.value = v
        }
      }
    },
    addCarousel(v) {
      this.images.push(v)
    },
    addPole(v) {
      this.pole = v
    },
    addAsso(v) {
      this.asso = v
    },
    is(name, value) {
      return value === name
    },
    generateImage(zip) {
      for (const image of this.images) {
        const path = this.pole
          ? this.asso
            ? `assets/${this.pole}/${this.asso}`
            : `assets/${this.pole}`
          : 'assets'
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
    generateCarousel() {
      let frontMatter = ''
      const carouselImages = this.images.filter((v) =>
        v.fileName.match(/^carousel-\d/)
      )
      const nameImages = carouselImages.map((v) => v.fileName)
      frontMatter += 'imagesName:\n'
      for (const name of nameImages) {
        frontMatter += `  - ${name}.jpeg\n`
      }
      return frontMatter
    },
    generateExpansion(content) {
      let frontMatter = 'expansion:\n'
      for (const item of content) {
        if (item.name.match('titre')) {
          frontMatter += `  - title: ${item.value}\n`
        } else if (item.name.match('contenu')) {
          frontMatter += `    content: ${item.value}\n`
        }
      }
      return frontMatter
    },
    generateFrontMatter(content) {
      let frontMatter = ``
      frontMatter += '---\n'
      for (const element of content) {
        if (element.name === 'team') {
          frontMatter += this.generateTeam(element.fields)
        } else if (element.name === 'social') {
          frontMatter += this.generateSocial(element.fields)
        } else if (element.name === 'carousel') {
          frontMatter += this.generateCarousel()
        } else if (element.name === 'expansion') {
          frontMatter += this.generateExpansion(element.fields)
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
        if (element.type === 'image' && element.value) {
          body += `<campus-center>\n  <campus-responsive-image folder-name="${
            this.asso ? this.pole + '/' + this.asso : this.pole
          }" name="${
            element.fileName
          }.jpeg" max-width="400"></campus-responsive-image>\n</campus-center>\n\n`
        } else if (element.type === 'carousel') {
          body += `<campus-center>\n  <campus-carousel :names="imagesName" folder-name="${
            this.asso ? this.pole + '/' + this.asso : this.pole
          }"></campus-carousel>\n</campus-center>\n\n`
        } else if (element.type === 'expansion') {
          body +=
            '<campus-expansion-panels :color="color" :expansion="expansion"></campus-expansion-panels>\n\n'
        } else {
          body += `${element.md ? element.md + ' ' : ''}${element.value}\n\n`
        }
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
