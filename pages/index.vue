<template lang="pug">
  section
    h1.text-h4.font-weight-bold Bienvenue dans les templates pour les associations
    v-row(justify="center")
      v-col(cols="12", sm="10", md="8", lg="6")
        p.text-justify Commencez par choisir parmis tous les templates disponibles.
        p.text-justify Ensuite, vous avez 2 choix ! Soit vous vous rendez dans le codesandbox dont le lien est dans la #[a(href="https://campus-insa-cvl.github.io/campus-website/", target="_blank") doc] et vous avez une grande possiblité de customisation de votre page vitrine. Soit vous voulez faire simple mais rapide et efficace et vous vous rendez dans le générateur pour créer facilement le fichier pour votre association !
    h2.text-h5 Les templates
    v-row(tag="section", no-gutters)
      v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
        v-row(justify="center")
          v-col(cols="12", sm="6", lg="6", v-for="layout in content", :key="layout.path")
            campus-card(:content="layout")
    h2.text-h5 Le générateur
    v-row(tag="section")
      v-col(cols="12", align="center")
        v-btn(nuxt, to="/generator", depressed, color="primary") Accéder au générateur
</template>

<script>
export default {
  async asyncData({ $content }) {
    const content = await $content('pages')
      .only(['title', 'description', 'color', 'slug'])
      .where({ extension: '.md' })
      .fetch()
    return {
      content,
    }
  },
}
</script>
