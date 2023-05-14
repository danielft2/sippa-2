import axios from 'axios';

const publicAPI = axios.create({
   baseURL: 'http://localhost:3333/'
});

const privateAPI = axios.create({
   baseURL: 'http://localhost:3333/'
});

export const api = {
   public: publicAPI,
   private: privateAPI
};
