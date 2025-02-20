import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DarDeBaja() {
  const navigate = useNavigate();

  // Lista de repuestos (Ejemplo)
  const repuestos = [
    { id: 1, nombre: "Filtro de aceite" },
    { id: 2, nombre: "Batería" },
    { id: 3, nombre: "Pastillas de freno" },
    { id: 4, nombre: "Alternador" },
  ];

  // Estado para almacenar los repuestos seleccionados
  const [seleccionados, setSeleccionados] = useState([]);

  // Manejar la selección de repuestos
  const handleSelect = (id) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Manejar la eliminación de repuestos
  const handleSubmit = () => {
    alert(`Se han dado de baja los siguientes repuestos: ${seleccionados.map((id) => repuestos.find((r) => r.id === id).nombre).join(", ")}`);
    setSeleccionados([]); // Limpiar selección después de dar de baja
  };

  return (
    <div className="form-container">
      <h2 className="title">Dar de Baja Repuestos</h2>
      <p>Seleccione los repuestos que desea dar de baja:</p>

      <ul>
        {repuestos.map((repuesto) => (
          <li key={repuesto.id}>
            <input
              type="checkbox"
              checked={seleccionados.includes(repuesto.id)}
              onChange={() => handleSelect(repuesto.id)}
            />
            {repuesto.nombre}
          </li>
        ))}
      </ul>

      <button className="submit-button" onClick={handleSubmit} disabled={seleccionados.length === 0}>
        Confirmar Baja
      </button>

      <button className="back-button" onClick={() => navigate("/repuestos")}>
        Regresar
      </button>
    </div>
  );
}

export default DarDeBaja;
