import { ProductCard } from "../../common/productCard/ProductCard";
import "./itemListContainer.css";
export const ItemListPresentacional = ({ items }) => {
  return (
    <>
      <div className="kairos">
        <img
          src="https://res.cloudinary.com/drmkzftbn/image/upload/v1689329372/sport_f%C3%A9nix_1_ykrvwk.gif"
          alt=""
          className="Logo"
        />
        <div className="kairos-cinema">
          <h1>Kairos Cinema</h1>
          <p>
            Sumérgete en una experiencia cinematográfica única con Kairos
            Cinema. Tu boleto para el entretenimiento está a solo un clic de
            distancia. ¡Reserva ahora y deja que el cine se convierta en una
            aventura sin complicaciones!
          </p>
        </div>
      </div>
      <div className="cards-container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </>
  );
};
