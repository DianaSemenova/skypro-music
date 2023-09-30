import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { NotFound } from "./pages/notFound/notFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
