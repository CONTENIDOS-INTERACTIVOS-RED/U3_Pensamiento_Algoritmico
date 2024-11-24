<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(:titulo="'Unidad 2. Dibujo en proyección y representación de vistas'" :subTitulo="'SÍNTESIS'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mb-md-5 Desde la automatización de procesos hasta la inteligencia artificial y el análisis de datos, los algoritmos se han convertido en el núcleo de la Revolución 4.0. En esta unidad, descubrirá cómo los algoritmos impactan la industria moderna, potenciando la eficiencia, reduciendo errores y transformando el entorno laboral. Exploraremos su aplicación en tecnologías avanzadas como el Big Data y el Internet de las Cosas (IoT), destacando cómo estas herramientas permiten la toma de decisiones basada en datos y optimizan los procesos sin intervención humana.
    p.mb-4.mb-md-5.text-bold ¡Prepárese para comprender y aplicar los principios del pensamiento algorítmico en el contexto de la era digital!
    figure
      img(src='@/assets/componentes/sintesis.png', alt='')
    

</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
