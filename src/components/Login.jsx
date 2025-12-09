import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFaluire } from "../Auth/authSlics";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginStart());

    setTimeout(() => {
      if (userPassword === "1234") {
        dispatch(loginSuccess({ userName }));
      } else {
        dispatch(loginFaluire("incorrect password"));
      }
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded shadow bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center dark:text-white">
        Login
      </h1>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <input
        type="text"
        placeholder="Enter username"
        className="border p-2 w-full rounded mb-3 dark:bg-gray-700 dark:text-white"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password (1234)"
        className="border p-2 w-full rounded mb-3 dark:bg-gray-700 dark:text-white"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded disabled:bg-blue-300"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
