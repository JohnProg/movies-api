import axios from 'axios';

const URL = 'http://www.omdbapi.com/?t=';
const API_KEY = '&apikey=cbf6669e';

export const fetchMovies = async (title) => await axios.get(`${URL}${title}${API_KEY}`);