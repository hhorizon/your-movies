import React, { useEffect } from "react";
import { collection, CollectionReference } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";

import { firestore } from "../../../common/firebaseApp";
import { MovieWithFavorite } from "../../../types";
import {
  setFavoriteMovies,
  setFavoritesLoadingStatus,
} from "../../../redux/common/common-actions";
import { useAppDispatch } from "../../../redux/hooks";

interface FavoriteMoviesConnectorProps {
  uid: string;
}
const FavoriteMoviesConnector: React.FC<FavoriteMoviesConnectorProps> = ({
  uid,
}) => {
  const dispatch = useAppDispatch();

  const favoritesRef = collection(
    firestore,
    `users/${uid}/favoriteMovies`,
  ) as CollectionReference<MovieWithFavorite>;

  const { status, data: favoriteMovies } =
    useFirestoreCollectionData<MovieWithFavorite>(favoritesRef, {
      idField: new Date().toString(),
    });

  useEffect(() => {
    dispatch(setFavoriteMovies(favoriteMovies));
  }, [dispatch, favoriteMovies]);

  useEffect(() => {
    dispatch(setFavoritesLoadingStatus(status));
  }, [dispatch, status]);

  return null;
};
export default FavoriteMoviesConnector;
