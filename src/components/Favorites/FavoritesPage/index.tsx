import React, { useEffect } from "react";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../../Unknown/Loader";
import MoviesList from "../../Unknown/MovieList";

import {
  getFavoriteMovies,
  getFavoritesLoadingSatus,
} from "../../../redux/common/common-selectors";
import { openRegistrationModal } from "../../../redux/common/common-actions";
import { getUser } from "../../../redux/auth/auth-selectors";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import messages from "./messages";

const FavoritesPage: React.FC = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const favoriteMovies = useAppSelector(getFavoriteMovies);
  const isFavoritesLoading = useAppSelector(getFavoritesLoadingSatus);

  useEffect(() => {
    if (!user.uid) {
      dispatch(openRegistrationModal(1));
    }
  }, [dispatch, user]);

  if (!user.uid) {
    return (
      <Box>
        <Typography variant="h6">
          {intl.formatMessage(messages.notAuthMessage)}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4">{intl.formatMessage(messages.title)}</Typography>
      <Typography mb={6}>{intl.formatMessage(messages.subtitle)}</Typography>

      {isFavoritesLoading === "loading" && <Loader />}

      {favoriteMovies && favoriteMovies.length !== 0 ? (
        <MoviesList movies={favoriteMovies} />
      ) : (
        <Typography variant="h6">
          {intl.formatMessage(messages.emptyFavoritesList)}
        </Typography>
      )}
    </Box>
  );
};

export default FavoritesPage;
