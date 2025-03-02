import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Transporte Velásquez</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de Nosotros</Link></li>
        <li><Link to="/routes">Rutas</Link></li>
        <li><Link to="/contact">Contáctanos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
