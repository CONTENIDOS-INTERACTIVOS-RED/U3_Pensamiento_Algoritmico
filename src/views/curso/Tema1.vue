<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Diseño e implementación de algoritmos'" :subTitulo="'1. Conceptos generales en el diseño de algoritmos eficientes'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Antes de comenzar con el desarrollo de este tema, es importante que repase los conceptos generales de algoritmos, así podrá comprender con mayor grado de precisión cada uno de los ejemplos aquí utilizados, además de proponer soluciones de mejora para cada caso. 
        .d-flex.align-items-start.bg-azul-claro.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-4.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") En la construcción de algoritmos se pueden encontrar diferentes enfoques que permiten dar solución a los problemas computacionales. Los paradigmas en el diseño de algoritmos son como un maletín repleto de herramientas, cada una con una finalidad específica, así; podrá utilizar según las fortalezas y el caso propuesto alguna de ellas. Como señala Mancilla Herrera (2015), "el dominio de diferentes paradigmas de diseño te permitirá abordar problemas complejos de manera sistemática y eficiente" (p. 67).
        p.mb-0 A continuación se darán a conocer los grandes rasgos en los fundamentos del diseño de algoritmos. 
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Fundamentos del diseño algorítmico

    p.mb-4 Los principios que rigen el diseño de un algoritmo son:

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Corrección", :iconUrl="require('@/assets/curso/unidad/img-6.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Corrección
            p(data-aos="fade-up") Para todas las entradas  de datos válidos se deberá producir la salida correcta. 
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Eficiencia", :iconUrl="require('@/assets/curso/unidad/img-7.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Eficiencia
            p(data-aos="fade-up") Los recursos como tiempo de ejecución y memoria utilizada deberán utilizarse de la manera más óptima.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Simplicidad", :iconUrl="require('@/assets/curso/unidad/img-8.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Simplicidad
            p(data-aos="fade-up") El código debe ser claro y preciso.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Modularidad", :iconUrl="require('@/assets/curso/unidad/img-9.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Modularidad
            p(data-aos="fade-up") Se debe dividir el problema en segmentos manejables.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Escalabilidad", :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Escalabilidad
            p(data-aos="fade-up") Incluso al incrementar los datos de entrada el código deberá funcionar eficientemente.

    p.mb-4 Algunos de los paradigmas más importantes utilizados a la hora de producir algoritmos son: 
    p.mb-3 <strong>Tabla 1</strong> Paradigmas más utilizados al producir algoritmos

    .tabla-a.mb-4
      table.text-center
        thead
          tr
            th.text-center(width="20%") Paradigma
            th.text-center Características
            th.text-center Aplicaciones prácticas
        tbody
          tr
            td.text-bold.bg-gris.h-100.align-baseline.text-start.border-right-gris Divide y vencerás
            td.text-start.pb-0.border-right-gris
              p.mb-3 Los pasos que sigue este paradigma son:
              p.mb-1.ms-3 1. Dividir
              p.mb-1.ms-3 2. Conquistar
              p.mb-3.ms-3 3. Combinar
            td.bg-gris.align-baseline.text-start
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Ordenamiento (MergeSort, QuickSort).
 
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Multiplicación de matrices de Strassen.

              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Transformada rápida de Fourier (FFT).
          tr
            td.text-bold.align-baseline.text-start.border-right-gris Divide and <i>Conquer</i>
            td.text-start.pt-0.bg-white.border-bottom-gris.border-right-gris
              p.mb-3 En el paso 1, se descompone el problema en subproblemas; posteriormente, en el paso 2 se resuelven cada uno de esos “subproblemas, usando recursividad”; para finalizar, se utiliza combinar, para unir las soluciones a los subproblemas.
            td.bg-gris.border-bottom-gris

          tr
            td.bg-gris.border-bottom-gris.border-right-gris
            td.bg-white.text-start.border-bottom-gris(colspan="2") Este paradigma permite abordar problemas complejos dividiéndolos en subproblemas más pequeños y manejables. Como señala Mancilla Herrera (2015), "la estrategia divide y vencerás, es fundamental en el diseño de algoritmos eficientes, permitiendo reducir la complejidad de problemas aparentemente intratables" (p. 45).

          tr
            td.bg-gris.text-bold.align-baseline.text-start.border-right-gris Programación dinámica
            td.bg-white.border-bottom-gris.align-baseline.text-start.border-right-gris
              p.mb-3 Se utiliza cuando:
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Los problemas se superponen.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Los problemas tienen una subestructura óptima.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0.pe-xl-5 Las soluciones de los subproblemas se pueden almacenar.
            td.bg-gris.border-bottom-gris.align-baseline.text-start
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Memorización de resultados.  
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Eliminación de cálculos redundantes.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Optimización de subproblemas.

          tr
            td.bg-gris.border-bottom-gris.border-right-gris
            td.bg-gris.text-start.border-bottom-gris(colspan="2") Cuando se enfrenta a problemas con subproblemas superpuestos, la programación dinámica es la mejor aliada. Esta técnica almacena resultados intermedios, para evitar cálculos redundantes, mejorando significativamente la eficiencia.

          tr
            td.bg-white.align-baseline.text-start.text-bold.border-right-gris Algoritmos voraces
            td.text-start.pb-0.border-right-gris.bg-white
              p.mb-3 Principios de diseño:
              p.mb-1.ms-3.pe-xxl-5 <strong>1. Selección voraz:</strong> elegir la mejor opción disponible. 
              p.mb-1.ms-3.pe-xxl-5 <strong>2. Factibilidad:</strong> verificar si la elección mantiene una solución viable.
              p.mb-3.ms-3.pe-xxl-5 <strong>3. Optimización local:</strong> buscar el óptimo en cada paso.

            td.bg-white.align-baseline.text-start.pb-0
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Problema de la mochila (Knapsack Problem).  
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0  Problema de la moneda mínima (Coin Change Problem).
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0  Árboles de expansión mínima (Minimum Spanning Tree).
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0  Algoritmo de Huffman (Compresión de datos).
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Problema de selección de actividades.

          tr
            td.text-bold.align-baseline.text-start.border-right-gris Greedy
            td.text-start.pt-0.bg-white.border-bottom-gris.border-right-gris
              p.mb-0 Según Silva Ramírez (2018), "los algoritmos voraces toman decisiones localmente óptimas en cada paso, esperando llegar a una solución globalmente óptima" (p. 145).
            td.bg-white.border-bottom-gris
          
          tr
            td.bg-white.border-bottom-gris.border-right-gris
            td.bg-white.text-start.border-bottom-gris(colspan="2") En situaciones donde se requiera tomar decisiones paso a paso, los algoritmos voraces permiten hacer la mejor elección local en cada momento, buscando alcanzar una solución óptima global.

          tr
            td.bg-gris.border-right-gris.text-bold.align-baseline.text-start Vuelta atrás
            td.bg-white.border-bottom-gris.border-right-gris.align-baseline.text-start
              p.mb-3 Este paradigma es esencial para la búsqueda exhaustiva, donde se requiere:
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0.pe-xl-4 Explorar todas las posibilidades.
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0.pe-xl-4 Deshacer decisiones que no produzcan soluciones.
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0.pe-xl-4 Encontrar todas las soluciones posibles. 
            td.bg-white.border-bottom-gris.align-baseline.text-start
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Sudoku.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Problema de las N reinas.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Generación de subconjuntos.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Búsqueda de caminos en laberintos.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Resolución de problemas de partición.
              div.d-flex.mb-1
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Solución de puzzles y juegos.

          tr  
            td.bg-gris.text-bold.align-baseline.text-start.border-right-gris.border-bottom-gris Backtracking
            td.bg-gris.text-start.border-bottom-gris(colspan="2") El <em>backtracking</em> es una herramienta que permite explorar muchas combinaciones posibles, “especialmente cuando no hay un criterio directo para saber, de inmediato, cuál es la mejor opción”.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Análisis y optimización de eficiencia
    
    .row.mb-4
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .d-flex.align-items-start.bg-4.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-17.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La eficiencia es un aspecto crucial en el desarrollo de algoritmos. Como señala Castillo Romero (2019), "la diferencia entre un algoritmo eficiente y uno ineficiente, puede significar la diferencia entre resolver un problema en segundos o en años" (p. 178). Por su parte, Silva Ramírez (2018), "el análisis de eficiencia no solo nos permite comparar algoritmos, sino que también nos ayuda a predecir su comportamiento ,en diferentes escenarios" (p. 78).

    p.mb-3 <strong>Tabla 2.</strong> Técnicas de optimización de eficiencia

    .tabla-a.mb-4
      table.text-center
        tbody
          tr
            td.bg-morado.text-white.text-bold.border-bottom-white(rowspan="2" width="25%") Métricas de rendimiento
            td.bg-gris.border-right-gris(width="30%") Tiempo de ejecución
            td.bg-gris
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Tiempo real (wall-clock time).
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Tiempo de CPU.
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Número de operaciones básicas.
          tr
            td.bg-white.border-right-gris Uso de memoria
            td.bg-white
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Memoria estática. 
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Memoria dinámica.
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Pila de llamadas recursivas.
          
          tr
            td.bg-morado.text-white.text-bold.border-bottom-white(width="25%") Notación asintótica
            td.bg-gris.border-right-gris Notación asintótica
            td.bg-gris.text-start.pe-xl-5 La notación asintótica permite describir el comportamiento del algoritmo sin depender de detalles de implementación específicos.

          tr
            td.bg-morado.text-white.text-bold.border-bottom-white(rowspan="2" width="25%") Técnicas de optimización
            td.bg-gris.border-right-gris(width="30%") Optimización de código
            td.bg-gris.text-start
              p.mb-3 Mejorar partes del código para que sea más eficiente aplicando:
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Eliminación de código innecesario.
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Simplificar operaciones. 
          tr
            td.bg-white.border-right-gris Optimización de bucles
            td.bg-white
              p.mb-3.text-start.pe-xl-5 Se enfoca en la optimización de bucles o ciclos, algunas de las técnicas son:
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Reducir el número de iteraciones. 
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Terminar antes de tiempo el bucle. 
              div.d-flex.mb-1.ms-3
                i.fas.fa-chevron-right.fs-18px.me-2.text-morado
                p.fs-18px.mb-0 Mover operaciones fuera del bucle. 

    .row.mb-5
      .col-12.col-xl-8.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Estas técnicas de optimización de algoritmos, son útiles al trabajar con grandes cantidades de datos o cuando se debe optimizar el programa para que responda más rápido.
        p.mb-0 La finalidad del concepto de un algoritmo eficiente se centra en el diseño y análisis de soluciones que permitan resolver de manera ágil, y utilizar la menor cantidad de recurso posible, como tiempo de ejecución y memoria, es decir; la eficiencia se traduce en la capacidad del algoritmo de realizar su tarea, utilizando la menor cantidad de medios posibles.  
      .d-none.d-xl-block.col-xl-4.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')  

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Importancia de los algoritmos eficientes

    p.mb-4 A continuación, se resumen algunas de las principales importancias de los algoritmos eficientes:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="14%" y="62%" numero="+")
        .h5.mb-2 Ahorro de tiempo
        p Un algoritmo eficiente es aquel que se ejecuta en menos tiempo.
      .tarjeta.bg-white.p-4(x="33%" y="21%" numero="+")
        .h5.mb-2 Optimización de recursos
        p La eficiencia permite que se utilicen menos recursos como memoria, energía, CPU, importante en el desarrollo de algoritmos que se ejecuten en equipos con limitaciones físicas, como dispositivos móviles o sistemas embebidos.
      .tarjeta.bg-white.p-4(x="67%" y="21%" numero="+")
        .h5.mb-2 Escalabilidad
        p Los algoritmos eficientes permiten manejar el crecimiento en el volumen de datos, sin que su rendimiento se vea afectado; esto es importante en aplicaciones que operen grandes bases de datos o que requieran procesar grandes volúmenes de datos en poco tiempo.
      .tarjeta.bg-white.p-4(x="86%" y="62%" numero="+")
        .h5.mb-2 Reducción de costos 
        p En entornos comerciales y empresariales, un algoritmo reduce el costo de operación, debido a que utiliza menos infraestructura para llevar a cabo su trabajo.

    p.mb-4 En resumen, el concepto de algoritmos eficientes, se enfoca en la creación de soluciones que se ejecuten de manera óptima y económica posible. Lo anterior es vital para el desarrollo de software y sistemas de entornos donde los recursos son limitados o se deba priorizar el rendimiento. 

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-4.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Imagine dos algoritmos para ordenar una lista de números. Uno de ellos usa un método simple que compara cada número con los demás (como el <em>Bubble Sort</em>), mientras que el otro utiliza un método más optimizado (como el <em>Merge Sort</em>). Ambos logran ordenar la lista, pero <strong>Merge Sort</strong> lo hace en mucho menos tiempo para listas grandes, porque tiene una eficiencia mucho mayor, en términos de tiempo de ejecución.

    p.mb-4 Para practicar y perfeccionar los conceptos adquiridos en este primer tema de la unidad, le invitamos a leer los siguientes libros: 

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/en/ereader/tecnologicadeloriente/68438?page=21") Moreno, E. (2012). Grafos: fundamentos y algoritmos. Editorial ebooks Patagonia - J.C. Sáez Editor.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/69931?page=1") Mancilla Herrera, A. (2015). Diseño y construcción de algoritmos. Universidad del Norte.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/106523?page=1") Nolasco Valenzuela, J. S. (2018). Python: aplicaciones prácticas. RA-MA Editorial.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=tf4qLcKk6ZU") LinuxChad. (2023). El origen de Python [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data() {
    return {
      items: [
        {
          text: 'Siempre debe tener un inicio.',
        },
        {
          text:
            'Deberá ser preciso, contemplar el orden estructural y secuencial del proceso y establecer prioridades.',
        },
        {
          text:
            'Debe estar definido, lo que a su vez traduce en que cada vez que se ejecute el algoritmo, se obtienen los mismos resultados.',
        },
        {
          text:
            'Siempre debe tener un fin, deberá terminar el algún momento; es decir, un número de pasos establecido.',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.SplitContainer
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(232,238,253,1) 0%, rgba(232,238,253,1) 50%, rgba(255,255,255,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB

.PurpleContainer
  background-color: rgb(232,238,253)

.SplitContainer2
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(232,238,253,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB
</style>
