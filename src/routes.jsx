import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
