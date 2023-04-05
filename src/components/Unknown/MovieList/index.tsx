import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MoviesListItem from "../MovieListItem";
import Pagination from "../Pagination";

import { MovieWithFavorite } from "../../../types";

interface MoviesListProps {
  movies: MovieWithFavorite[];
  withPagination?: boolean;
  totalPages?: number;
  changePage?: (page: number) => void;
}

const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  withPagination = false,
  totalPages,
  changePage,
}) => {
  const showPagination =
    withPagination && !!totalPages && totalPages !== 0 && !!changePage;

  return (
    <Box>
      <Grid container spacing={6} columns={{ xs: 4, md: 6, lg: 8, xl: 10 }}>
        {movies.map((movie) => (
          <Grid key={movie.id} item xs={2}>
            <MoviesListItem movie={movie} />
          </Grid>
        ))}
      </Grid>

      {showPagination && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            count={totalPages}
            onChange={(_, page) => changePage(page)}
          />
        </Box>
      )}
    </Box>
  );
};

export default MoviesList;
