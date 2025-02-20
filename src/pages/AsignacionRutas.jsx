import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AsignacionRutas() {
  const navigate = useNavigate();

  // Estado para las rutas y asignaciones
  const [rutas, setRutas] = useState([]);
  const [asignacion, setAsignacion] = useState({
    rutaSeleccionada: "",
    conductor: "",
    precio: "",
  });

  // Conductores disponibles (puedes modificar esta lista)
  const conductores = ["Juan Pérez", "María López", "Carlos Sánchez"];

  // Cargar rutas desde localStorage
  useEffect(() => {
    const rutasGuardadas = JSON.parse(localStorage.getItem("rutas")) || [];
    setRutas(rutasGuardadas);
  }, []);

  // Manejar selección de ruta
  const handleRutaChange = (e) => {
    const rutaSeleccionada = rutas.find(ruta => ruta.numeroRuta === e.target.value);
    setAsignacion({
      ...asignacion,
      rutaSeleccionada: e.target.value,
      precio: rutaSeleccionada ? rutaSeleccionada.precio : "",
    });
  };

  // Manejar selección de conductor y otros campos
  const handleChange = (e) => {
    setAsignacion({ ...asignacion, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Asignación realizada: 
    Ruta: ${asignacion.rutaSeleccionada}, 
    Conductor: ${asignacion.conductor}, 
    Precio: ${asignacion.precio}`);
    
    // Limpiar formulario
    setAsignacion({ rutaSeleccionada: "", conductor: "", precio: "" });
  };

  return (
    <div className="form-container">
      <h2 className="title">Asignación de Rutas</h2>
      <p>Asigne una ruta a un conductor.</p>

      <form onSubmit={handleSubmit}>
        <label>Ruta:</label>
        <select name="rutaSeleccionada" value={asignacion.rutaSeleccionada} onChange={handleRutaChange} required>
          <option value="">Seleccione una ruta</option>
          {rutas.map((ruta, index) => (
            <option key={index} value={ruta.numeroRuta}>
              {`${ruta.salida} - ${ruta.llegada} (Ruta ${ruta.numeroRuta})`}
            </option>
          ))}
        </select>

        <label>Nombre del Conductor:</label>
        <select name="conductor" value={asignacion.conductor} onChange={handleChange} required>
          <option value="">Seleccione un conductor</option>
          {conductores.map((conductor, index) => (
            <option key={index} value={conductor}>{conductor}</option>
          ))}
        </select>

        <label>Precio:</label>
        <input type="text" name="precio" value={asignacion.precio} readOnly />

        <button type="submit" className="submit-button">Asignar Ruta</button>
      </form>

      {/* Botón para regresar */}
      <button className="back-button" onClick={() => navigate("/rutas")}>Regresar</button>
    </div>
  );
}

export default AsignacionRutas;
