import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { NotFound } from "./pages/notFound/notFound";
import { Favorites } from "./pages/favorites/favorites";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
