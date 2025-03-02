import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="home-page">
      <h2 className="fade-in">Bienvenidos a Transporte Velásquez</h2>
      
      {/* Imagen del logo */}
      <img
        src="/logo_transporte_velasquez.webp"
        alt="Logo Transporte Velásquez"
        className="home-logo"
      />

      {/* Sección de Noticias */}
      <section className="news-section fade-in">
        <h3>Últimas Noticias</h3>

        {/* Mensaje de la última ruta agregada */}
        <p className="latest-route">🆕 Disponible Nuestra  Nueva Ruta  Bienvenidos Amigos De Santa Rita </p>
        <p className="new-route">🚏 Nueva ruta: Municipio Santa Bárbara a Santa Rita</p>

        <article className="news-item">
   
        
          {expanded && <p>Consulta los horarios en la sección de rutas.</p>}
          <p className="new-route-available">
  🚍 ¡Nueva ruta disponible! <br />
  Ahora puedes viajar desde Santa Bárbara a San José de la Colina.
</p>

          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Leer menos" : "Leer más"}
          </button>
        </article>

        {/* Botón para ver rutas y horarios, debajo del botón "Leer más" */}
        <Link to="/routes" className="routes-button">Ver Rutas y Horarios</Link>
      </section>
    </div>
  );
};

export default Home;
