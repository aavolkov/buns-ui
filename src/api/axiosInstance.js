import axios from 'axios';

const host = process.env.REACT_APP_API_ENDPOINT;
export const baseUrl = `http://localhost:8080/api/`;

const instance = axios.create({
  baseURL: `${baseUrl}`,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    Pragma: 'no-cache',
  },
});

instance.defaults.headers.common['Accept-Language'] = 'ru-RU, ru';

instance.interceptors.request.use(config => {
  return {
    ...config,
    url: encodeURI(config.url),
  };
});

export default instance;
