import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();

  const user = !!localStorage.getItem("User");
  const isAuthenticated = JSON.parse(user);

  if (
    isAuthenticated.role === "admin" &&
    (pathname === "/signin" || pathname === "/signup")
  ) {
    return <Navigate to="/dashboard" />;
  }
  if (isAuthenticated.role === "user" && pathname === "/dashboard") {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;
