import { RootState } from "../store";

export const getIsModalOpen = (state: RootState) => state.common.isModalOpen;

export const getModalTabsValue = (state: RootState) =>
  state.common.modalTabsValue;

export const getFavoriteMovies = (state: RootState) =>
  state.common.favoriteMovies;

export const getFavoritesLoadingSatus = (state: RootState) =>
  state.common.isFavoritesLoading;
