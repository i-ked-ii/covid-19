/* eslint-disable no-else-return */
/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import join from 'url-join';
import Swal from 'sweetalert2';
const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

const instance = axios.create({
    baseURL: process.env.APP_API_HOST_CORONAVIRUS_STATISTICS,
    withCredentials: true,
    timeout: 1000,
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': process.env.RAPID_API_CORONAVIRUS_STATISTICS,
    },
})

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(error.response)
    } else if (error.response.status === 429) {
      Swal.fire({
        text:
          'Too many login attempts from your address. Please wait 5 minutes before trying again.',
        type: 'error',
        timer: 3000,
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    } else if (!error.response) {
      Swal.fire({
        title: 'การเชื่อมต่อผิดพลาด',
        text: 'โปรดตรวสอบอินเตอร์เน็ตของท่าน',
        type: 'error',
        timer: 3000,
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
      });
      return Promise.reject({
        code: 'NOT_CONNECT_NETWORK',
        message: 'NETWORK_CONNECTION_MESSAGE',
      });
    }
    return Promise.reject(error);
  },
);

export const httpClient = instance;
