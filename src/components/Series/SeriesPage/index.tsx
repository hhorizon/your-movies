import React, { useState } from "react";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import getMoviesWithFavorite from "../../../common/getMoviesWithFavorite";
import { useGetTrendsQuery } from "../../../services/movieService";
import { getFavoriteMovies } from "../../../redux/common/common-selectors";
import { useAppSelector } from "../../../redux/hooks";
import messages from "./messages";

const SeriesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const intl = useIntl();
  const favoriteMovies = useAppSelector(getFavoriteMovies);

  const { data: trendsMoviesData, isLoading } = useGetTrendsQuery({
    type: "tv",
    page,
  });

  const movies = getMoviesWithFavorite(
    trendsMoviesData?.results,
    favoriteMovies,
  );

  return (
    <Box>
      <Typography variant="h4">{intl.formatMessage(messages.title)}</Typography>
      <Typography mb={6}>{intl.formatMessage(messages.subtitle)}</Typography>

      {isLoading && <Loader />}

      {trendsMoviesData?.results && (
        <MoviesList
          movies={movies}
          withPagination
          totalPages={trendsMoviesData.total_pages}
          changePage={setPage}
        />
      )}
    </Box>
  );
};

export default SeriesPage;
