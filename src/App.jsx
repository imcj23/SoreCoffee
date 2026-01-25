import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Page/LandingPage";
import Catalog from './Page/Catalog'
import About from './Page/AboutUs'
import Contact from './Page/Contact'
import AOS from "aos";
import 'aos/dist/aos.css'
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
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/aboutus" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}
