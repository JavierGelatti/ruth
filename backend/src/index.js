/**
 * Iniciar las dependencias
 */

import '~/bootstrap';
import server from '~/server';

/**
 * Obtener el puerto
 */

const port = process.env.BACKEND_PORT || '3000';

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Levantado en ${port} 🚀`);
});
