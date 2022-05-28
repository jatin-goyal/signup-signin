import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("you are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email: {user && user.email}</p>

      <button
        onClick={handleLogout}
        className="border px-6 py-2 my-4 border-red-900 hover:bg-red-500 bg-red-600 text-white"
      >
        Log out
      </button>
    </div>
  );
}

export default Account;
