import { Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page.jsx";
import LoginPage from "./login-page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
