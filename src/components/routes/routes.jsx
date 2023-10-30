import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import { NotFound } from "../../pages/notFound/notFound";
import { Favourites } from "../../pages/favourites/favourites";
import { Category } from "../../pages/category/category";
import { AuthPage } from "../../pages/auth/auth";
import { ProtectedRoute } from "./ProtectedRoute";
import Layout from "./Layout";

export function AppRoutes({
  setUser,
  user,
  isLoading,
  setLoading
}) {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage setUser={setUser} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Layout isLoading={isLoading} />}>
          <Route
            path="/"
            element={
              <Main
                isLoading={isLoading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/favourites"
            element={<Favourites />}
          />
          <Route path="/category/:id" element={<Category />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
