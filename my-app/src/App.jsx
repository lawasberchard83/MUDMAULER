import { Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
