import { Movie, MovieWithFavorite } from "../types";

const getMoviesWithFavorite = (
  movies?: Movie[],
  favoriteMovies?: MovieWithFavorite[],
): MovieWithFavorite[] => {
  const moviesWithFavorite: MovieWithFavorite[] = movies
    ? movies.map((movie) =>
        favoriteMovies?.find((fMovie) => fMovie.id === movie.id)
          ? { ...movie, isFavorite: true }
          : { ...movie, isFavorite: false },
      )
    : [];

  return moviesWithFavorite;
};

export default getMoviesWithFavorite;
