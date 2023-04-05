import { Movie, MovieWithFavorite } from "../types";

const getOneMovieWithFavorite = (
  movie?: Movie,
  favoriteMovies?: MovieWithFavorite[],
): MovieWithFavorite | null => {
  if (!movie) return null;

  return favoriteMovies?.find((fMovie) => fMovie.id === movie.id)
    ? { ...movie, isFavorite: true }
    : { ...movie, isFavorite: false };
};

export default getOneMovieWithFavorite;
