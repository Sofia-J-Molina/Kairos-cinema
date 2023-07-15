import { Button } from "@mui/material";
import { login, register } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const FirebaseAuth = () => {
  const navigate = useNavigate();
  let infoInput = {
    email: "fulanitaprueba@gmail.com",
    password: "12345678",
  };
  const handleSubmit = async () => {
    let respuesta = await login(infoInput);
    console.log(respuesta);
    navigate("/");
  };
  let infoForRegister = {
    email: "fulanitaprueba@gmail.com",
    password: "12345678",
  };
  const registerWithEmail = async () => {
    let res = await register(infoForRegister);
    console.log(res);
  };
  return (
    <div>
      <h1>estoy en el login</h1>
      <Button variant="contained" onClick={handleSubmit}>
        Ingresar
      </Button>
      <h4>Parece que aun no tienes cuenta..</h4>
      <Button onClick={registerWithEmail}>Registrate! </Button>
    </div>
  );
};
