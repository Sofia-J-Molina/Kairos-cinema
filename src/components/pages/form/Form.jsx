import { useState } from "react";

export const Form = () => {
  //const [name, setName] = useState("");

  //const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });
  const handleSubmit = (evento) => {
    evento.preventDefault();
    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastName,
    };
    console.log(data);
  };
  const handleChange = (evento) => {
    console.log(evento.target.name);
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h2>Este es un formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
