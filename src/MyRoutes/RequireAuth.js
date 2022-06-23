import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const RequireAuth = () => {
  const { token } = useSelector((store) => store.auth);

  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};
export { RequireAuth };
