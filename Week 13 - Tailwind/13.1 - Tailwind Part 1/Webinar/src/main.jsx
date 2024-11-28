import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Email from "./pages/Email.jsx";
import OTP from "./pages/OTP.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/email" element={<Email/>}/>
      <Route path="/otp" element={<OTP/>}/>
    </Routes>
  </BrowserRouter>
);
