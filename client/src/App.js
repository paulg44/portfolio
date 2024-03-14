import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
    </BrowserRouter>
  );
}

export default App;
