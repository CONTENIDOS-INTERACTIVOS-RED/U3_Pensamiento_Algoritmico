<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 2: Algoritmos y la Revolución 4.0'" :subTitulo="'unidad 2: Algoritmos y la Revolución 4.0'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column(data-aos="fade-right")
        p.mb-4 La Inteligencia Artificial o IA, está definida como «un conjunto de técnicas, algoritmos y herramientas que nos permiten resolver problemas para los que es necesario cierto grado de inteligencia» (Ramírez, 2017); es una rama de la informática que se enfoca en la creación de sistemas que replican, con precisión, tareas que normalmente harían los humanos; algunas de ellas son: reconocimiento de voz, procesamiento del lenguaje natural, toma de decisiones, predicción de patrones y visión por computadora. Algunas IA imitan procesos cognitivos de los humanos, utilizando algoritmos y modelos matemáticos. 
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    p.mb-4 Algunos ejemplos sencillos de utilización de la IA en tareas cotidianas, son: 

    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')

      .tarjeta.bg-amarillo.p-4(x="47%" y="14%" numero="+")
        .h5.mb-2 Asistentes virtuales
        p Interpretación de comandos de voz.
      .tarjeta.bg-amarillo.p-4(x="55%" y="29.5%" numero="+")
        .h5.mb-2 Sistemas de recomendación
        p Utilizan la IA para recomendar contenido multimedia.
      .tarjeta.bg-amarillo.p-4(x="57%" y="49.5%" numero="+")
        .h5.mb-2 Automatización del hogar
        p Utilización de IA en las cámaras y aspiradoras para detectar presencia de objetos.
      .tarjeta.bg-amarillo.p-4(x="55%" y="70%" numero="+")
        .h5.mb-2 Diagnóstico médico
        p De acuerdo a exámenes clínicos, se usa la IA para detección de enfermedades.
      .tarjeta.bg-amarillo.p-4(x="47%" y="85.5%" numero="+")
        .h5.mb-2 Chatbots
        p Automatización en la atención al cliente utilizando IA para anticipar las preguntas frecuentes de los clientes.


    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Ejemplos de aplicación de algoritmos y pseudocódigos 

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        .row.mb-5
          div.px-5.pb-md-3.d-flex
            .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
              p.mb-5 A continuación se presentan algunos ejemplos prácticos de algoritmos junto con su representación en pseudocódigo, mostrando cómo resolver problemas específicos de forma estructurada y clara. A través de estos ejemplos, se busca ilustrar cómo los algoritmos permiten descomponer problemas complejos en pasos lógicos, facilitando la comprensión y la implementación en diversos lenguajes de programación.
              a.d-flex.pe-4.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Ejemplos de aplicación de algoritmos y pseudocódigos.pdf')" target="_blank")
                img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
                p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos de aplicación de algoritmos y pseudocódigos
                
            .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
              img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

        p.mb-5 Tipos de algoritmos comunes en IA:

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Supervisados
              p.px-1.text-small.mb-0.d-flex.text-center Utilización de datos etiquetados para entrenar el modelo.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-down")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style="width: 80px")
              p.text-bold.mb-4.text-center No supervisados
              p.px-1.text-small.mb-0.d-flex.text-center Encuentra patrones en datos no etiquetados.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Aprendizaje por refuerzo
              p.px-1.text-small.mb-0.d-flex.text-center Aprendizaje a través de prueba y error; optimización de acciones, según las recompensas.
          
        .d-flex.align-items-center.col-11.col-md-10.col-lg-8.mb-5.mx-auto(data-aos="fade-up")
          div.d-flex.align-items-center.bg-azul.px-3.py-4
            img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-37.svg', alt='Texto que describa la imagen')
            p.pe-xl-5.mb-0 Los algoritmos, anteriormente descritos, enseñan cómo la IA se aplica a diferentes contextos, mejorando la eficiencia en tareas cotidianas mediante predicción, optimización y automatización. 

    p.mb-4 Algunos ejemplos de usos actuales de la IA, son:
    p.mb-4 <strong>Tabla 1.</strong> Aplicaciones IA de uso gratuito

    .tabla-a.mb-5.table-1
      table
        thead
          tr
            th.bg-morado.text-center(width="15%")
            th.text-center.pt-4.pb-5 
              span.table-1 IA de uso frecuente
            th.text-center(width="50%")
        tbody
          tr
          tr
            td.text-bold.border-right-gris ChatGPT 
            td.border-right-gris https://chat.openai.com
            td Uno de los chatbots más utilizados, permite a través de "chats" responder a conversaciones, preguntas complejas, ayudar en tareas cotidianas, etc. 
          tr
            td.text-bold.border-right-gris Dall-E-3
            td.border-right-gris https://openai.com/dall-e
            td Herramienta de generación de imágenes, basada en textos. Permite crear fácilmente, arte digital.
          tr
            td.text-bold.border-right-gris Midjourney
            td.border-right-gris https://www.midjourney.com
            td Se focaliza en la creación de imágenes hiperrealistas, utilizando IA.
          tr
            td.text-bold.border-right-gris GitHub Copilot
            td.border-right-gris https://github.com/features/copilot
            td Herramienta útil para los programadores; gracias a la IA, sugiere ajustes, modificaciones y soluciones a los códigos.
          tr
            td.text-bold.border-right-gris Synthesia
            td.border-right-gris https://www.synthesia.io
            td Permite generar videos con avatares digitales que leen textos personalizados. Se utiliza en el ámbito corporativo e institucional.

    .bg-full-width.border-top-9-azul
      .px-4.p-md-5
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span EDteam. (2023). Conceptos básicos y aplicaciones de Inteligencia Artificia. [video]. YouTube. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Zahera-Pérez, M. (2021). Industria 4.0 y la Dirección e Ingeniería de Proyectos. Servicio de Publicaciones de la Universidad de Cádiz. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Meseguer González, P. & López de Mántaras Badia, R. (2017). Inteligencia artificial. Editorial CSIC Consejo Superior de Investigaciones Científicas. 
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
