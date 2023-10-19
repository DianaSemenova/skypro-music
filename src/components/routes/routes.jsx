import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import { NotFound } from "../../pages/notFound/notFound";
import { Favourites } from "../../pages/favourites/favourites";
import { Category } from "../../pages/category/category";
import { AuthPage } from "../../pages/auth/auth";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes({ setUser, user }) {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage setUser={setUser} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
