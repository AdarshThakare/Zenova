import React from "react";
import "../Styles/SignInSignUp.css";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };
  return (
    <button
      className="logout-button"
      onClick={handleLogout}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        backgroundColor: "#ff4444",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "all 0.2s ease",
        width: "100%",
        minWidth: "120px",
        justifyContent: "center",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#ff2222";
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#ff4444";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
      }}
    >
      <FaSignOutAlt size={16} />
      Logout
    </button>
  );
};

export default LogoutButton;
