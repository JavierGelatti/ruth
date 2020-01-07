const eventos = [];

export default function (wss) {
  return (ws) => {
    ws.on('message', (message) => {
      // log the received message and send it back to the client
      eventos.push(message);
      wss.clients.forEach((client) => {
        client.send(JSON.stringify([message]));
      });
    });
    ws.send(JSON.stringify(eventos));
  };
}
