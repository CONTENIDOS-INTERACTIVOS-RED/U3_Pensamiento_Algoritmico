<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'unidad 2: Algoritmos y la Revolución 4.0'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-12.col-xl-7.d-flex.flex-column(data-aos="fade-left")
          p.mb-4 Al finalizar la unidad número 2, el estudiante estará en capacidad de explorar el rol de los algoritmos en la Revolución 4.0, identificando su uso en tecnologías como la automatización, inteligencia artificial y análisis de datos; además, podrá describir cómo estas tecnologías se integran en los procesos de ingeniería.     
          p.mb-0 Esta unidad aborda la importancia de los algoritmos en el mundo moderno y cómo la aparición de la Revolución 4.0, permitió grandes avances tecnológicos que modificaron la industria y la automatización, renovando la implementación de los algoritmos en sus procesos, además;  describe la importancia de la inteligencia artificial y la posibilidad obtener información a través de la implementación de algoritmos matemáticos o modelado de datos, los cuales son asuntos de gran importancia  para la toma de decisiones gerenciales. 
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  
      .row.mb-0
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
        .col-12.col-xl-7.d-flex.flex-column
          p.mb-4 Por último, se abordará el procesamiento masivo de datos, también conocido como Big Data, que permite  analizar grandes volúmenes de información que proviene de diversas fuentes y que, por su complejidad, no puede ser analizada con métodos tradicionales. 
          p.mb-3 De este modo, el estudiante podrá explorar el impacto de los algoritmos en las tecnologías de automatización y análisis de datos, conocerá el rol de los algoritmos en el estudio de grandes volúmenes de datos y podrá relacionar conceptos de algoritmos, en procesos industriales automatizados.   
          div.d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-left")
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
            .d-flex.flex-column.my-auto
              p.pe-xl-3.mb-0(data-aos="fade-up") Lo invitamos a aprender sobre la aplicabilidad de los algoritmos en el mundo 4.0, ¡Bienvenido! 
  
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
