import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import PageBase from "./components/Unknown/PageBase";
import NotFoundPage from "./components/Unknown/NotFoundPage";
import Loader from "./components/Unknown/Loader";
import FavoritesPage from "./components/Favorites/FavoritesPage";
import FavoriteMoviesConnector from "./components/Unknown/FavoriteMoviesConnector";

import { auth } from "./common/firebaseApp";
import { refreshUser } from "./redux/auth/auth-slice";
import { getUser } from "./redux/auth/auth-selectors";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const HomePage = lazy(() => import("./components/Home/HomePage"));
const FilmsPage = lazy(() => import("./components/Films/FilmsPage"));
const FilmDetailsPage = lazy(
  () => import("./components/Films/FilmDetailsPage"),
);
const SeriesPage = lazy(() => import("./components/Series/SeriesPage"));
const SeriesDetailsPage = lazy(
  () => import("./components/Series/SeriesDetailsPage"),
);
const SearchPage = lazy(() => import("./components/Search/SearchPage"));

function App() {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          refreshUser({
            name: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
            uid: currentUser.uid,
          }),
        );
      }
    });
  }, [dispatch]);

  return (
    <PageBase>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/films/:movieId" element={<FilmDetailsPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/series/:movieId" element={<SeriesDetailsPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {user.uid && <FavoriteMoviesConnector uid={user.uid} />}
    </PageBase>
  );
}

export default App;
