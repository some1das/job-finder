import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserProfile from "./components/userComponent/Auth/UserProfile";
import SignUpForm from "./components/userComponent/Auth/SignUpForm";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/core/Home";
import LoginForm from "./components/userComponent/Auth/LoginForm";
import CreateJob from "./components/Job/CreateJob";
import Profile from "./components/userComponent/Profile/Profile";
import CreatedJobs from "./components/Job/CreatedJobs";
import Job from "./components/Job/Job";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo={"/login"}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo={"/"}>
              <SignUpForm />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo={"/"}>
              <LoginForm />
            </PublicRoute>
          }
        />

        <Route
          path="/job/create"
          element={
            <PrivateRoute redirectTo={"/login"}>
              <CreateJob />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/profile"
          element={
            <PrivateRoute redirectTo={"/login"}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/job/created/byuser"
          element={
            <PrivateRoute redirectTo={"/login"}>
              <CreatedJobs />
            </PrivateRoute>
          }
        />
        <Route
          path="/job/byId"
          element={
            <PrivateRoute redirectTo={"/login"}>
              <Job />
            </PrivateRoute>
          }
        />
        <Route path="/myProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
