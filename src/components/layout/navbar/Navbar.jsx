import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import {} from "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
export const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();
  return (
    <>
      <div className="Nav">
        <h4>logo</h4>
        <Link to="/">Inicio</Link>
        <ul className="nav02">
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={totalItems} showZero color="primary">
            <BsFillCartCheckFill color="Orange" size="20px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};
