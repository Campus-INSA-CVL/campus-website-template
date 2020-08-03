<template lang="pug">
  section
    h1.text-h4.font-weight-bold Bienvenue dans les templates pour les associations
    v-row(justify="center")
      v-col(cols="12", sm="10", md="8", lg="6")
        p.text-justify Commencez par choisir parmis tous les templates disponibles puis choisissez votre niveau !
    h2.text-h5.font-weight-bold.text-center Les templates
    v-row(tag="section", no-gutters)
      v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
        v-row(justify="center")
          v-col(cols="12", sm="6", lg="6", v-for="(layout, index) in content", :key="index")
            campus-card(:content="layout")

    v-row(tag="section", justify="center")
      v-col(cols="12", md="10", lg="8")
        h2.text-h5.green--text.font-weight-bold.text-center.mt-4 Débutant
        v-row(justify="center")
          v-col(cols="12", sm="10", md="8", lg="6")
            p.text-justify Pour vous, c'est très simple ! Vous avez à disposition un générateur. C'est à dire qu'il vous suffit de remplir les champs, de valider et d'envoyer le fichier aux respos !
        v-row(tag="section")
          v-col(cols="12", align="center")
            v-btn(nuxt, to="/generator", depressed, color="primary") Accéder au générateur

        h2.text-h5.orange--text.font-weight-bold.text-center.mt-4 Intermédiaire
        v-row(justify="center")
          v-col(cols="12", sm="10", md="8", lg="6")
            p.text-justify Pour vous, vous avez la possibilité de vous rendre dans le codesandbox dont le lien est dans la #[a(href="https://campus-insa-cvl.github.io/campus-website/", target="_blank") doc]. Vous aurez alors accès aux mêmes templates avec lesquels vous allez pouvoir vous amuser et personnaliser d'avantage votre vitrine.

        h2.text-h5.red--text.font-weight-bold.text-center.mt-4 Expert
        v-row(justify="center")
          v-col(cols="12", sm="10", md="8", lg="6")
            p.text-justify Pour vous, vous pouvez aussi utiliser le codesandbox, ou bien utiliser le projet directement en local ! Si vous le souhaitez, vous avez aussi la possibilité de fork le #[a(href="https://github.com/Campus-INSA-CVL/campus-website", target="_blank") site campus] directement pour y intégrer votre association et faire une pull request, cela permet de mettre en place les modifications plus rapidement que de les envoyer à la main à un respo. Je vous invite aussi à regarder dans la #[a(href="https://campus-insa-cvl.github.io/campus-website/", target="_blank") doc] l'utilisation des compososants html qui peuvent vous permettre de créer des éléments attractifs pour votre page !
</template>

<script>
export default {
  async asyncData({ $content }) {
    const content = await $content('pages')
      .only(['title', 'description', 'color', 'slug'])
      .where({ extension: '.md' })
      .sortBy('order')
      .fetch()
    return {
      content,
    }
  },
}
</script>
