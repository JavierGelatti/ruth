var fetch = require('node-fetch');

const getTemasRoots = () => {
    const temasRootsHost = process.env.TEMAS_ROOTS_HOST;
    const temasRootsApiKey = process.env.TEMAS_ROOTS_API_KEY;
  
    return fetch(`${temasRootsHost}/api/v2/temas?apiKey=${temasRootsApiKey}`).then(
      response => response.json())
  };

const VotacionDeRoots = {

    getTemasRoots

}

export default VotacionDeRoots;