import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function app() {
  return (
    <AuthContextProvider>
      <div id="main">
        <h1 className="text-center max-w-[700px] mx-auto p-4 text-3xl font-bold">
          Firebase Auth and Context
        </h1>

        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}
