import { pick } from 'lodash';

export default function sanitizar(objeto) {
  // TODO: Podría ser Object.keys(_models.default.Tema.rawAttributes);?
  return pick(objeto, ['tipo', 'titulo', 'descripcion', 'duracion', 'autor', 'obligatoriedad',
    'linkDePresentacion', 'propuestas', 'temasParaRepasar', 'cantidadDeMinutosDelTema']);
}
