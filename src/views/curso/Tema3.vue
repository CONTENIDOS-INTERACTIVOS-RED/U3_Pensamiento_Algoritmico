<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Diseño e implementación de algoritmos'" :subTitulo="'3. Utilización de IA para la optimización y análisis básicos en la eficiencia algorítmica'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    
    p.mb-4 A continuación, conoceremos cómo se utiliza la IA para la optimización y análisis básicos en la eficiencia.

    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Optimización y análisis básicos en la eficiencia algorítmica

    .row.mb-4
      .col-xl-6
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-6
        p.mb-4 Para conocer más sobre el tema, lo invitamos a escuchar el siguiente pódcast.
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
          tiempo
          :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

    p.mb-4 Ahora, a través de ejemplos sencillos, se explicará el concepto de eficiencia algorítmica. 

    .row.bg-azul-2.px-4.px-xl-5.py-5
      .col-lg-11.mx-auto
        p.text-bold.mb-4 ¿Qué es la eficiencia algorítmica? 
        p.mb-4 Medir la velocidad y la cantidad de recursos necesarios para que un programa funcione. En términos prácticos, imagine que debe ir al centro de su ciudad y existen dos rutas que le permiten llegar al mismo destino:
        .row
          .col-12.col-xl-7
            ol.ps-4   
              li.d-flex.mb-4 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Ruta A: 30 min directo.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0.pe-xl-5 Ruta B: 45 min haciendo transbordo en la estación central. 
            p.mb-4.text-bold Responder
            p.mb-4 ¿Cuál es la ruta más eficiente? ¿Cuál es la ruta que menos recursos consume?
            p.mb-5 Si en ambas respuestas se seleccionó la ruta A, se ha comprendido la definición de eficiencia algorítmica.
          .col-12.col-xl-4.d-none.d-xl-block
            img.pb-4(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-11.col-xl-10.col-xxl-8.mx-auto.-mt-50px(data-aos="fade-up")
        .tarjeta.bg-white.box-shadow.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.ps-lg-4
              img(src="@/assets/componentes/pdf-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-2 PDF Ejemplo práctico en Python.
                  p.text-small.mb-0 Conozca un ejemplo de aplicación de eficiencia algorítmica en el PDF Ejemplo práctico en Python. 
                .col-sm-auto
                  a.download-btn.boton.bg-morado.text-white(:href="obtenerLink('/downloads/Anexo_Ejemplo práctico en Python.pdf')" target="_blank")
                    span.text-small.text-app Descargar
                    i.fas.fa-arrow-right.text-app

    p.mb-4 Imagine que se quiere comprar un artículo de lujo para su vehículo en un almacén de cadena.

    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        p.mb-4 <strong>Búsqueda ineficiente:</strong> revisar en cada sección de la tienda.
        p.mb-4 <strong>Búsqueda eficiente:</strong>
        .row
          .col-12
            ol.lista-ol--cuadro
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Buscar dentro de la sección de vehículos los artículos. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Buscar el artículo de lujo.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Encontrar el artículo de lujo.
    
    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4
        #t_3_2.titulo-segundo
          div.d-flex
            span.me-3 3.2  
            h2 Utilización de IA para la optimización algorítmica

        p.mb-5 La IA o Inteligencia Artificial puede ayudar a optimizar algoritmos de la siguiente manera:

        .row.mb-5.justify-content-center.pb-4
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style="width: 80px")
              p.px-1.text-small.mb-0.d-flex.text-center Encuentra mejores maneras de resolver los problemas.  
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style="width: 80px")
              p.px-1.text-small.mb-0.d-flex.text-center.mx-auto Predice la solución más rápido.
          .col-10.col-md-8.col-lg-6.col-xl-4(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style="width: 80px")
              p.px-1.text-small.mb-0.d-flex.text-center Ajusta automáticamente el código para que funcione mejor.

    .row.mb-4
      .col-11.col-xl-10.col-xxl-8.mx-auto.-mt-50px(data-aos="fade-up")
        .tarjeta.bg-white.box-shadow.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.ps-lg-4
              img(src="@/assets/componentes/pdf-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-2 PDF Ejemplo práctico en Python.
                  p.text-small.mb-0 Conozca un ejemplo de aplicación de eficiencia algorítmica en el PDF Ejemplo práctico en Python. 
                .col-sm-auto
                  a.download-btn.boton.bg-morado.text-white(:href="obtenerLink('/downloads/Anexo_Optimización a códigos sencillos.pdf')" target="_blank")
                    span.text-small.text-app Descargar
                    i.fas.fa-arrow-right.text-app
    p.mb-4 Le invitamos a observar el comportamiento y respuesta entregada por cada IA en los siguientes videos:

    .bg-azul-2.bg-full-width.mb-4
      div.px-5.pb-md-3.py-4
        figure.mb-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figure.mb-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-4 Todas las IA tienen una finalidad, dependerá de usted cuál desea usar, según su practicidad, facilidad de uso y tipo de respuesta obtenida. Le invitamos a poner en práctica los temas aprendidos y a usar la IA para mejorar el rendimiento de los algoritmos diseñados para garantizar su eficiencia. 

    .bg-full-width.border-top-9-azul
      .px-4.p-md-5
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.text-small Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small SFPIE UV. (2023). Pensat i Dret. Inteligencia artificial y uso de los algoritmos [video]. YouTube. https://youtu.be/utuJVI6FF5s
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small Silva Ramírez, E. (2018). Verificación formal de algoritmos: ejercicios resueltos. Servicio de Publicaciones de la Universidad de Cádiz. https://elibro.net/es/ereader/tecnologicadeloriente/33886?page=1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small Silva Ramírez, E. (2018). Corrección de algoritmos complejos: verificación formal. Servicio de Publicaciones de la Universidad de Cádiz. https://elibro.net/es/ereader/tecnologicadeloriente/33887?page=1
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
