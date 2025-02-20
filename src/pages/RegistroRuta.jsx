import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistroRuta() {
  const navigate = useNavigate();

  // Estado para almacenar los datos del formulario
  const [registroData, setRegistroData] = useState({
    chofer: "",
    numeroBus: "",
    placa: "",
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setRegistroData({ ...registroData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registro Guardado: 
    Chofer: ${registroData.chofer}, 
    Número de Bus: ${registroData.numeroBus}, 
    Placa: ${registroData.placa}`);

    // Limpiar formulario
    setRegistroData({ chofer: "", numeroBus: "", placa: "" });
  };

  return (
    <div className="form-container">
      <h2 className="title">Registro de Rutas</h2>
      <p>Complete los datos del chofer y del bus.</p>

      {/* Formulario de Registro */}
      <form onSubmit={handleSubmit}>
        <label>Nombre del Chofer:</label>
        <input type="text" name="chofer" value={registroData.chofer} onChange={handleChange} required />

        <label>Número de Bus:</label>
        <input type="number" name="numeroBus" value={registroData.numeroBus} onChange={handleChange} required />

        <label>Placa:</label>
        <input type="text" name="placa" value={registroData.placa} onChange={handleChange} required />

        <button type="submit" className="submit-button">Registrar</button>
      </form>

      {/* Botón para regresar a la página de Rutas */}
      <button className="back-button" onClick={() => navigate("/rutas")}>Regresar</button>
    </div>
  );
}

export default RegistroRuta;
