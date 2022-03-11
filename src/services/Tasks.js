import { helpHttp } from '../helpers/helpHttp';

const tasks = {};
const url = process.env.REACT_APP_API_URL;
const api = helpHttp();

tasks.all = async () => {
  const options = {
    headers: {
      'content-type': 'application/json',
    },
  };

  const resp = await api.get(`${url}/`, options);
  return resp;
};

tasks.create = async (data) => {
  const options = {
    body: data,
    headers: {
      'content-type': 'application/json',
    },
  };

  const resp = await api.post(`${url}`, options);
  return resp;
};

export default tasks;
