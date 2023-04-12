import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { HomeOutlet, Landing } from "../Page";
const RequireAuth = () => {
  const { token } = useSelector((store) => store.auth);

  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};
export { RequireAuth };
