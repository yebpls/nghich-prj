import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../config/http";

function ProtectRole({ requiredRole, children }) {
  const navigate = useNavigate();
  const role = getToken() ? jwtDecode(getToken()).role : null;

  useEffect(() => {
    if (role !== requiredRole) {
      navigate("/");
    }
  }, [role, requiredRole, navigate]);
  console.log(role, requiredRole, "role");
  return role === requiredRole ? children : null;
}

export default ProtectRole;
