export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 2.',
        numero: '1',
        titulo: 'Conceptos generales en el diseño de algoritmos eficientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos del diseño algorítmico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis y optimización de eficiencia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Importancia de los algoritmos eficientes',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 2.',
        numero: '2',
        titulo:
          'Implementación de algoritmos en lenguaje de programación básico Python, con ejemplos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Ejercicios: combinación de secuencias, condiciones y ciclos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 2.',
        numero: '3',
        titulo:
          'Utilización de IA para la optimización y análisis básicos en la eficiencia algorítmica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Optimización y análisis básicos en la eficiencia algorítmica',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Utilización de IA para la optimización algorítmica',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Cuevas Álvarez, A. (2016). Python 3: curso práctico. RA-MA Editorial.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/106404?page=1',
    },
    {
      referencia:
        'Hinojosa Gutiérrez, Á. (2015). Python paso a paso. RA-MA Editorial.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/107213?page=1',
    },
    {
      referencia:
        'Mancilla Herrera, A. (2015). Diseño y construcción de algoritmos. Universidad del Norte.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69931?page=1',
    },
    {
      referencia:
        'Moreno, E. (2012). Grafos: fundamentos y algoritmos. Editorial ebooks Patagonia - J.C. Sáez Editor.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/68438?page=21',
    },
    {
      referencia:
        'Nolasco Valenzuela, J. S. (2018). Python: aplicaciones prácticas. RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106523?page=1',
    },
    {
      referencia:
        'Silva Ramírez, E. (2018). Corrección de algoritmos complejos: verificación formal. Servicio de Publicaciones de la Universidad de Cádiz.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33887?page=1',
    },
    {
      referencia:
        'Silva Ramírez, E. (2018). Verificación formal de algoritmos: ejercicios resueltos. Servicio de Publicaciones de la Universidad de Cádiz.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33886?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Corrección',
      significado:
        'Para todas las entradas de datos válidos se deberá producir la salida correcta.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Los recursos como tiempo de ejecución y memoria utilizada deberán utilizarse de la manera más óptima.',
    },
    {
      termino: 'Simplicidad',
      significado: 'El código debe ser claro y preciso.',
    },
    {
      termino: 'Modularidad',
      significado: 'Se debe dividir el problema en segmentos manejables.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Incluso al incrementar los datos de entrada el código deberá funcionar eficientemente.',
    },
    {
      termino: 'Algoritmo eficiente',
      significado:
        'Se centra en el diseño y análisis de soluciones que permitan resolver de manera ágil y utilizando la menor cantidad de recursos posibles como tiempo de ejecución y memoria.',
    },
    {
      termino: 'Pseudocódigo',
      significado:
        'Corresponde a una forma de escribir algoritmos en la cual se estructura lógicamente un conjunto de instrucciones usando palabras, semejante a como se haría en un lenguaje de programación pero sin la exigencia y rigidez de este último.',
    },
    {
      termino: 'Condición',
      significado:
        'Permiten tomar decisiones dentro de la secuencia de pasos lógicos del algoritmo.',
    },
    {
      termino: 'Ciclos',
      significado:
        'Permiten ejecutar reiterativamente una parte del código hasta cumplirse una condición, los más usados son mientras o while y para o for.',
    },
    {
      termino: 'Secuencias',
      significado:
        'Corresponden al orden lógico en el que debe ejecutarse cada instrucción del algoritmo.',
    },
    {
      termino: 'Python',
      significado:
        'Lenguaje de programación de alto nivel, fácil de leer y escribir, ampliamente utilizado en diversas áreas de la tecnología.',
    },
    {
      termino: 'Teoría de la Complejidad Computacional',
      significado:
        "Es el fundamento que permite comprender y predecir el comportamiento de los algoritmos que se desarrollan. Según Ortega Candel (2018), 'la teoría de la complejidad computacional proporciona el marco teórico necesario para comprender y predecir el comportamiento de los algoritmos en diferentes escenarios' (p. 134).",
    },
    {
      termino: 'Eficiencia Algorítmica',
      significado:
        'Medir la velocidad y la cantidad de recursos necesarios para que un programa funcione.',
    },
    {
      termino: 'Promt',
      significado:
        'En IA es un fragmento de texto que se introduce como instrucción para generar respuestas específicas o realizar tareas.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
