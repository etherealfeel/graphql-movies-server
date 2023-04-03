function movies(parent, args, context) {
  return {
    page: 1,
    totalPages: 10,
    totalResults: 10,
    results: [
      {
        id: 0,
        title: 'Movie Title',
        releaseDate: 'release date',
        posterPath: '',
      },
    ],
  };
}

module.exports = {
  movies,
};
