import axios from 'axios';

const BASE_URL = "http://localhost:7000";
let TOKEN = "";

if(localStorage.getItem('profile')) {
    TOKEN = JSON.parse(localStorage.getItem('token'));
}
console.log("token", TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });


  export const getToken = () => {
    return JSON.parse(localStorage.getItem('token'));
  }

  const getAxios = () => {
    return axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
    });
  }

  export const userRequest = getAxios;


