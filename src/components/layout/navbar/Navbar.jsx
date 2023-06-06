import { CartWidget } from "../../cartWidget/CartWidget";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="Nav">
      <h4>Logo</h4>
      <ol>
        <li>Inicio</li>
        <li>Cartelera</li>
        <li>Estrenos</li>
        <li>Contacto</li>
      </ol>
      <CartWidget />
    </div>
  );
};
