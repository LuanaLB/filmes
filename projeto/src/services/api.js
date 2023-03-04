import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da  API: /movie/now_playing?api_key=bc84b2ba8a96ee9a0c5932bdb1dd5ae0

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;