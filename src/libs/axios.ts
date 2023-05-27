import axios from 'axios';
import { StorageAuth } from '@/storage/StorageAuth';

const token = StorageAuth.retrieveToken();

const publicAPI = axios.create({
   baseURL: 'http://localhost:3333/'
});

const privateAPI = axios.create({
   baseURL: 'http://localhost:3333/'
});

if (token) privateAPI.defaults.headers['Authorization'] = `Bearer ${token}`;

export const api = {
   public: publicAPI,
   private: privateAPI
};
