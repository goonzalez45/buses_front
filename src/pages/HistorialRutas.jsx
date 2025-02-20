import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HistorialRutas() {
  const navigate = useNavigate();

  // Estado para almacenar datos de rutas, asignaciones y horarios
  const [rutas, setRutas] = useState([]);
  const [asignaciones, setAsignaciones] = useState([]);
  const [horarios, setHorarios] = useState([]);

  // Cargar datos desde localStorage al cargar el componente
  useEffect(() => {
    const rutasGuardadas = JSON.parse(localStorage.getItem("rutas")) || [];
    const asignacionesGuardadas = JSON.parse(localStorage.getItem("asignaciones")) || [];
    const horariosGuardados = JSON.parse(localStorage.getItem("horarios")) || [];

    setRutas(rutasGuardadas);
    setAsignaciones(asignacionesGuardadas);
    setHorarios(horariosGuardados);
  }, []);

  return (
    <div className="form-container">
      <h2 className="title">Historial de Rutas</h2>
      <p>Visualiza el historial completo de las rutas, asignaciones y horarios.</p>

      {/* Mostrar Rutas */}
      <h3>Rutas Agregadas:</h3>
      {rutas.length > 0 ? (
        <ul>
          {rutas.map((ruta, index) => (
            <li key={index}>
              {`Ruta ${ruta.numeroRuta}: ${ruta.salida} - ${ruta.llegada}, Precio: ${ruta.precio}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay rutas agregadas.</p>
      )}

      {/* Mostrar Asignaciones */}
      <h3>Asignaciones de Rutas:</h3>
      {asignaciones.length > 0 ? (
        <ul>
          {asignaciones.map((asignacion, index) => (
            <li key={index}>
              {`Ruta ${asignacion.rutaSeleccionada}, Conductor: ${asignacion.conductor}, Precio: ${asignacion.precio}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay asignaciones registradas.</p>
      )}

      {/* Mostrar Horarios */}
      <h3>Horarios Asignados:</h3>
      {horarios.length > 0 ? (
        <ul>
          {horarios.map((horario, index) => (
            <li key={index}>
              {`Ruta ${horario.rutaSeleccionada}, Horario: ${horario.horarioSeleccionado}, Número de Bus: ${horario.numeroBus}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay horarios asignados.</p>
      )}

      {/* Botón para regresar */}
      <button className="back-button" onClick={() => navigate("/rutas")}>
        Regresar
      </button>
    </div>
  );
}

export default HistorialRutas;
