import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(user.token);

    if (decoded.exp * 1000 < Date.now()) {
      localStorage.clear();

      return <Navigate to="/login" />;
    }

    return <Outlet />;
  } catch {
    localStorage.clear();

    return <Navigate to="/login" />;
  }
}
export default Private;
