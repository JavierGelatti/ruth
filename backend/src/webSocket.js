import context from '~/context';

function buscarTemaActivo() {
  return 3;
}

export default function (wss) {
  return (ws) => {
    ws.on('message', (message) => {
      context.eventosRepo.guardarEvento(message, buscarTemaActivo());
      wss.clients.forEach((client) => {
        client.send(JSON.stringify([message]));
      });
    });
    context.eventosRepo.findEventosDeTema(buscarTemaActivo())
      .then((data) => {
        ws.send(JSON.stringify(data.map((eventData) => eventData.evento)));
      });
  };
}
