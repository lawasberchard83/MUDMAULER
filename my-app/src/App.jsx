import { Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page.jsx";
import LoginPage from "./login-page.jsx";
import RegisterPage from "./register-page.jsx"; // Import your register page

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
