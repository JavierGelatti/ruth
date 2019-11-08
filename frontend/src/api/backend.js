import Requester from './requester';

const requester = Requester.createDefaultRequester();

const Backend = {
  getReunion() {
    return requester.get('/reunion/temas');
  },

  empezarLaReunion() {
    return requester.post('/reunion', { abierta: true });
  },

  reunionAbierta() {
    return requester.get('/reunion/abierta');
  },

  cerrarReunion() {
    return requester.put('/reunion', { abierta: false });
  },
};

export default Backend;
