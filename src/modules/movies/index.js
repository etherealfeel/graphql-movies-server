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

module.exports = {
  getPopular,
  getById
};
