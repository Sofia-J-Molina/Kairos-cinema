import { ProductCard } from "../../common/productCard/ProductCard";
import "./itemListContainer.css";
export const ItemListPresentacional = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};
