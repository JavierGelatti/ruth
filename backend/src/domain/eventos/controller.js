import context from '~/context';

const Controller = (wss) => ({

  publicar: async (req) => {
    const message = req.body;
    await context.eventosRepo.guardarEvento(JSON.stringify(message), message.idTema);
    wss.clients.forEach((client) => {
      client.send(JSON.stringify([message]));
    });
  },

});

export default Controller;
