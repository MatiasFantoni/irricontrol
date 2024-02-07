import { Routes, Route } from "react-router-dom";
import NavBar from "./components/partials/Navbar";
import Home from "./components/Home";
import ValorAgregado from "./components/ValorAgregado";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ValorAgregado />} />
      </Routes>
    </>
  );
}

export default App;
