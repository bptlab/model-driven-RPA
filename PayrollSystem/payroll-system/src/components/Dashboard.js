import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Navigate to="/manage-employees" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default Dashboard;
