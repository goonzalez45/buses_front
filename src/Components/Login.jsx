import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/inicio");
  };

  return (
    <div>
      <h2 className="title">Iniciar Sesión</h2>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;
