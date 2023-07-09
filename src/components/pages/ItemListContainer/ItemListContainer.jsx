import { useEffect, useState } from "react";
import { ItemListPresentacional } from "./ItemListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  return <ItemListPresentacional items={items} />;
};
