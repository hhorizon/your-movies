import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "../services/movieService";
import commonReducer from "./common/common-reducer";

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  common: commonReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlewere) =>
      getDefaultMiddlewere().concat(movieAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
