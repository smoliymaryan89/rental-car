import { lazy, useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getFavorites } from "./redux/car/carSlice";

import Layout from "./layouts/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
