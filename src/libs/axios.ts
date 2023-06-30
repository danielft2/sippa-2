import axios from 'axios';
import { StorageAuth } from '@/storage/StorageAuth';
import { AppError } from '@/utils/app-error';

const token = StorageAuth.retrieveToken();

const publicAPI = axios.create({
   baseURL: 'http://localhost:3333/'
});

const privateAPI = axios.create({
   baseURL: 'http://localhost:3333/'
});

if (token) privateAPI.defaults.headers['Authorization'] = `Bearer ${token}`;

privateAPI.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.response?.data && error.response.data?.message) {
         const message =
            error.response.data.statusCode === 500
               ? 'Ocorreu um erro inesperado, tente novamente mais tarde.'
               : error.response.data.message;

         return Promise.reject(
            new AppError(message, error.response.data.statusCode)
         );
      } else return Promise.reject(new AppError('Server Unavailable', 500));
   }
);

export const api = {
   public: publicAPI,
   private: privateAPI
};
