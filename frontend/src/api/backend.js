import Requester from './requester';

const requester = Requester.createDefaultRequester();

const Backend = {
  getReunion() {
    return requester.get('/reunionDeRoots');
  },

  empezarReunion() {
    return requester.post('/reunionDeRoots', { abierta: true });
  },

  cerrarReunion() {
    return requester.put('/reunionDeRoots', { abierta: false });
  },
};

export default Backend;
