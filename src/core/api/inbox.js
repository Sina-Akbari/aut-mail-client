import Axios from 'axios';

export const getInboxAPI = async (offset, limit) => {
  return await Axios.get('https://jsonplaceholder.typicode.com/users');
};
