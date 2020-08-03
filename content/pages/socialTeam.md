---
title: social & team
description: Ceci est un template pour montrer l'intégration à la fois de la bannière sociale et d'une team pour votre vitrine !
color: socialTeamColor
order: 4
team:
  bureau:
    - responsability: président
      name: Jules Perrault
      description: responsable de l'association
    - responsability: trésorier
      name: Courtland Vaillancour
      description: Phasellus et laoreet augue. Aliquam tristique nisi sed velit faucibus auctor. Nulla turpis diam, volutpat nec nisl vitae.
  communication:
    - responsability: responsable communication
      name: Charlotte Beaudoin
      description: gère son équipe de communication afin d'augmenter la visibilité de l'association
social:
  facebook: 'https://facebook.com'
  instagram: 'https://instagram.com'
  twitter: 'https://twitter.com'
  # twitch: 'https://twitch.com'
  snapchat: 'https://snapchat.com'
  discord: 'https://discord.com'
---

# Bienvenue dans votre association

> Sed tempus tellus in neque tincidunt gravida. Integer suscipit sodales nisl, sit amet scelerisque nisi vestibulum ut. Aliquam facilisis purus at ligula mattis faucibus. Curabitur malesuada ipsum ligula, tristique gravida dui ullamcorper id.

## Présentation

Lorem ipsum **dolor sit amet**, consectetur adipiscing elit. Donec a venenatis libero. Nullam commodo maximus nibh et efficitur. Suspendisse potenti. Nullam a facilisis dui, in blandit odio. Quisque dignissim sapien ipsum, et **eleifend nisl finibus sit amet**. Donec bibendum sagittis tortor eget porttitor. Suspendisse dictum nec neque nec tristique. Phasellus eleifend ullamcorper malesuada.

Nulla in auctor ante. _Aenean pellentesque aliquam mattis_. Mauris fermentum risus ac enim porta, id pulvinar lorem aliquam. Nam vehicula quam eu ante porttitor varius. Nunc ultricies urna velit, nec ornare nisl sagittis eu. Sed posuere enim a congue convallis. Curabitur dolor quam, suscipit et dolor sed, tincidunt consequat lectus. Donec dui orci, dignissim quis congue non, commodo ac ligula. Curabitur sed quam vitae neque interdum hendrerit vitae nec lectus. Donec viverra ullamcorper nibh id aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus.

## Objectifs

Cras quis justo a sapien accumsan laoreet. Vestibulum justo turpis, tristique eget sollicitudin eget, vestibulum vel dolor. Donec dictum vulputate ex non sagittis. Nullam vehicula in quam nec elementum. Nam nec blandit lorem, at dictum felis. Nulla luctus ipsum leo, vitae facilisis est dictum vel. Phasellus tristique urna arcu, quis condimentum mauris interdum non. Praesent tempor lobortis odio et **molestie**. Ut tempor sapien a tortor **luctus**, **blandit** porta felis vehicula. Quisque tempus venenatis orci, ut volutpat urna. Vivamus risus velit, auctor mollis dui ut, lacinia venenatis risus. Suspendisse imperdiet quis lectus id accumsan.

Etiam erat metus, dapibus id felis congue, egestas gravida erat. Curabitur sodales eget lectus bibendum lobortis. Nunc dictum est feugiat elit tincidunt, viverra finibus ante ultrices. Vestibulum at sem mollis, pharetra neque sed, tincidunt neque. Proin eget risus quis ante finibus bibendum. Duis a tortor nec augue hendrerit pulvinar eu eget purus. Maecenas nec sapien mollis, commodo mauris at, pulvinar eros. Morbi hendrerit porttitor finibus. Curabitur dapibus sagittis feugiat. Morbi nec sodales tellus. Nam id purus eget libero euismod tincidunt at ut nulla. Quisque finibus orci at pretium tincidunt. Duis in nibh tortor. Pellentesque libero felis, luctus nec nibh ac, vehicula blandit mauris. Quisque placerat vel diam at sodales. Sed purus arcu, scelerisque vel magna vitae, rutrum egestas mi.

---

## Nous retrouver sur les réseaux sociaux

<campus-social :social="social" :color="color"></campus-social>

---

## L'équipe

<campus-team :team="team" :color="color"></campus-team>
