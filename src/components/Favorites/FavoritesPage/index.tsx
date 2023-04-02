import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { collection, CollectionReference } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../../Unknown/Loader";
import MoviesList from "../../Unknown/MovieList";

import messages from "./messages";
import { AuthContext } from "../../Unknown/AuthProvider";
import db from "../../../common/firebaseDb";
import { MovieWithFavorite } from "../../../types";
import { openRegistrationModal } from "../../../redux/common/common-actions";

const FavoritesPage: React.FC = () => {
  const { user, loadingAuth } = useContext(AuthContext);
  const dispatch = useDispatch();
  const intl = useIntl();

  const favoritesRef = collection(
    db,
    `users/${user?.uid}/favoriteMovies`,
  ) as CollectionReference<MovieWithFavorite>;

  // TODO error notification
  const { status, data: favoriteMovies } =
    useFirestoreCollectionData<MovieWithFavorite>(favoritesRef);

  useEffect(() => {
    if (!user) {
      dispatch(openRegistrationModal(1));
    }
  }, [dispatch, loadingAuth, user]);

  if (!user) {
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

      {status === "loading" && <Loader />}

      {favoriteMovies && <MoviesList movies={favoriteMovies} />}
    </Box>
  );
};

export default FavoritesPage;
