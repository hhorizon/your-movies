import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "../services/movieService";

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlewere) =>
      getDefaultMiddlewere().concat(movieAPI.middleware),
  });
};
