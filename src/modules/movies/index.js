const axios = require('axios');
const { Movies } = require('./entities/Movies');
const { API_BASE_URL, API_KEY } = require('../../config');

const getPopular = async (page, locale) => {
  const result = await axios.get(
    `${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=${locale}&page=${page}`,
  );

  return new Movies(result.data);
};

const getById = (id, locale) => {
  return axios.get(
    `${API_BASE_URL}movie/${id}?api_key=${API_KEY}&language=${locale}`,
  );
};

const discoverMovie = async(filter, language) => {
  const result = await axios.get(`${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&year=${filter.year}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genre}`);

  return new Movies(result.data);
}


module.exports = {
  getPopular,
  getById,
  discoverMovie
};
