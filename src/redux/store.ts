import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import { movieAPI } from "../services/movieService";
import commonReducer from "./common/common-reducer";
import authReducer from "./auth/auth-slice";

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  common: commonReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere().concat(thunkMiddleware).concat(movieAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
