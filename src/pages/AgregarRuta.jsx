import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgregarRuta() {
  const navigate = useNavigate();

  // Estado para almacenar los datos del formulario
  const [rutaData, setRutaData] = useState({
    salida: "",
    llegada: "",
    numeroRuta: "",
    precio: "", // Nuevo campo Precio
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setRutaData({ ...rutaData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ruta Agregada: 
    Salida: ${rutaData.salida}, 
    Llegada: ${rutaData.llegada}, 
    Número de Ruta: ${rutaData.numeroRuta},
    Precio: ${rutaData.precio}`);

    // Guardar la ruta en localStorage
    const rutasGuardadas = JSON.parse(localStorage.getItem("rutas")) || [];
    rutasGuardadas.push(rutaData);
    localStorage.setItem("rutas", JSON.stringify(rutasGuardadas));

    // Limpiar formulario
    setRutaData({ salida: "", llegada: "", numeroRuta: "", precio: "" });
  };

  return (
    <div className="form-container">
      <h2 className="title">Agregar Nueva Ruta</h2>
      <p>Complete los campos para agregar una nueva ruta.</p>

      {/* Formulario de Agregar Ruta */}
      <form onSubmit={handleSubmit}>
        <label>Ruta de Salida:</label>
        <input type="text" name="salida" value={rutaData.salida} onChange={handleChange} required />

        <label>Ruta de Llegada:</label>
        <input type="text" name="llegada" value={rutaData.llegada} onChange={handleChange} required />

        <label>Número de Ruta:</label>
        <input type="number" name="numeroRuta" value={rutaData.numeroRuta} onChange={handleChange} required />

        <label>Precio:</label>
        <input type="number" name="precio" value={rutaData.precio} onChange={handleChange} required />

        <button type="submit" className="submit-button">Agregar Ruta</button>
      </form>

      {/* Botón para regresar al Módulo de Rutas */}
      <button className="back-button" onClick={() => navigate("/rutas")}>Regresar</button>
    </div>
  );
}

export default AgregarRuta;
