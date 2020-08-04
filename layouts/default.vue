<template lang="pug">
  v-app
    v-app-bar(app, elevate-on-scroll)
      v-btn(to="/", nuxt, exact, depressed).header-btn
        v-toolbar-title #[span.text-uppercase.font-weight-bold.primary--text templates] #[span.text-lowercase.font-weight-regular.primary--text  #campus] #[span.text-uppercase.font-weight-regular.primary--text insa]#[span.text-uppercase.font-weight-black.primary--text cvl]
    v-main
      v-container(fluid)
        nuxt
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style>
.header-btn::before {
  background-color: transparent !important;
}
</style>
