import { useNavigate } from "react-router-dom";

function Rutas() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="title">Módulo de Rutas</h2>
      <p>Gestiona las rutas del transporte.</p>

      {/* Botón para ir a la página de Registro de Rutas */}
      <button className="module-button" onClick={() => navigate("/registro-ruta")}>
        Registro
      </button>

      {/* Botón para ir a la página de Agregar Ruta */}
      <button className="module-button" onClick={() => navigate("/agregar-ruta")}>
        Agregar Ruta
      </button>

      {/* Botón para ir a la página de Asignación de Rutas */}
      <button className="module-button" onClick={() => navigate("/asignacion-rutas")}>
        Asignación de Rutas
      </button>

      {/* Botón para ir al submódulo Horario */}
      <button className="module-button" onClick={() => navigate("/horario")}>
        Horario
      </button>

      {/* Botón para ir al submódulo Historial de Rutas */}
      <button className="module-button" onClick={() => navigate("/historial-rutas")}>
        Historial de Rutas
      </button>

      {/* Botón para regresar a la página de Inicio */}
      <button className="back-button" onClick={() => navigate("/inicio")}>Regresar</button>
    </div>
  );
}

export default Rutas;
