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
      <div className="navbar">
        <ol className="menu">
          <Link to="/" className="inicio">
            Inicio
          </Link>
          <li className="dropdown">
            Categorias 🡣
            <ul className="dropdown-menu">
              {menuNavigate.map(({ id, path, title }) => (
                <Link key={id} to={path}>
                  {title}
                </Link>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/carrito" className="carrito">
              <Badge
                badgeContent={totalItems}
                showZero
                className="itemcount_color"
                color="primary"
              >
                <BsFillCartCheckFill size="25px" className="carrito_svg" />
              </Badge>
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
};
