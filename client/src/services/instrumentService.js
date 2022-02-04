import axios from "axios";

const url = "http://localhost:3001/instrument/";

export const create = (data, id) => axios.post(`${url}create/${id}`, data);
