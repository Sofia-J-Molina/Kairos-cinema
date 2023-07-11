import { useEffect, useState } from "react";
import { ItemListPresentacional } from "./ItemListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";
import { CircleLoader } from "react-spinners";

const objetoLoader = {
  display: "block",
  margin: "0 auto",
};

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);
  //if con return temprano
  /*
  if (items.length === 0) {
    return <h1>Cargando...</h1>;
  }
  */

  return (
    <div>
      {
        /*ternario*/
        items.length > 0 ? (
          <ItemListPresentacional items={items} />
        ) : (
          <h1>
            <CircleLoader
              cssOverride={objetoLoader}
              size={150}
              color="#000000"
            />
          </h1>
        )
      }
      {/*doble anderson, no muestra nada cuando esta cargando*/
      /*items.length > && <ItemListPresentacional items={items} />*/}
    </div>
  );
};
