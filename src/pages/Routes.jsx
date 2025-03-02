import React from 'react';
import './Routes.css';

const RoutesPage = () => {
  return (
    <div className="routes-page fade-in">
      <h2>Rutas y Horarios</h2>
      <p>Consulta nuestras rutas disponibles y los horarios de salida y llegada.</p>

      {/* Tabla de Horarios */}
      <section className="routes-section">
        <table className="routes-table">
          <thead>
            <tr>
              <th>Ruta</th>
              <th>Horario de Salida</th>
              <th>Horario de Llegada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quimistán a Santa Bárbara cabecera</td>
              <td>6:00 AM</td>
              <td>7:30 AM</td>
            </tr>
            <tr>
              <td>Santa Bárbara cabecera a Quimistán</td>
              <td>8:00 AM</td>
              <td>9:30 AM</td>
            </tr>
            <tr>
              <td>Santa Bárbara cabecera a San José de la Colina</td>
              <td>10:00 AM</td>
              <td>11:00 AM</td>
            </tr>
            <tr>
              <td>Santa Bárbara a Santa Rita</td>
              <td>1:00 PM</td>
              <td>2:30 PM</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RoutesPage;
