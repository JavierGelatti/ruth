import fetch from 'node-fetch';

const getTemasRoots = () => {
    const temasRootsHost = process.env.TEMAS_ROOTS_HOST;
    const temasRootsApiKey = process.env.TEMAS_ROOTS_API_KEY;
  
    return fetch(`${temasRootsHost}/api/v2/temas?apiKey=${temasRootsApiKey}`).then(
      response => response.json())
  };

const getTemasRootsMock = () => {
  return Promise.resolve( require('./temas-fixture.json') );
}

const VotacionDeRoots = {

    getTemasRoots: process.env.NODE_ENV === 'test' ? getTemasRootsMock : getTemasRoots

}

export default VotacionDeRoots;