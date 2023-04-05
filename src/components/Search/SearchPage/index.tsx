import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useIntl } from "react-intl";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import getMoviesWithFavorite from "../../../common/getMoviesWithFavorite";
import { useGetMoviesByTypeQuery } from "../../../services/movieService";
import { getFavoriteMovies } from "../../../redux/common/common-selectors";
import { useAppSelector } from "../../../redux/hooks";
import messages from "./messages";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const intl = useIntl();
  const favoriteMovies = useAppSelector(getFavoriteMovies);

  const { data: moviesData, isLoading } = useGetMoviesByTypeQuery({
    query: query ?? "",
    type: "movie",
    page,
  });

  const movies = getMoviesWithFavorite(moviesData?.results, favoriteMovies);

  return (
    <Box>
      <Typography variant="h5" mb={6}>
        {intl.formatMessage(messages.searchResultTitle)}:{" "}
        <span style={{ fontStyle: "italic" }}>{query}</span>
      </Typography>

      {isLoading && <Loader />}

      {moviesData?.results.length ? (
        <MoviesList
          movies={movies}
          withPagination
          totalPages={moviesData.total_pages}
          changePage={setPage}
        />
      ) : (
        <Box mt={5}>
          <Typography>{intl.formatMessage(messages.noResultsText)}</Typography>
        </Box>
      )}
    </Box>
  );
};
export default SearchPage;
