import { useNavigate } from "react-router-dom";

function Repuestos() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="title">Módulo de Repuestos</h2>
      <p>Gestiona los repuestos de la empresa.</p>

      {/* Botón para ir a Registro de Repuesto */}
      <button className="module-button" onClick={() => navigate("/registro-repuesto")}>
        Registro de Repuesto
      </button>

      {/* Botón para ir a Reportes de Entrada y Salida */}
      <button className="module-button" onClick={() => navigate("/reportes")}>
        Reportes de Entrada y Salida
      </button>

      {/* Botón para ir a Dar de Baja */}
      <button className="module-button" onClick={() => navigate("/dar-de-baja")}>
        Dar de Baja
      </button>

      {/* Botón para regresar a la página de Inicio */}
      <button className="back-button" onClick={() => navigate("/inicio")}>Regresar</button>
    </div>
  );
}

export default Repuestos;
