import { useNavigate } from "react-router-dom";
import { apiClient } from "../shared/services/apiClient";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const  handleLogin = async (e) => {
    e.preventDetault();

    try {
      
      apiClient.post()
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Usuario o contraseña incorrectos");
  }
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
