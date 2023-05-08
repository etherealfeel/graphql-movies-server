const { getPopular, getDetails, discoverMovie } = require('../modules/movies');
const { Movie } = require('../modules/movies/entities/Movie');
const { getList } = require('../modules/genres')

async function movies(parent, args, { locale }) {
  const data = await discoverMovie(args.filter, locale);
  return data;
}

async function moviesByIds(parent, { ids }) {
  const requests = ids.map((id) => getById(id, locale));

  const data = await Promise.all(requests);

  const movies = data.map(({ data }) => new Movie(data));

  return movies;
}

async function genres(_, {}, {locale}) {
  return await getList(locale)
}


module.exports = {
  movies,
  moviesByIds,
  genres
};
