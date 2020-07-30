const API_KEY = 'fcc1e37afcfbb9a6490552fd3d885061';

const BASE_URL = 'https://api.themoviedb.org/3';

const api = async (url) => {
  const connector = url.indexOf('?') > -1 ? '&' : '?';
  const urlWithKey = `${BASE_URL}${url}${connector}api_key=${API_KEY}`;
  const response = await fetch(urlWithKey);
  return response.json();
};

export const discoverMovies = () => api('/discover/movie?sort_by=popularity.desc');
export const searchMovies = (query) => api(`/search/movie?query=${encodeURIComponent(query)}`);
export const getMovie = (id) => api(`/movie/${id}`);
