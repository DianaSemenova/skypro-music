import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ redirectPath = "/signIn", isAllowed, currentTrack}) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace currentTrack={currentTrack} />;
  }

  return <Outlet />;
}
