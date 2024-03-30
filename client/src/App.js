import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Consultation from "./Pages/Consultation/Consultation";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  function toggleDarkMode() {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  }

  return (
    <BrowserRouter>
      <div className={darkMode}>
        <NavbarComponent toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Homepage darkMode={darkMode} />} />
          <Route
            path="/consult"
            element={<Consultation darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
