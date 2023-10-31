import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Main } from "../../pages/main/main";
import { NotFound } from "../../pages/notFound/notFound";
import { Favourites } from "../../pages/favourites/favourites";
import { Category } from "../../pages/category/category";
import { AuthPage } from "../../pages/auth/auth";
import { ProtectedRoute } from "./ProtectedRoute";
import Layout from "./Layout";
import { tokenSelector } from "../../store/selectors/tracks";


export function AppRoutes({ setUser }) {
  const token = useSelector(tokenSelector);
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage setUser={setUser} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/category/:id" element={<Category />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
