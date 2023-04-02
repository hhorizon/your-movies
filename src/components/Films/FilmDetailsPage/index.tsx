import React, { useMemo, useContext } from "react";
import { collection, CollectionReference } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";
import { useIntl } from "react-intl";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FilmDescription from "../FilmDescription";
import MovieDetailsTabs from "../../Unknown/MovieDetailsTabs";
import NotFoundPage from "../../Unknown/NotFoundPage";
import Loader from "../../Unknown/Loader";

import { useGetFilmByIdQuery } from "../../../services/movieService";
import db from "../../../common/firebaseDb";
import getOneMovieWithFavorite from "../../../common/getOneMovieWithFavorite";
import { AuthContext } from "../../Unknown/AuthProvider";
import { MovieWithFavorite } from "../../../types";
import messages from "./messages";

type FilmDetailsPageParams = {
  movieId: string;
};

const FilmDetailsPage: React.FC = () => {
  const { movieId } = useParams() as FilmDetailsPageParams;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const intl = useIntl();

  const navigatePathname = useMemo(() => {
    const state = location.state as { from: string };
    if (state && state.from) {
      return state.from;
    }
    return "/";
  }, [location]);

  const favoritesRef = collection(
    db,
    `users/${user?.uid}/favoriteMovies`,
  ) as CollectionReference<MovieWithFavorite>;

  // TODO error notification
  const { data: favoriteMovies } =
    useFirestoreCollectionData<MovieWithFavorite>(favoritesRef);

  const { data: film, isLoading, error } = useGetFilmByIdQuery(movieId);

  const movieWithFavorite = getOneMovieWithFavorite(film, favoriteMovies);

  const onClickBack = () => {
    navigate(navigatePathname);
  };

  if (error) return <NotFoundPage />;

  return (
    <Box pt={18} pb={5} height="100%" display="flex" flexDirection="column">
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
