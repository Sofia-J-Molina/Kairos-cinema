import { Button } from "@mui/material";
import { login } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const FirebaseAuth = () => {
  const navigate = useNavigate();
  let infoInput = {
    email: "fulanitaprueba@gmail.com",
    password: "123456",
  };
  const handleSubmit = async () => {
    let respuesta = await login(infoInput);
    console.log(respuesta);
    navigate("/");
  };
  return (
    <div>
      <h1>estoy en el login</h1>
      <Button variant="contained" onClick={handleSubmit}>
        Ingresar
      </Button>
    </div>
  );
};
