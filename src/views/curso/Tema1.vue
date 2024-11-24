<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 2: Algoritmos y la Revolución 4.0'" :subTitulo="'1. Algoritmos y la Revolución 4.0.'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4
        p.mb-4 Para comprender la relación entre los algoritmos y la Revolución 4.0, es necesario comenzar definiendo qué es la Revolución 4.0 y su impacto en la actualidad.  
        p.mb-5 La Revolución 4.0 es el resultado de cambios vertiginosos en aspectos económicos, tecnológicos e industriales, conozcamos más al respecto:
        .row.mb-4
          .col-10.col-md-6.col-xl-4.col-xxl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center.text-rosa.mb-0 1784
                p.text-bold.text-center Primera Revolución
                  p.mb-0.text-small  Máquina a vapor. James Watt.
          .col-10.col-md-6.col-xl-4.col-xxl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center.text-rosa.mb-0 1870
                p.text-bold.text-center Segunda Revolución
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small Energía eléctrica aplicada a la industria.  
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small  Fabricación en masa (Henry Ford)
          .col-10.col-md-6.col-xl-4.col-xxl-3.mb-4.mx-auto(data-aos="fade-down")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center.text-rosa.mb-0 1969
                p.text-bold.text-center Tercera Revolución
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small Automatización informática
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small Microprocesadores  
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small Computadores
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small  Electrónica
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small  Internet
          .col-10.col-md-6.col-xl-4.col-xxl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center.text-rosa.mb-0 Actualidad 
                p.text-bold.text-center Cuarta revolución
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small Sensores interconectados 
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small Internet de las cosas (IoT)
                div.d-flex
                  i.fas.fa-chevron-right.me-2.text-morado
                  p.mb-0.text-small Inteligencia Artificial (IA)

    .row.mb-5
      .col-12.col-xl-7.d-flex.flex-column
        p Este desarrollo tecnológico está impulsado por los procesos industriales masificados, el uso de plantas de producción, la implementación de energía eléctrica, la aplicación de la electrónica, el desarrollo de la informática hasta llegar al IoT o Internet of Things (Internet de las cosas), concepto que hace referencia a la interconexión que existe entre objetos de uso diario con internet y que permiten comunicarse con otros sistemas. 
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          p.pe-xl-3.mb-0(data-aos="fade-up") El IoT se fundamenta en una red de dispositivos interconectados, que pueden transmitir datos automáticamente; es decir, no requiere de humanos para su funcionamiento. Su aplicabilidad no solo se encuentra dentro de los sensores de máquinas industriales, sino que también lo podemos localizar en dispositivos inteligentes de uso doméstico. El término IoT se usa frecuentemente en áreas como: tecnología, automatización, análisis de datos, etc. 
        p.mb-0 IoT se convirtió en una pieza indispensable en el desarrollo de ciudades inteligentes y la automatización de los procesos industriales. 
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')  

    h2 ¿Qué es la Revolución 4.0?          
    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p Corresponde al proceso de migración tecnológica de la industria manufacturera y se fundamenta en cuatro pilares, los cuales son: 
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Mayor volumen de datos.
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Ordenadores más potentes y menos costosos.
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Análisis de datos.
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Interacción entre máquinas y humanos.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')  

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 Al aumentar el volumen de datos producido, crece la demanda de contar con equipos cada vez más potentes y de menor costo lo que, a su vez, conlleva a un análisis automático de los datos obtenidos que permiten mejorar continuamente la interacción entre las máquinas, robots, impresoras 3D, etc., y el talento humano. 
        p.mb-0 Traducido en términos fáciles de entender, no es más que la utilización de la tecnología actual, en beneficio de las empresas; conceptos como IoT, IA, entre otros, aparecen en esta etapa de modernización industrial y facilitan la conexión entre sensores, Inteligencia artificial e Internet de las cosas, para “digitalizar completamente” la cadena de valor.

    p.mb-5 Es así que, con la modernización tecnológica, aparecen nuevos conceptos y tecnologías, en el caso de la Revolución 4.0, los componentes que la engloban son: 

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sistemas ciberfísicos", :icon="require('@/assets/curso/unidad/img-11.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Sistemas ciberfísicos
            p(data-aos="fade-up") Tienen la capacidad de integrar, de manera natural, el mundo virtual con el mundo físico; una simulación, en realidad aumentada, puede tener repercusiones en el mundo real, permitir mover un objeto, ejecutar una transacción; en la actualidad, lo que antes nos parecía “imposible” entre la virtualidad y el espacio físico se puede materializar, gracias a los avances tecnológicos.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Internet de las Cosas o IoT", :icon="require('@/assets/curso/unidad/img-11.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Internet de las Cosas o IoT
            p(data-aos="fade-up") Permite la interconexión de dispositivos sin requerir atención humana para su funcionamiento; en este aspecto, se resaltan los sensores, conexiones a redes de datos, bluetooth , WiFi, los cuales permiten la interoperabilidad de los dispositivos y la integración de los componentes físicos.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Internet de Servicios o IOS", :icon="require('@/assets/curso/unidad/img-11.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Internet de Servicios o IOS
            p(data-aos="fade-up") Va más allá de servidores y redes de datos; ahora, gracias al IOS se pueden adquirir servicios, vía online, que antes no hubiésemos imaginado; la virtualización de servidores, Cloud Computing, análisis de datos con Inteligencia artificial, entre otros, son algunos de los ejemplos de aplicabilidad del IOS en la Revolución 4.0.

    .row.mb-4
      .col-12.col-lg-11.mx-auto
        .row
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-azul.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-13.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0 Para finalizar, las fábricas inteligentes y la manufactura aditiva, permiten la integración de CPS, IoT e IOS, para crear y producir objetos y productos.

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4(data-aos="fade-up") La actualidad demanda velocidad y la velocidad está relacionada con la eficiencia y es por eso que se llegará a la velocidad 5G, la que actualmente se encuentra en expansión en la mayoría de los países en el mundo, y que, desde principios del 2024, se cuenta con 1.6 millones de conexiones 5G y con la visión de llegar a 5.5 millones en el 2030 (5G Américas). Además, se espera aumentar, exponencialmente, las redes y el tráfico de datos, gracias a tecnologías como 5G-Advanced (GSMA, 2024) que sin lugar a duda impulsarán aún más el uso de la tecnología IoT. 
        p.mb-4 Las características que la industria 4.0 debe tener, son:  
        .row
          .col-12
            ol.lista-ol--cuadro
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Adaptación de la producción a los individuos. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Adaptación de las cadenas de producción, según el entorno y las exigencias del mismo.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Autoconciencia y seguimiento en el uso de productos. 
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Nuevos y avanzados paradigmas de interacción hombre-máquina.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 Optimización de la producción, gracias a la implementación del IoT.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')  

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        p.mb-4 Las palabras claves sobre tecnología que deberá tener en cuenta a la hora de hablar sobre tecnología 4.0 y las cuales son tendencia en la actualidad, son:
        AcordionA(tipo="b")
          .div(titulo="Robótica y automatización")
            p Edificios inteligentes, equipos ahorradores de energía, utilización de sensores, reducción del impacto energético. Este aspecto clave en la revolución 4.0, busca aplicar, a los procesos repetitivos, mayor seguridad, eficiencia y calidad.
          .div(titulo="Simulación")
            p Los simuladores permiten conocer “las posibles” tendencias de un sistema; por ejemplo, se puede implementar un modelo de simulación para conocer el gasto energético que puede generar un edificio con toda su infraestructura, antes de comenzar con su edificación; otro uso puede contemplar la utilización de herramientas, equipos, sensores, etc., en ambientes controlados para ver sus “reacciones” y prevenir fallas al momento de pasarlos a producción.
          .div(titulo="Integración de sistemas")
            p Al integrar diferentes arquitecturas físicas al componente digital, se puede hacer control, seguimiento y administración de toda la plataforma tecnológica, en tiempo real.
          .div(titulo="IoT")
            p Son los dispositivos interconectados, digitalmente, que permiten captar datos, procesarlos y convertirlos en información importante; un ejemplo de estos y que está en boga, es la utilización de relojes inteligentes que permiten conocer a su portador, la cantidad de oxígeno en sangre, presión, ritmo cardíaco, etc., cuya información es compartida a través de protocolos entre dispositivos: muy seguramente, al despertar, tendrá un informe en su teléfono móvil sobre la calidad de su sueño. Es de destacar que las ciudades están migrando su desarrollo hacia la conexión, es decir; será más sencillo conocer con anticipación, la ruta del servicio público de transporte, cuál es la vía más rápida para llegar a su destino, calidad del aire, condiciones climáticas, entre otros; todo lo anterior, debido a la posibilidad de conectarse al sistema central de la ciudad y obtener datos en tiempo real; entorno a esto, apunta el futuro en el desarrollo social sostenible.
    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Ciberseguridad")
            p No se puede contemplar un desarrollo tecnológico sin pensar en la posibilidad de una caída en el sistema, un ataque informático o una fuga de información; al avanzar el desarrollo en la tecnología moderna, también se han aumentado los niveles de protección que permiten resguardar los datos, los cuales se han convertido en el activo fijo más valioso en las organizaciones modernas.
          .div(titulo="Computación en la nube")
            p Anteriormente, cada organización disponía de su infraestructura tecnológica que permitía contar con servidores dedicados a la prestación de servicios informáticos, ocasionando un elevado consumo eléctrico y aumentando los costos de producción en los procesos; en la actualidad gracias al cloud computing, han surgido empresas dedicadas a la prestación de servicios en la nube, lo que permite a las compañías adquirir los “servicios” a su medida y reducir el consumo de energía eléctrica y requerir, cada vez, de menos espacio dedicado a la infraestructura tecnológica.
          .div(titulo="Manufactura aditiva")
            p También conocida como impresión en 3D, permite ir agregando capa tras capa de material fundido hasta completar un diseño o una pieza, y reduce costos al poder producir elementos nuevos, o reemplazar los componentes deteriorados en una máquina.
          .div(titulo="Realidad aumentada")
            p La recreación de espacios en ambientes virtuales ha tenido gran acogida en sectores como la industria y la construcción; la revolución industrial ha permitido conocer un edificio completo antes de su construcción, incluso recorrer sus espacios y ver los detalles como acabados, texturas, iluminación, entre otros.; al utilizar unos lentes especiales, el usuario se ve “sumergido” en una recreación realista de un ambiente lo que le ayudará a tomar la decisión que más se ajuste a sus gustos y exigencias; también las tiendas de compra masiva están usando la realidad aumentada para dar a conocer la previsualización de sus artículos, directamente sobre el espacio donde el cliente desea tenerlo en su hogar; con la utilización de esta nueva tecnología, se volverá cada vez más frecuente la incorporación de gadgets interconectados que permitan conocer más información sobre los productos, la ciudad y su entorno.
          .div(titulo="Datos masivos, el Big Data")
            p A diario se generan datos que son cargados en sistemas de información online; poder traducir toda esa “cantidad” de datos en información relevante que apoye la toma de decisiones empresariales, se ha convertido en uno de los grandes desafíos de nuestros tiempos. Poder predecir el patrón de comportamiento de los usuarios, la utilización de datos externos para brindar “experiencias” personalizadas a los usuarios, entre otros, son algunos de los muchos usos que se le pueden dar a los datos producidos. El “mal” uso de estos datos ha generado controversia debido a que las grandes compañías venden, comparten o comercializan la información producida por los usuarios, en sus sitios web o diferentes aplicaciones.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Para conocer un ejemplo de la utilización de los datos masivos, producidos por los usuarios a través de las redes sociales, le invitamos a ver la película “El dilema de las redes sociales” del director Jeff Orlowski disponible en las plataformas de streaming. 
        p Ahora bien, toda esa tecnología acompañada de sus avances, utiliza principios técnicos que permiten perfeccionar los sistemas e infraestructuras tecnológicas; desde el surgimiento del primer microprocesador, se han utilizado las compuertas lógicas para que los sistemas “decidan”, según la disponibilidad de recursos; los algoritmos también juegan un papel determinante en el desarrollo en el que nos encontramos en la actualidad. 

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Algoritmos en la automatización de procesos industriales

    .row
      div.px-5.pb-md-3.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          p.mb-5 En el contexto de la automatización industrial, se estudian distintos tipos de algoritmos que permiten optimizar tareas repetitivas mediante procesos estructurados y eficientes. Estos algoritmos, como los secuenciales, condicionales, iterativos y de búsqueda, son aplicados en áreas como robótica, control de calidad y gestión de inventarios para mejorar la precisión, aumentar la producción y reducir errores en sistemas automatizados sin intervención humana. A continuación, en el PDF Algoritmos en la automatización de procesos industriales, lo invitamos a ampliar la información. 
          a.d-flex.pe-4.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Algoritmos en la automatización de procesos industriales.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Algoritmos en la automatización de procesos industriales
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    h2 Controladores en la automatización. (on/off) PI - PID

    .row.mb-5
      .col-12.col-lg-10.col-xl-9.mb-5
        p.mb-4 Los controladores on/off son sistemas sencillos que activan o desactivan funciones, según las condiciones de una variable (si está por encima o por debajo del umbral). También conocido como Control Binario o Control todo o Nada, debido a que solo permiten dos estados ON (encendido) u OFF (apagado).
        p El principio de funcionamiento es simple, si la variable controlada es menor que el valor predeterminado; como consigna, el controlador enciende (ON).
      
      .col-12.col-md-11.mx-auto
        p.mb-4 <strong>Figura 1.</strong> Aplicabilidad de los controladores On/Off
        .row.mb-4.bg-azul-2.p-4.px-lg-5
          .col-6.col-xl-5.mx-auto.mb-4.mb-xl-0(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')  
          .col-12.col-xl-7.d-flex.flex-column
            p.text-bold Aplicaciones prácticas del mantenimiento predictivo con IA.  
            .d-flex.align-items-start.bg-amarillo.p-3.mb-3(data-aos="fade-up")
              div.d-flex
                img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  Calentadores
            .d-flex.align-items-start.bg-amarillo.p-3.mb-3(data-aos="fade-up")
              div.d-flex
                img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  Termostatos
            .d-flex.align-items-start.bg-amarillo.p-3.mb-3(data-aos="fade-up")
              div.d-flex
                img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  Controles de nivel

    h2 Ventajas y desventajas de los controladores On/Off

    .row.mb-5
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 Dentro de las ventajas, se encuentra la simplicidad y facilidad en su implementación, el bajo costo y poco mantenimiento; con respecto a las desventajas se pueden encontrar oscilaciones o ciclos repetitivos; no se recomienda su implementación en ciclos que exijan alta precisión, genera mayor desgaste por la repetición de sus ciclos on/off.
        div.d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") En resumen, los controladores On/Off se recomiendan en instalaciones de uso simple, donde el control continuo no sea necesario; sin embargo, para mejorar la precisión se pueden implementar controladores más avanzados como los PID (Proporcional, Integral y Derivativo) que permiten tener mayor estabilidad y precisión.  
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')  

    h2 Uso de IA. Algoritmos de control predictivo
    p.mb-4 Uso de IA. Algoritmos de control predictivo

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4
        h2 Aplicaciones prácticas. Sistemas de mantenimiento predictivo con IA.  
        p.mb-4 Antes de comenzar a definir técnicamente los sistemas de mantenimiento predictivo con IA, se hace necesario definir el mantenimiento predictivo, con el fin de dar a conocer en un concepto más amplio, la aplicación de este en los procesos industriales:

        .row
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Mantenimiento predictivo
                p.text-small.px-4.pb-2 Como su nombre lo indica, se encarga de predecir posibles fallos durante un proceso, también permite identificar piezas, elementos, componentes, etc., que requieran ser reemplazados, anticipando fallas en el sistema y garantizando su continuidad.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Mantenimiento predictivo con IA
                p.text-small.px-4.pb-2 Permite analizar grandes volúmenes de datos obtenidos de los sensores, todo en tiempo real; detectando patrones en el comportamiento del sistema y anticipándose a fallos, su objetivo es el de optimizar los procesos y reducir los costos en la operación de los procesos industriales.
    .row.mb-4
      .col-12.col-md-11.mx-auto
        p.mb-4 <strong>Figura 2.</strong> Aplicabilidad de los controladores On/Off
        .row.mb-5.bg-azul-2.p-4.px-lg-5
          .col-6.col-xl-5.col-xxl-4.mx-auto.mb-4.mb-xl-0(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')  
          .col-12.col-xl-7.col-xxl-8.d-flex.flex-column.justify-content-center
            p.text-bold Aplicaciones prácticas del mantenimiento predictivo con IA.  
            .d-flex.align-items-start.bg-amarillo.p-3.mb-3(data-aos="fade-up")
              div.d-flex
                img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  Controles de producción
            .d-flex.align-items-start.bg-amarillo.p-3.mb-3(data-aos="fade-up")
              div.d-flex
                img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  Monitoreo de sistemas electrónicos
            .d-flex.align-items-start.bg-amarillo.p-3.mb-3(data-aos="fade-up")
              div.d-flex
                img.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  Monitoreo de motores y turbinas

        .row.mb-5
          .d-flex.align-items-center.px-0
            .d-flex.align-items-center.bg-morado-claro.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-26.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0 El mantenimiento predictivo se realiza mucho antes de la implementación de algoritmos alimentados por IA; gracias al avance tecnológico, ahora se puede realizar el seguimiento a las ruedas y frenos en los ferrocarriles, medición de temperatura, ruido, vibración, etc., en plantas industriales; también se analizan los vuelos, consumos, comportamiento de las turbinas, sistemas hidráulicos, etc., en la aeronáutica; además, la IA permite realizar monitoreo de sistemas eléctricos en redes de energía; así se predicen sucesos mucho antes que ocurran y se realizan los ajustes pertinentes, para evitar que sucedan. 

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p Los beneficios esperados al implementar mantenimiento predictivo con IA, son:
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.mb-auto.mt-2(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Reducción en los tiempos de inactividad. 
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.mb-auto.mt-2(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Optimización en los costos.
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.mb-auto.mt-2(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Mejorar la vida útil en los equipos. 
        .d-flex.align-items-start.bg-azul.p-3.mb-3(data-aos="fade-up")
          div.d-flex
            img.me-2.d-flex.mb-auto.mt-2(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0  Mejorar la eficiencia operativa, al permitir que el sistema tome las decisiones de manera autónoma. 
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen') 

    p.text-center Algunos ejemplos de aplicación de los algoritmos utilizados en el mantenimiento predictivo, son:

    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Regresión lineal
          p.px-1.text-small.mb-0.d-flex.text-center Permite predecir el desgaste de un componente o pieza, antes que ocurra.
      .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Redes neuronales
          p.px-1.text-small.mb-0.d-flex.text-center Identifica patrones ocultos en el desgaste del componente
      .col-10.col-md-8.col-lg-6.col-xl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100(data-aos="fade-down")
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Análisis de series temporales
          p.px-1.text-small.mb-0.d-flex.text-center Monitoreo de variables o parámetros que van cambiando con el tiempo y cómo afectarían al sistema, estos cambios.
      .col-10.col-md-8.col-lg-6.col-xl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100(data-aos="fade-left")
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Máquinas de soporte vectorial (SVM)
          p.px-1.text-small.mb-0.d-flex.text-center De acuerdo con el estado del equipo se clasifican en normal o defectuoso.

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column(data-aos="fade-left")
        p El mantenimiento predictivo con IA ofrece soluciones eficientes a la industria, lo que se traduce en intervenciones precisas que garantizan la reducción en los costos operativos, prolongar el tiempo de uso de los equipos y mejorar el rendimiento operacional, al evitar fallos que generen caídas temporales en el sistema. 
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4
          p.pe-xl-3.mb-0(data-aos="fade-up") No se puede finalizar el tema sin hablar del impacto que ha tenido la revolución 4.0 en el campo del marketing; la tecnología e implementación de algoritmos que utilizan IA para optimizar, mejorar y predecir modelos de comportamiento en los usuarios, ha generado toda una nueva tendencia que crea paradojas y contradicciones en los consumidores actuales; la interconectividad garantiza la disponibilidad de cada uno de ellos, pero ¿cómo llamar su atención?   

    .bg-full-width.border-top-9-azul
      .px-4.p-md-5
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span Martínez Martínez, A. (Coord.) & Álvarez Medina, M. D. L. (Coord.). (2020). Industria 4.0 en México: elementos diagnósticos y puesta en práctica en sectores y empresas. Plaza y Valdés.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Calvo Fonseca, J. R. (2020). La educación 4.0 en México: reflexiones y propuestas desde la educación superior. Corporación Universitaria Minuto de Dios.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Hernández Ramos, E. M. & Peña Andrés, C. (2018). Cadena de suministro 4.0: beneficios y retos de las tecnologías disruptivas: (ed.). Marge Books.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Rojas, Á. (2022). El eslabón perdido del liderazgo 4.0. Bubok Publishing S.L.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Pablo Martín, J. (2019). Lean Energy 4.0: guía de implementación. Marge Books
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Izaguirre Castellanos, E. (2012). Sistemas de automatización. Editorial Feijóo.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Garrell Guiu, A. & Guilera Agüella, L. (2019). La industria 4.0 en la sociedad digital. Marge Books.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span Kotler, P., Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital. LID Editorial España.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')



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
