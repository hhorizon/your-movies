import { createAction } from "@reduxjs/toolkit";
import { MovieWithFavorite, FirebaseStatus } from "../../types";

export const openRegistrationModal = createAction<
  number,
  "common/openRegistrationModal"
>("common/openRegistrationModal");

export const closeRegistrationModal = createAction(
  "common/closeRegistrationModal",
);

export const changeRegistrationModalTab = createAction<
  number,
  "common/changeRegistrationModalTab"
>("common/changeRegistrationModalTab");

export const setFavoriteMovies = createAction<
  MovieWithFavorite[],
  "common/getFavoriteMovies"
>("common/getFavoriteMovies");

export const setFavoritesLoadingStatus = createAction<
  FirebaseStatus,
  "common/getFavoritesLoadingSatus"
>("common/getFavoritesLoadingSatus");
