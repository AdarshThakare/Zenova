import React from "react";
import "../Styles/SignInSignUp.css";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };
  return (
    <button className="register-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
