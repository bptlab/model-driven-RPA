import React from "react";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ManageEmployees from "./components/ManageEmployees";
import AddPayroll from "./components/AddPayroll";
import PayrollActivity from "./components/PayrollActivity";
import Login from "./components/Login";

const Routes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/manage-employees" component={ManageEmployees} />
          <Route exact path="/add-payroll" component={AddPayroll} />
          <Route exact path="/payroll-activity" component={PayrollActivity} />
          <Navigate to="/dashboard" />
        </Routes>
      </Router>
    </div>
  );
};

export default Routes;
