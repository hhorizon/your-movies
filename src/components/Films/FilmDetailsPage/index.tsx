import React, { useMemo } from "react";
import { useIntl } from "react-intl";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FilmDescription from "../FilmDescription";
import MovieDetailsTabs from "../../Unknown/MovieDetailsTabs";
import NotFoundPage from "../../Unknown/NotFoundPage";
import Loader from "../../Unknown/Loader";

import getOneMovieWithFavorite from "../../../common/getOneMovieWithFavorite";
import { useGetFilmByIdQuery } from "../../../services/movieService";
import { getFavoriteMovies } from "../../../redux/common/common-selectors";
import { useAppSelector } from "../../../redux/hooks";
import messages from "./messages";

type FilmDetailsPageParams = {
  movieId: string;
};

const FilmDetailsPage: React.FC = () => {
  const { movieId } = useParams() as FilmDetailsPageParams;
  const navigate = useNavigate();
  const location = useLocation();
  const intl = useIntl();
  const favoriteMovies = useAppSelector(getFavoriteMovies);

  const navigatePathname = useMemo(() => {
    const state = location.state as { from: string };
    if (state && state.from) {
      return state.from;
    }
    return "/";
  }, [location]);

  const { data: film, isLoading, error } = useGetFilmByIdQuery(movieId);

  const movieWithFavorite = getOneMovieWithFavorite(film, favoriteMovies);

  const onClickBack = () => {
    navigate(navigatePathname);
  };

  if (error) return <NotFoundPage />;

  return (
    <Box>
      {isLoading && <Loader />}

      {movieWithFavorite && (
        <Box>
          <Box mb={5}>
            <Button variant="outlined" onClick={onClickBack}>
              {intl.formatMessage(messages.backButton)}
            </Button>
          </Box>

          <Box mb={5}>
            <FilmDescription film={movieWithFavorite} />
          </Box>

          <Box>
            <MovieDetailsTabs type="movie" movieId={movieId} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FilmDetailsPage;
