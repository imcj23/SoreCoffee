import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Page/LandingPage";
import Catalog from './Page/Catalog'
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(()=> {
    AOS.init({
      duration:1000,
      // once:true
    })
  })
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Catalog" element={<Catalog/>} />
        </Routes>
      </Router>
    </>
  );
}
