import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://localhost:44360/Todo'
  });

  export default Api;