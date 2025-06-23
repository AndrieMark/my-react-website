import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavigationBarMenu from './NavigationMenu/NavigationBarMenu';

import Home from './Pages/Home';
import About from './Pages/About';
import Carlist from './Pages/Listcar';
import Contact from './Pages/Contact';

function AppWithRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/Home') {
      navigate('/Home', { replace: true });
    }
  }, []); // only once on initial mount

  return (
    <>
      <NavigationBarMenu />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Listcar" element={<Carlist />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppWithRedirect;