import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
        <p className="py-2 text-sm ">
          Already have an account?&nbsp;
          <Link to="/" className="underline text-blue">
            Sign In
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email address: </label>
          <input
            className="border p-3"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password: </label>
          <input
            className="border p-3"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border w-full p-4 my-2 bg-blue-600 hover:bg-blue-500 text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
