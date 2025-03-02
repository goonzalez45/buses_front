import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h2>Acerca de Nosotros</h2>

      {/* Historia */}
      <section className="about-section">
        <h3>Historia</h3>
        <p>
          En el año 2021, en plena crisis sanitaria provocada por la pandemia, nació Transporte Velázquez, una iniciativa municipal pensada para brindar un servicio de transporte seguro y esencial para la comunidad. Fundada por don Ricardo Velasquez, un emprendedor con visión y compromiso, la empresa surgió en un contexto donde la movilidad era limitada y la salud pública era prioridad.
        </p>
        <p>
          Desde sus inicios, Transporte Velasquez se destacó por adaptar sus vehículos a estrictos protocolos de bioseguridad, permitiendo el traslado seguro de trabajadores esenciales, ciudadanos y pacientes hacia centros de salud y otros servicios indispensables.
        </p>
        <p>
          A medida que la pandemia marcaba el ritmo de la vida cotidiana, la demanda por un servicio de transporte regulado y seguro creció considerablemente. Con esfuerzo y dedicación, la empresa amplió su flota incorporando autobuses adaptados a las necesidades de la nueva normalidad.
        </p>
      </section>

      {/* Misión */}
      <section className="about-section">
        <h3>Misión</h3>
        <p>
          Ofrecer servicio de transporte terrestre con un alto nivel de calidad, garantizando la seguridad y puntualidad para satisfacer un viaje cómodo y agradable a su destino contribuyendo a la comunidad.
        </p>
      </section>

      {/* Visión */}
      <section className="about-section">
        <h3>Visión</h3>
        <p>
          Ser reconocidos como el referente líder en transporte municipal. Aspiramos a transformar cada experiencia de viaje en un trayecto de innovación, calidad y confianza.
        </p>
      </section>
    </div>
  );
};

export default About;
