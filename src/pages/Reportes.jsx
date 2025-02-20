import { useNavigate } from "react-router-dom";

function Reportes() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="title">Reportes de Entrada y Salida</h2>
      <p>Aquí puedes ver los reportes de entradas y salidas de repuestos.</p>

      {/* Botón para ir al Historial */}
      <button className="module-button" onClick={() => navigate("/historial")}>
        Ver Historial
      </button>

      {/* Botón para regresar al Módulo de Repuestos */}
      <button className="back-button" onClick={() => navigate("/repuestos")}>Regresar</button>
    </div>
  );
}

export default Reportes;
