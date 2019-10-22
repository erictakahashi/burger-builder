import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-d29de.firebaseio.com'
});

export default instance;