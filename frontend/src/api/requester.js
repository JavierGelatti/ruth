import * as axios from 'axios';

const backendUrl = '/api';

const extractResponse = (response) => response.data;

const handleError = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  return Promise.reject(error);
};

const Requester = {
  createDefaultRequester: () => {
    const defaultRequester = axios.create({
      baseURL: backendUrl,
      timeout: 7000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    defaultRequester.interceptors.response.use(
      extractResponse,
      handleError,
    );

    return defaultRequester;
  },
};

export default Requester;
