import { useEffect, useState } from "react";
import { ItemListPresentacional } from "./ItemListPresentacional";

import { useParams } from "react-router";
import { CircleLoader } from "react-spinners";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const objetoLoader = {
  display: "block",
  margin: "0 auto",
};

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(dataBase, "products");

    let consulta;

    if (!categoryName) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            id: elemento.id,
            ...elemento.data(),
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
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
