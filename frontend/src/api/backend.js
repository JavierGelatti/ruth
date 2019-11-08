import Requester from './requester';

const requester = Requester.createDefaultRequester();

const Backend = {
  getReunion() {
    return requester.get('/reunion/temas');
  },

  empezarLaReunion() {
    return requester.post('/reunion');
  },

  getEstadoDeReunion() {
    return requester.get('/reunion/status');
  },
};

export default Backend;
