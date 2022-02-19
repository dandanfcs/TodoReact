import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://localhost:44360/Todo',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default Api;