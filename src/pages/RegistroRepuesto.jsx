import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistroRepuesto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cantidad: "",
    nombre: "",
    id: "",
    factura: "",
  });
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos registrados:", formData);
    setMensaje("¡Se ha registrado correctamente!"); // Muestra el mensaje
    setTimeout(() => {
      setMensaje(""); // Oculta el mensaje después de 3 segundos
      navigate("/repuestos"); // Regresa automáticamente después del mensaje
    }, 3000);
  };

  return (
    <div className="form-container">
      <h2 className="title">Registro de Repuesto</h2>
      
      {mensaje && <p className="success-message">{mensaje}</p>} {/* Mensaje de éxito */}

      <form onSubmit={handleSubmit}>
        <label>Cantidad:</label>
        <input type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} required />

        <label>Nombre del Repuesto:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label>ID del Repuesto:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} required />

        <label>N° de Factura:</label>
        <input type="text" name="factura" value={formData.factura} onChange={handleChange} required />

        <button type="submit" className="submit-button">Registrar</button>
      </form>

      <button className="back-button" onClick={() => navigate("/repuestos")}>Regresar</button>
    </div>
  );
}

export default RegistroRepuesto;
