<template lang="pug">
  section
    h1.text-h4.font-weight-bold Bienvenue dans les templates pour les associations
    v-row(justify="center")
      v-col(cols="12", sm="10", md="8", lg="6")
        p.text-justify Commencez par choisir parmis tous les templates disponibles puis choisissez votre niveau !
    h2.text-h5 Les templates
    v-row(tag="section", no-gutters)
      v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
        v-row(justify="center")
          v-col(cols="12", sm="6", lg="6", v-for="layout in content", :key="layout.path")
            router-link(:to="layout.path")
              campus-card(:content="layout")
    h2.text-h5.green--text.font-weight-bold Débutant
    v-row(justify="center")
      v-col(cols="12", sm="10", md="8", lg="6")
        p.text-justify Pour vous, c'est très simple ! Vous avez à disposition un générateur, il vous suffit de remplir les champs, de valider et d'envoyer le fichier aux respos !
    h3.text-h6 Le générateur
    v-row(tag="section")
      v-col(cols="12", align="center")
        v-btn(nuxt, to="/generator", depressed, color="primary") Accéder au générateur

    h2.text-h5.orange--text.font-weight-bold Intermédiaire
    v-row(justify="center")
      v-col(cols="12", sm="10", md="8", lg="6")
        p.text-justify Pour vous, vous avez la possibilité de vous rendre dans le codesandbox dont le lien est dans la #[a(href="https://campus-insa-cvl.github.io/campus-website/", target="_blank") doc]. Vous aurez alors accès aux même templates avec lesquels vous allez pouvoir vous amusez et personnaliser d'avantage votre vitrine.

    h2.text-h5.red--text.font-weight-bold Expert
    v-row(justify="center")
      v-col(cols="12", sm="10", md="8", lg="6")
        p.text-justify coming soon !
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
