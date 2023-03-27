import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PageBase from "./components/Unknown/PageBase";
import NotFoundPage from "./components/Unknown/NotFoundPage";
import Loader from "./components/Unknown/Loader";

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </PageBase>
  );
}

export default App;
