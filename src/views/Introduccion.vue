<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 3. Diseño e implementación de algoritmos'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5.mx-0
        .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-5.p-4(data-aos="fade-left")
          p.mb-0(data-aos="fade-up") El pensamiento algorítmico es una competencia fundamental en el mundo de la programación moderna, esta unidad está diseñada para desarrollar habilidades fundamentales en el diseño, implementación y análisis de algoritmos eficientes, los estudiantes aprenderán a abordar problemas mediante el pensamiento algorítmico, a implementar soluciones optimizadas utilizando Python como lenguaje principal, aplicando los principios de la lógica y las estructuras básicas de control de flujo; además podrá implementar la IA para la optimización del código.

      .row.mb-4
        .col-12.col-xl-7(data-aos="fade-right")
          p.mb-4 La temática que se abordará está dividida en tres temas importantes:
          .d-flex.bg-azul-claro.p-3.mb-4
            img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Conceptos generales en el diseño de algoritmos eficientes.
          .d-flex.bg-azul-claro.p-3.mb-4
            img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Implementación de algoritmos en lenguaje de programación básico Python con ejemplos.
          .d-flex.bg-azul-claro.p-3.mb-4
            img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Utilización de IA para la optimización y análisis básicos en la eficiencia algorítmica. 

        .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
  
      p.mb-4 Al finalizar, estará en la capacidad de diseñar algoritmos utilizando pseudocódigo y emplea Python como lenguaje de programación, para finalizar podrá ajustar el código creado usando IA para mejorar su rendimiento y funcionalidad. 

      .row.mb-5
        .d-flex.align-items-center
          div.d-flex.align-items-center.bg-5.px-3.py-4(data-aos="fade-up")
            img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
            p.pe-xl-5.mb-0  Le invitamos a descubrir la importancia de la eficiencia algorítmica a través de esta unidad y a reconocer la importancia del uso de las IA en el alcance de este objetivo.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
