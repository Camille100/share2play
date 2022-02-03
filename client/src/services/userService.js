import axios from 'axios';

const url = 'http://localhost:3001/user';

export const registration = (data) => axios.post(`${url}`, data);
export const connexion = (data) => axios.post(`${url}`, data);
