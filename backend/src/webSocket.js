// import context from '~/context';

const eventos = [];

// function buscarTemaActivo() {
//   return 1;
// }

export default function (wss) {
  return (ws) => {
    ws.on('message', (message) => {
      eventos.push(message);
      // context.eventosRepo.guardarEvento(message, buscarTemaActivo());
      wss.clients.forEach((client) => {
        client.send(JSON.stringify([message]));
      });
    });
    ws.send(JSON.stringify(eventos));
    // context.eventosRepo.findEventosDeTema(buscarTemaActivo())
    //   .then(eventos => {
    //     ws.send(JSON.stringify(eventos));
    //   });
  };
}
