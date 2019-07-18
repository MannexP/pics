import axios from 'axios';


export default axios.create({
    // 
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID e608d21abf8aec446d2e3cd9eeaf3735b3bf58e9bcc071ae42d7038f2a60099c"
      }
});