import { createReducer } from "@reduxjs/toolkit";
import {
  openRegistrationModal,
  closeRegistrationModal,
  changeRegistrationModalTab,
  setFavoriteMovies,
  setFavoritesLoadingStatus,
} from "./common-actions";
import { MovieWithFavorite, FirebaseStatus } from "../../types";

interface CommonState {
  isModalOpen: boolean;
  modalTabsValue: number;
  favoriteMovies: MovieWithFavorite[];
  isFavoritesLoading: FirebaseStatus;
}

const initialState: CommonState = {
  isModalOpen: false,
  modalTabsValue: 0,
  favoriteMovies: [],
  isFavoritesLoading: "success",
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openRegistrationModal, (state, { payload }) => {
      state.isModalOpen = true;
      state.modalTabsValue = payload;
    })
    .addCase(closeRegistrationModal, (state, { payload }) => {
      state.isModalOpen = false;
    })
    .addCase(changeRegistrationModalTab, (state, { payload }) => {
      state.modalTabsValue = payload;
    })
    .addCase(setFavoriteMovies, (state, { payload }) => {
      state.favoriteMovies = payload;
    })
    .addCase(setFavoritesLoadingStatus, (state, { payload }) => {
      state.isFavoritesLoading = payload;
    });
});

export default commonReducer;
