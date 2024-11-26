<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Diseño e implementación de algoritmos'" :subTitulo="'2. Implementación de algoritmos en lenguaje de programación básico Python, con ejemplos'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p Para adentrarnos en la utilización de lenguajes de programación y para ejemplos prácticos, se utilizará Python por su sencillez y fácil comprensión; es importante recordar algunos conceptos y retomarlos en esta unidad. 
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          p.pe-xl-3.mb-0(data-aos="fade-up") El pseudocódigo corresponde a una forma de escribir algoritmos, en la cual se estructura lógicamente un conjunto de instrucciones usando palabras, semejante a como se haría en un lenguaje de programación, pero sin la exigencia y rigidez de este último. 
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')  

    p.mb-4 A continuación se realizarán algunos ejemplos en los cuales se presenta el pseudocódigo y su “traducción” a Python, como lenguaje de programación utilizado, para describir el funcionamiento de las <strong>secuencias, condiciones y ciclos</strong>, estructuras básicas de la programación. 

    h2 Secuencias
    p.mb-4 Corresponden al orden lógico en el que debe ejecutarse cada instrucción del algoritmo.
    
    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-10.mx-auto
        p <strong>Tabla 3.</strong> Ejemplo secuencia en Python
        .tabla-a.mb-4
          table.text-center
            thead
              tr
                th.text-center Pseudocódigo
                th.text-center Lenguaje Python
            tbody
              tr.bg-gris
                td.d-flex.flex-column.w-fit.mx-auto.text-start
                  p.mb-3 Inicio
                  p.ms-4.mb-2 Definir num1 = 5
                  p.ms-4.mb-2 Definir num2 = 15
                  p.ms-4.mb-2 Suma = num1 + num2
                  p.ms-4.mb-3 Mostrar resultado
                  p Fin
                td.text-start.align-top.border-left-gris
                  .d-flex.flex-column.w-fit.mx-auto.text-start
                    p #Secuencia en Python
                    p.mb-2 num1 = 5
                    p.mb-2 num2 = 15
                    p.mb-2 suma = num1 + num2
                    p print("resultado =", suma)
                  
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-azul-claro.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-23.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Le invitamos a practicar y reforzar sus conocimientos llevando el código a un compilador en línea, verificando su funcionamiento, cambiando los valores asignados a cada variable y observando los cambios en el resultado; también puede intentar usar otra función como la multiplicación o división, pero recuerde cambiar el nombre de la variable, usando la mnemotecnia, según la operación matemática.
        p.mb-4 En los ejemplos, se utilizará el compilador online <strong>https://www.programiz.com/python-programming/online-compiler/</strong> como herramienta de programación.
        p.mb-0 Al copiar el código del ejemplo anterior y pegarlo en el compilador online, el resultado obtenido será el siguiente:
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')  

    p.mb-3 <strong>Figura 1.</strong> Captura de pantalla compilador online
    img.mb-4(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen', data-aos="fade-up")

    h2 Condición
    p.mb-4 Permite tomar decisiones dentro de la secuencia de pasos lógicos del algoritmo.
    .row.mb-4(data-aos="fade-left")
      .col-12.col-lg-10.mx-auto
        p <strong>Tabla 4.</strong> Ejemplo condición en Python
        .tabla-a.mb-4
          table.text-center
            thead
              tr
                th.text-center Pseudocódigo
                th.text-center Lenguaje Python
            tbody
              tr.bg-gris
                td.d-flex.flex-column.w-fit.mx-auto.text-start
                  p.mb-3 Inicio
                  p.ms-4.mb-2 Definir edad = 18
                  p.ms-4.mb-2 si edad >= 18 entonces
                  p.ms-5.mb-2 mostrar "Mayor de edad"
                  p.ms-4.mb-3 Sino
                  p.ms-5.mb-2 mostrar "Menor de edad"
                  p Fin
                td.text-start.align-top.border-left-gris
                  .d-flex.flex-column.w-fit.mx-auto.text-start
                    p #Condición en Python.
                    p.mb-2 edad = 18
                    p.mb-2 if edad >= 18:
                    p.ms-4.mb-2 print("Mayor de edad")
                    p.mb-2 else:
                    p.ms-4.mb-2 print("Menor de edad")

    p.mb-4 Nuevamente copie el código en el compilador online y verifique el funcionamiento.

    p.mb-3 <strong>Figura 2.</strong> Captura de pantalla compilador online
    img.mb-4(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen', data-aos="fade-up")

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-4.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-23.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Le invitamos a cambiar el valor de la variable, edad, por uno menor a 18; ejecute el código y observe el resultado obtenido. Responda: ¿cuál es el objetivo de la decisión dentro del algoritmo? ¿Cómo funciona?
    
    h2 Ciclos
    p.mb-4 Permiten ejecutar reiterativamente una parte del código, hasta cumplirse una condición; los más usados son: mientras o while y para o for.

    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-10.mx-auto
        p <strong>Tabla 5.</strong> Ejemplo ciclo while en Python
        .tabla-a.mb-4
          table.text-center
            thead
              tr
                th.text-center Pseudocódigo
                th.text-center Lenguaje Python
            tbody
              tr.bg-gris
                td.d-flex.flex-column.w-fit.mx-auto.text-start
                  p.mb-3 Inicio
                  p.ms-4.mb-2 Definir contador = 1
                  p.ms-4.mb-2 Mientras contador <= 10
                  p.ms-4.mb-2 Haga
                  p.ms-5.mb-2 mostrar contador
                  p.ms-5.mb-2 incrementar contador en 1
                  p Fin
                td.text-start.align-top.border-left-gris
                  .d-flex.flex-column.w-fit.mx-auto.text-start
                    p #Ciclo while en Python.
                    p.mb-2 contador = 1
                    p.mb-2 while contador <= 10:
                    p.ms-4.mb-2 print(contador)
                    p.mb-2 contador += 1
      p.mb-4 Nuevamente, copie el código en el compilador online y verifique el funcionamiento.

      p.mb-3 <strong>Figura 3.</strong> Captura de pantalla compilador online
      img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen', data-aos="fade-up")

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-23.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Le invitamos a cambiar el valor final del contador y verificar el funcionamiento; después, responda: ¿cuál es la función del ciclo, mientras, dentro del pseudocódigo? ¿Cómo funciona el ciclo, mientras?, ¿qué uso se le puede dar al ciclo, mientras, a la hora de escribir código?

    .row.mb-4(data-aos="fade-left")
      .col-12.col-lg-10.mx-auto
        p <strong>Tabla 6.</strong> Ejemplo ciclo For en Python
        .tabla-a.mb-4
          table.text-center
            thead
              tr
                th.text-center Pseudocódigo
                th.text-center Lenguaje Python
            tbody
              tr.bg-gris
                td.d-flex.flex-column.w-fit.mx-auto.text-start
                  p.mb-3 Inicio
                  p.ms-4.mb-2 Definir num1 = 4
                  p.ms-4.mb-2 res = 0
                  p.ms-4.mb-2 Para i desde 1 hasta 10 hacer
                  p.ms-5.mb-2 res = num1 * i
                  p.ms-5.mb-2 Mostrar "res"
                  p Fin
                td.text-start.align-top.border-left-gris
                  .d-flex.flex-column.w-fit.mx-auto.text-start
                    p #Ciclo For en Python.
                    p.mb-2 num1 = 4
                    p.mb-2 res = 0
                    p.mb-2 for i in range(1, 11):
                    p.ms-4.mb-2 res = num1 * i
                    p.ms-4.mb-2 print(res)
    p.mb-4 Nuevamente copie el código en el compilador online y verifique el funcionamiento.

    p.mb-3 <strong>Figura 4.</strong> Captura de pantalla compilador online
    img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen', data-aos="fade-up")

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-23.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Con el uso del ciclo, for, acabamos de crear la tabla de multiplicar del 4; al revisar el código se puede observar que el incremento se realiza de uno en uno, hasta 11; ¿por qué?, ¿qué pasa si se cambia el valor de num1? ¿Qué pasa si varía el rango a (2,11) o (3,11)? ¿Cuál sería la respuesta esperada? ¿Cómo puede ajustar el código para que el resultado presente solamente el valor del factor par, es decir, el resultado de la multiplicación de num1 por 2, 4, 6, 8, 10?

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Ejercicios: combinación de secuencias, condiciones y ciclos

    .row.mb-4
      .col-5.d-none.d-lg-block
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        p.mb-5 A medida que se va adentrando en el mundo de la programación, se irá encontrando situaciones en donde deberá implementar combinaciones de las estructuras básicas de programación, para resolver un ejercicio propuesto. A continuación, en el PDF <strong>Ejercicios</strong>, podrá conocer ejercicios relacionados con la combinación de secuencias, condiciones y ciclos. 
        a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.w-fit(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Ejercicios combinación de secuencias condiciones y ciclos.pdf')" target="_blank")
          img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
          p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejercicios
    
    .bg-full-width.border-top-9-azul
      .px-4.p-md-5
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.text-small Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small Pacheco, A. (2020). Algoritmos en cuarentena - Ciclos y decisiones (Episodio 2) [video]. YouTube. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span.text-small Cuevas Álvarez, A. (2016). Python 3: curso práctico. RA-MA Editorial. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span.text-small Hinojosa Gutiérrez, Á. (2015). Python paso a paso. RA-MA Editorial. 
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
