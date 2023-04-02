import React, { useMemo } from "react";
import { useIntl } from "react-intl";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SeriesDescription from "../SeriesDescription";
import MovieDetailsTabs from "../../Unknown/MovieDetailsTabs";
import NotFoundPage from "../../Unknown/NotFoundPage";
import Loader from "../../Unknown/Loader";

import { useGetSeriesByIdQuery } from "../../../services/movieService";
import messages from "./messages";

type SeriesDetailsPageParams = {
  movieId: string;
};

const SeriesDetailsPage: React.FC = () => {
  const { movieId } = useParams() as SeriesDetailsPageParams;
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

  const { data: series, isLoading, error } = useGetSeriesByIdQuery(movieId);

  const onClickBack = () => {
    navigate(navigatePathname);
  };

  if (error) return <NotFoundPage />;

  return (
    <Box>
      {isLoading && <Loader />}

      {series && (
        <Box>
          <Box mb={5}>
            <Button variant="outlined" onClick={onClickBack}>
              {intl.formatMessage(messages.backButton)}
            </Button>
          </Box>

          <Box mb={5}>{<SeriesDescription series={series} />}</Box>

          <Box>
            <MovieDetailsTabs type="tv" movieId={movieId} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SeriesDetailsPage;
