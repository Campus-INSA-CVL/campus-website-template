<template lang="pug">
  input(type="file",  accept="image/*", @change="compress")
</template>

<script>
import base64toblob from 'base64toblob'
import FileSaver from 'file-saver'
import JsZip from 'jszip'

export default {
  data() {
    return {
      scale: 40,
      quality: 30,
      reader: null,
      result: null,
      canvas: null,
    }
  },
  methods: {
    drawImage(imgUrl) {
      // Recreate Canvas Element
      const canvas = document.createElement('canvas')
      this.canvas = canvas
      // Set Canvas Context
      const ctx = this.canvas.getContext('2d')
      // Create New Image
      const img = new Image()
      // Set Canvas Height And Width According to Image Size And Scale
      img.src = imgUrl
      img.onload = () => {
        console.log(img.width, imgUrl)
        // Image Size After Scaling
        const scale = this.scale / 100
        const width = img.width * scale
        const height = img.height * scale
        this.canvas.setAttribute('width', width)
        this.canvas.setAttribute('height', height)
        console.log(img, width, height)
        ctx.drawImage(img, 0, 0, width, height)
        // Quality Of Image
        const quality = this.quality ? this.quality / 100 : 1
        // If all files have been proceed
        const base64 = this.canvas.toDataURL('image/jpeg', quality)
        console.log('base64', base64)
        let fileName = this.result.file.name
        const lastDot = fileName.lastIndexOf('.')
        fileName = fileName.substr(0, lastDot) + '.jpeg'
        const objToPass = {
          canvas: this.canvas,
          original: this.result,
          compressed: {
            blob: this.toBlob(base64),
            base64,
            name: fileName,
            file: this.buildFile(base64, fileName),
          },
        }
        objToPass.compressed.size =
          Math.round(objToPass.compressed.file.size / 1000) + ' kB'
        objToPass.compressed.type = 'image/jpeg'
        console.log(objToPass)

        console.log(img.width)

        // FileSaver.saveAs(this.toBlob(base64), `logo.jpg`)
        console.log(this.toBlob(base64))
        const zip = new JsZip()
        zip.file(`logo.jpg`, base64toblob(base64.split(',')[1], 'image/jpeg'))
        zip.generateAsync({ type: 'blob' }).then(function (content) {
          // see FileSaver.js
          FileSaver.saveAs(content, 'example.zip')
        })
        // this.done(objToPass)
      }
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
      this.result = fileInfo
      console.log(this.result)
      this.drawImage(this.result.base64)
    },
    compress(e) {
      this.file = e.target.files[0]
      this.filName = e.target.files[0].name

      this.reader = new FileReader()
      this.reader.readAsDataURL(this.file)
      this.reader.onload = this.readerOnload
    },
    toBlob(imgUrl) {
      const blob = base64toblob(imgUrl.split(',')[1], 'image/jpeg')
      const url = window.URL.createObjectURL(blob)
      return url
    },
    buildFile(blob, name) {
      return new File([blob], name)
    },
  },
}
</script>
