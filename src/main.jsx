import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const countData = localStorage.getItem("COUNT");
  const usernameData = localStorage.getItem("USERNAME");

  if (countData !== null && usernameData !== null) {
    localStorage.setItem("COUNT", countData);
    localStorage.setItem("USERNAME", usernameData);
  } else {
    localStorage.setItem("COUNT", 0);
    const usernameRequest = prompt("Input Your Username");
    const setGuestUsername = localStorage.setItem("USERNAME", "Guest");

    if (usernameRequest === "") {
      setGuestUsername;
    } else if (usernameRequest) {
      localStorage.setItem("USERNAME", usernameRequest);
    } else {
      setGuestUsername;
    }
  }

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
