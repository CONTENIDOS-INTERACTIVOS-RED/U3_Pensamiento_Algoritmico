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
        unidad: 'UNIDAD 2.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 2.',
        numero: '1',
        titulo: 'Algoritmos y la Revolución 4.0.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Algoritmos en la automatización de procesos industriales',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 2.',
        numero: '2',
        titulo: 'Algoritmos y la Revolución 4.0',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ejemplos de aplicación de algoritmos y pseudocódigos ',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 2.',
        numero: '3',
        titulo: 'Big Data: procesamiento de datos masivos, mediante algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Ejemplos de algoritmos usando Big Data',
            hash: 't_3_1',
          },
        ],
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
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Pensamiento_Algoritmico_U2.pdf',
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
        'Calvo Fonseca, J. R. (2020). La educación 4.0 en México: reflexiones y propuestas desde la educación superior',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/194403?page=20',
    },
    {
      referencia:
        'Hernández Ramos, E. M. & Peña Andrés, C. (2018). Cadena de suministro 4.0: beneficios y retos de las tecnologías disruptivas',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/45161?page=8',
    },
    {
      referencia:
        'Martínez Martínez, A. (Coord.) & Álvarez Medina, M. D. L. (Coord.). (2020). Industria 4.0 en México: elementos diagnósticos y puesta en práctica en sectores y empresas',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/174182?page=58',
    },
    {
      referencia:
        'Paradojas del marketing para consumidores conectados Kotler, P. Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/269981?page=28',
    },
    {
      referencia:
        'Zahera-Pérez, M. (2021). Industria 4.0: Dirección e Ingeniería de Proyectos',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/72949?page=14',
    },
    {
      referencia:
        'Pablo Martín, J. (2019). Lean Energy 4.0: guía de implementación',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/117666?page=130',
    },
    {
      referencia:
        'Garrell Guiu, A. & Guilera Agüera, L. (2019). La industria 4.0 en la sociedad digital',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/105178?page=18',
    },
    {
      referencia: 'Rojas, A. (2022). El eslabón perdido del liderazgo 4.0',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/260204?page=1',
    },
    {
      referencia:
        'Izaguirre Castellanos, E. (2012). Sistemas de automatización',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/124330?page=72',
    },
    {
      referencia:
        'Meseguer Iglesias, R. (2014). Inteligencia artificial avanzada',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/57582?page=36',
    },
    {
      referencia:
        'Meseguer González, P. & López Montañés Badía, R. (2017). Inteligencia artificial',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/42319?page=5',
    },
    {
      referencia:
        'Casas Roma, J., Nin Guerrero, A. & López López, F. (2019). Big data: análisis de datos en entornos masivos',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/117744?page=23',
    },
    {
      referencia:
        'López Murphy, J. J. & Zarza, G. (2017). La ingeniería del big data: cómo trabajar con datos',
      link: 'https://elbro.net/esereader/tecnologicadeloriente/50093?page=55',
    },
  ],
  glosario: [
    {
      termino: 'Big Data',
      significado:
        'se define como el procesamiento de grandes volúmenes de datos que por su volumen (tamaño, velocidad, variedad) no pueden ser procesados de manera tradicional',
    },
    {
      termino: 'Controladores en la automatización <em>(on/off)</em>',
      significado:
        'son sistemas sencillos que activan o desactivan funciones según las condiciones de una variable',
    },
    {
      termino: 'gadget',
      significado:
        'o también conocido como artilugio es un accesorio tecnológico pequeño que cumple una función específica, suelen ser tecnológicos o electrónicos y destacan por su utilidad y fácil transporte',
    },
    {
      termino: 'IA',
      significado:
        'o inteligencia artificial es una rama de la informática que se enfoca en la creación de sistemas que replican con precisión tareas que normalmente harían los humanos, algunas de ellas son: reconocimiento de voz, procesamiento del lenguaje natural, toma de decisiones, predicción de patrones y visión por computadora',
    },
    {
      termino: 'IoT',
      significado:
        'o también conocido como Internet de las cosas es una red de dispositivos interconectados que pueden transmitir datos automáticamente, es decir; no requiere de humanos para su funcionamiento',
    },
    {
      termino: 'Mantenimiento predictivo',
      significado:
        'Se encarga de predecir posibles fallos durante un proceso, también permite identificar piezas, elementos, componentes, etc., que requieran ser reemplazados anticipando fallas en el sistema y garantizando su continuidad',
    },
    {
      termino: 'Manufactura aditiva',
      significado:
        'También conocida como impresión en 3D permite ir agregando capa tras capa de material fundido hasta completar un diseño o una pieza, reduce costos al poder producir elementos nuevos o reemplazar los componentes deteriorados en una máquina',
    },
    {
      termino: 'Realidad aumentada',
      significado: 'Recreación de espacios en ambientes virtuales',
    },
    {
      termino: 'Revolución 4.0',
      significado:
        'Es el resultado del desarrollo tecnológico impulsado por los procesos industriales masificados, el uso de plantas de producción, la implementación de energía eléctrica, la aplicación de la electrónica, el desarrollo de la informática hasta llegar al IoT o Internet Of Things (Internet de las cosas), concepto que hace referencia a la interconexión que existe entre objetos de uso diario con internet y que permiten comunicarse con otros sistemas',
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
