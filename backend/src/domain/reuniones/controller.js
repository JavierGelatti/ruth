const ReunionController = ({ reunionesRepo: repo }) => ({
  reunion: async (req, res) => {
    const reunion = await repo.findLastCreated();

    res.status(200).send(reunion);
  },

  temas: async (req, res) => {
    const temas = [
      {
        tipo: 'proponerPinos',
        id: 100,
        duracion: 'CORTO',
        idDeAutor: 1,
        ultimoModificador: null,
        idDeReunion: 98,
        autor: 'Ailen Muñoz',
        prioridad: 2,
        titulo: 'Proponer pinos a root',
        descripcion: null,
        idsDeInteresados: [
          1,
          1,
        ],
        obligatoriedad: 'NO_OBLIGATORIO',
        idDePropuestaOriginal: null,
        fechaDePropuestaOriginal: null,
        esRePropuesta: false,
        propuestas: [
          {
            pino: 'Ailu',
            sponsor: {
              id: 1,
              name: 'Ailen Muñoz',
              login: 'ailen',
              backofficeId: '88',
              creation: '2019-10-28T17:29:57.844Z',
              modification: '2019-10-28T17:29:57.844Z',
              mail: 'ailen.munoz@10pines.com',
            },
          },
        ],
      },
      {
        tipo: 'conDescripcion',
        id: 102,
        duracion: 'CORTO',
        idDeAutor: 1,
        ultimoModificador: 'Ailen Muñoz',
        idDeReunion: 98,
        autor: 'Ailen Muñoz',
        prioridad: 3,
        titulo: 'tema',
        descripcion: '.asjdalkjdajld',
        idsDeInteresados: [
          1,
        ],
        obligatoriedad: 'NO_OBLIGATORIO',
        idDePropuestaOriginal: null,
        fechaDePropuestaOriginal: null,
        esRePropuesta: false,
      },
      {
        tipo: 'conDescripcion',
        id: 103,
        duracion: 'CORTO',
        idDeAutor: 1,
        ultimoModificador: 'Ailen Muñoz',
        idDeReunion: 98,
        autor: 'Ailen Muñoz',
        prioridad: 4,
        titulo: 'otro tema',
        descripcion: 'sklsjsdfjs',
        idsDeInteresados: [],
        obligatoriedad: 'NO_OBLIGATORIO',
        idDePropuestaOriginal: null,
        fechaDePropuestaOriginal: null,
        esRePropuesta: false,
      },
      {
        tipo: 'repasarActionItems',
        id: 104,
        duracion: 'MEDIO',
        idDeAutor: 1,
        ultimoModificador: null,
        idDeReunion: 98,
        autor: 'Ailen Muñoz',
        prioridad: null,
        titulo: 'Ver action items anteriores',
        descripcion: null,
        idsDeInteresados: [],
        obligatoriedad: 'OBLIGATORIO',
        idDePropuestaOriginal: null,
        fechaDePropuestaOriginal: null,
        esRePropuesta: false,
        temasParaRepasar: [
          {
            id: 97,
            idDeMinuta: 94,
            tema: {
              tipo: 'repasarActionItems',
              id: 93,
              duracion: 'MEDIO',
              idDeAutor: 1,
              ultimoModificador: null,
              idDeReunion: 88,
              autor: 'Ailen Muñoz',
              prioridad: null,
              titulo: 'Ver action items anteriores',
              descripcion: null,
              idsDeInteresados: [],
              obligatoriedad: 'OBLIGATORIO',
              idDePropuestaOriginal: null,
              fechaDePropuestaOriginal: null,
              esRePropuesta: false,
              temasParaRepasar: [
                {
                  id: 87,
                  idDeMinuta: 83,
                  tema: {
                    tipo: 'conDescripcion',
                    id: 82,
                    duracion: 'CORTO',
                    idDeAutor: 1,
                    ultimoModificador: 'Ailen Muñoz',
                    idDeReunion: 78,
                    autor: 'Ailen Muñoz',
                    prioridad: 4,
                    titulo: 'otro',
                    descripcion: null,
                    idsDeInteresados: [
                      1,
                    ],
                    obligatoriedad: 'NO_OBLIGATORIO',
                    idDePropuestaOriginal: null,
                    fechaDePropuestaOriginal: null,
                    esRePropuesta: false,
                  },
                  actionItems: [],
                  conclusion: null,
                  fueTratado: false,
                },
                {
                  id: 86,
                  idDeMinuta: 83,
                  tema: {
                    tipo: 'conDescripcion',
                    id: 81,
                    duracion: 'CORTO',
                    idDeAutor: 1,
                    ultimoModificador: 'Ailen Muñoz',
                    idDeReunion: 78,
                    autor: 'Ailen Muñoz',
                    prioridad: 3,
                    titulo: 'un titulo',
                    descripcion: 'askdjalkds',
                    idsDeInteresados: [
                      1,
                    ],
                    obligatoriedad: 'NO_OBLIGATORIO',
                    idDePropuestaOriginal: null,
                    fechaDePropuestaOriginal: null,
                    esRePropuesta: false,
                  },
                  actionItems: [],
                  conclusion: null,
                  fueTratado: false,
                },
                {
                  id: 85,
                  idDeMinuta: 83,
                  tema: {
                    tipo: 'conDescripcion',
                    id: 80,
                    duracion: 'CORTO',
                    idDeAutor: 1,
                    ultimoModificador: 'Ailen Muñoz',
                    idDeReunion: 78,
                    autor: 'Ailen Muñoz',
                    prioridad: 2,
                    titulo: 'temis',
                    descripcion: null,
                    idsDeInteresados: [
                      1,
                    ],
                    obligatoriedad: 'NO_OBLIGATORIO',
                    idDePropuestaOriginal: null,
                    fechaDePropuestaOriginal: null,
                    esRePropuesta: false,
                  },
                  actionItems: [],
                  conclusion: null,
                  fueTratado: false,
                },
                {
                  id: 84,
                  idDeMinuta: 83,
                  tema: {
                    tipo: 'conDescripcion',
                    id: 79,
                    duracion: 'MEDIO',
                    idDeAutor: 1,
                    ultimoModificador: 'Ailen Muñoz',
                    idDeReunion: 78,
                    autor: 'Ailen Muñoz',
                    prioridad: 1,
                    titulo: 'Ver action items anteriores',
                    descripcion: null,
                    idsDeInteresados: [],
                    obligatoriedad: 'OBLIGATORIO',
                    idDePropuestaOriginal: null,
                    fechaDePropuestaOriginal: null,
                    esRePropuesta: false,
                  },
                  actionItems: [],
                  conclusion: null,
                  fueTratado: false,
                },
              ],
            },
            actionItems: [],
            conclusion: null,
            fueTratado: false,
          },
          {
            id: 96,
            idDeMinuta: 94,
            tema: {
              tipo: 'proponerPinos',
              id: 90,
              duracion: 'CORTO',
              idDeAutor: 1,
              ultimoModificador: null,
              idDeReunion: 88,
              autor: 'Ailen Muñoz',
              prioridad: 3,
              titulo: 'Proponer pinos a root',
              descripcion: null,
              idsDeInteresados: [],
              obligatoriedad: 'NO_OBLIGATORIO',
              idDePropuestaOriginal: null,
              fechaDePropuestaOriginal: null,
              esRePropuesta: false,
              propuestas: [
                {
                  pino: 'pinaso',
                  sponsor: {
                    id: 1,
                    name: 'Ailen Muñoz',
                    login: 'ailen',
                    backofficeId: '88',
                    creation: '2019-10-28T17:29:57.844Z',
                    modification: '2019-10-28T17:29:57.844Z',
                    mail: 'ailen.munoz@10pines.com',
                  },
                },
              ],
            },
            actionItems: [],
            conclusion: null,
            fueTratado: false,
          },
          {
            id: 95,
            idDeMinuta: 94,
            tema: {
              tipo: 'conDescripcion',
              id: 92,
              duracion: 'CORTO',
              idDeAutor: 1,
              ultimoModificador: 'Ailen Muñoz',
              idDeReunion: 88,
              autor: 'Ailen Muñoz',
              prioridad: 2,
              titulo: 'algo largo',
              descripcion: ' la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.\n\n¿Por qué lo usamos?\nEs un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).\n\n\n¿De dónde viene?\nAl contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ips',
              idsDeInteresados: [
                1,
                1,
                1,
              ],
              obligatoriedad: 'NO_OBLIGATORIO',
              idDePropuestaOriginal: null,
              fechaDePropuestaOriginal: null,
              esRePropuesta: false,
            },
            actionItems: [],
            conclusion: null,
            fueTratado: false,
          },
        ],
      },
    ];

    res.status(200).send(temas);
  },

  estadoDeReunion: async (req, res) => {
    const reunion = await repo.findLastCreated();
    const { abierta } = reunion;
    res.status(200).send(abierta);
  },

  crear: async (req, res) => {
    const { abierta } = req.body;
    const nuevaReunion = await repo.create({ abierta });

    res.status(201).send(nuevaReunion);
  },

  actualizar: async (req, res) => {
    const { abierta } = req.body;

    const reunionAActualizar = await repo.findLastCreated();
    await reunionAActualizar.update({ abierta });
    res.status(200).send();
  },

});

export default ReunionController;
