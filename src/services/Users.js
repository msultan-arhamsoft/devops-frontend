import { helpHttp } from '../helpers/helpHttp';

const users = {};
const url = 'http://localhost:8080/v1/users';
const api = helpHttp();

users.all = async () => {
  const options = {
    headers: {
      'content-type': 'application/json',
    },
  };

  const resp = await api.get(`${url}/`, options);
  return resp;
};

users.create = async (data) => {
  const options = {
    body: data,
    headers: {
      'content-type': 'application/json',
    },
  };

  const resp = await api.post(`${url}`, options);
  return resp;
};

export default users;
