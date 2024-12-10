import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import AcercaDe from './components/pages/AcercaDe';
import Servicios from './components/pages/Servicios';
import Contacto from './components/pages/Contacto';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> |  
        <Link to="/servicios"> Servicios</Link> | 
        <Link to="/contacto"> Contacto</Link> |
        <Link to="/acerca-de"> Acerca de</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
};

export default App;
