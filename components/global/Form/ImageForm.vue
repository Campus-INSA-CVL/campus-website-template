<template lang="pug">
  v-file-input(outlined, v-bind="$attrs", type="file", accept="image/*", @change="compress")
</template>

<script>
export default {
  name: 'ImageForm',
  props: {
    fileName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      width: 1000,
      // scale: 70,
      quality: 95,
      reader: null,
      img: null,
      canvas: null,
      contextCanvas: null,
      fileInfo: null,
    }
  },
  methods: {
    compress(file) {
      this.file = file

      this.reader = new FileReader()
      this.reader.readAsDataURL(this.file)

      this.reader.onload = this.readerOnload
    },
    readerOnload(event) {
      const { file } = this

      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: this.reader.result,
        file,
      }

      this.fileInfo = fileInfo

      this.resize(this.fileInfo.base64)
    },
    imageOnload() {
      // const scale = this.scale / 100
      const scale = this.width / this.img.width
      const quality = this.quality ? this.quality / 100 : 1
      // const width = this.img.width * scale
      const height = this.img.height * scale

      // this.canvas.setAttribute('width', width)
      this.canvas.setAttribute('width', this.width)
      this.canvas.setAttribute('height', height)

      // this.contextCanvas.drawImage(this.img, 0, 0, width, height)
      this.contextCanvas.drawImage(this.img, 0, 0, this.width, height)

      const base64 = this.canvas.toDataURL('image/jpeg', quality)

      this.$emit('image', {
        fileName: this.fileName,
        base64,
      })
    },
    resize(originalBase64) {
      this.canvas = document.createElement('canvas')
      this.contextCanvas = this.canvas.getContext('2d')

      this.img = new Image()
      this.img.src = originalBase64

      this.img.onload = this.imageOnload
    },
  },
}
</script>
