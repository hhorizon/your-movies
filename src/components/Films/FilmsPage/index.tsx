import React, { useState, useContext } from "react";
import { collection, CollectionReference } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import { useGetTrendsQuery } from "../../../services/movieService";
import db from "../../../common/firebaseDb";
import getMoviesWithFavorite from "../../../common/getMoviesWithFavorite";
import { AuthContext } from "../../Unknown/AuthProvider";
import { MovieWithFavorite } from "../../../types";
import messages from "./messages";

const FilmsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { user } = useContext(AuthContext);
  const intl = useIntl();

  const favoritesRef = collection(
    db,
    `users/${user?.uid}/favoriteMovies`,
  ) as CollectionReference<MovieWithFavorite>;

  // TODO error notification
  const { data: favoriteMovies } =
    useFirestoreCollectionData<MovieWithFavorite>(favoritesRef);

  const { data: trendsMoviesData, isLoading } = useGetTrendsQuery({
    type: "movie",
    page,
  });

  const moviesWithFavorite = getMoviesWithFavorite(
    trendsMoviesData?.results,
    favoriteMovies,
  );

  return (
    <Box pt={18} pb={5} height="100%" display="flex" flexDirection="column">
      <Typography variant="h4">{intl.formatMessage(messages.title)}</Typography>
      <Typography mb={6}>{intl.formatMessage(messages.subtitle)}</Typography>

      {isLoading && <Loader />}

      {trendsMoviesData?.results && (
        <MoviesList
          movies={moviesWithFavorite}
          withPagination
          totalPages={trendsMoviesData.total_pages}
          changePage={setPage}
        />
      )}
    </Box>
  );
};

export default FilmsPage;
