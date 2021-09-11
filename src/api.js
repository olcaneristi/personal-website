import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/olcaneristi',
});

export const getRepos = async () => {
  return await api.get('/repos').then(res => res.data);
};
