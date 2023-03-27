import React from "react";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoviesList from "../../Unknown/MovieList";
import Loader from "../../Unknown/Loader";

import { useGetTrendsQuery } from "../../../services/movieService";
import messages from "./messages";

const HomePage: React.FC = () => {
  const intl = useIntl();

  const { data: trendsMoviesData, isLoading } = useGetTrendsQuery({
    type: "all",
  });

  return (
    <Box pt={18} pb={5} height="100%" display="flex" flexDirection="column">
      <Typography variant="h4">{intl.formatMessage(messages.title)}</Typography>
      <Typography mb={6}>{intl.formatMessage(messages.subtitle)}</Typography>

      {isLoading && <Loader />}

      {trendsMoviesData?.results && (
        <MoviesList movies={trendsMoviesData.results} />
      )}
    </Box>
  );
};
export default HomePage;
