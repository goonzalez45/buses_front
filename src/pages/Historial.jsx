import { useNavigate } from "react-router-dom";

function Historial() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="title">Historial de Entradas y Salidas</h2>
      <p>Aquí se mostrará el historial de movimientos de repuestos.</p>

      {/* Botón para regresar a la página de Reportes */}
      <button className="back-button" onClick={() => navigate("/reportes")}>Regresar</button>
    </div>
  );
}

export default Historial;
