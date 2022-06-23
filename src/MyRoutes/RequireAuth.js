import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
const RequireAuth = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};
export { RequireAuth };
