import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import {} from "../navbar/Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <h4>logo</h4>
        <Link to="/">Inicio</Link>
        <ol>
          <Link to="/">Todas</Link>
          <Link to="/category/Fantasía">Fantasía</Link>
          <Link to="/category/Suspenso">Suspenso</Link>
          <Link to="/category/Ciencia Ficción">Ciencia Ficción</Link>
          <Link to="/category/Comedia">Comedia</Link>
          <Link to="/category/Terror">Terror</Link>
          <Link to="/category/Animación">Animacion</Link>
          <Link to="/category/Drama">Drama</Link>
          <Link to="/Login">Ingresar</Link>
        </ol>

        <Link to="/carrito">
          <Badge badgeContent={2} color="primary">
            <BsFillCartCheckFill color="Orange" size="20px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};
