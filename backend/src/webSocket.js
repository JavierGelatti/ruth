import context from '~/context';

export default function (wss) {
  return (ws) => {
    ws.on('message', (message) => {
      context.eventosRepo.guardarEvento(message, JSON.parse(message).idTema);
      wss.clients.forEach((client) => {
        client.send(JSON.stringify([message]));
      });
    });
    context.eventosRepo.findAllEventos()
      .then((data) => {
        ws.send(JSON.stringify(data.map((eventData) => eventData.evento)));
      });
  };
}
