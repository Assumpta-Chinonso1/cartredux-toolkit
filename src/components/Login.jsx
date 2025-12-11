import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../Auth/authSlics";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginStart());

    setTimeout(() => {
      //  username must not be empty
      if (username.trim() === "") {
        dispatch(loginFailure("Username is required"));
        return;
      }

      //  email must contain @
      if (!email.includes("@")) {
        dispatch(loginFailure("Email must contain '@' symbol"));
        return;
      }

      //  password must be at least 4 characters
      if (password.length < 4) {
        dispatch(loginFailure("Password must be at least 4 characters"));
        return;
      }

      //  password must match
      if (password !== "1234") {
        dispatch(loginFailure("Incorrect password"));
        return;
      }

      // SUCCESS — store user data in redux
      dispatch(
        loginSuccess({
          username,
          email,
        })
      );
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded shadow bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center dark:text-white">
        Login
      </h1>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* USERNAME INPUT */}
      <input
        type="text"
        placeholder="Enter username"
        className="border p-2 w-full rounded mb-3 dark:bg-gray-700 dark:text-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>

      {/* EMAIL INPUT */}
      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 w-full rounded mb-3 dark:bg-gray-700 dark:text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* PASSWORD INPUT */}
      <input
        type="password"
        placeholder="Password (1234)"
        className="border p-2 w-full rounded mb-3 dark:bg-gray-700 dark:text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
