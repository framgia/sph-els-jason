import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouteList;
