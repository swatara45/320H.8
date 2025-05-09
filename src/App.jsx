import "./App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/MainPage";
import Price from "./pages/Price";
import Nav from "./components/NavBar";

export default function App () {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
     <div className="App">
      <Nav /> {/* This will appear on all pages */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
  );
}