const { getPopular, getById } = require('../modules/movies');
const { Movie } = require('../modules/movies/entities/Movie');

async function movies(parent, args) {
  const data = await getPopular(args.page);
  return data;
}

async function moviesByIds(parent, { ids }) {
  const requests = ids.map((id) => getById(id));

  const data = await Promise.all(requests);

  const movies = data.map((movie) => new Movie(movie.data));

  return movies;
}

module.exports = {
  movies,
  moviesByIds,
};
