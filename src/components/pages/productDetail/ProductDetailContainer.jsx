import { useContext, useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { CircleLoader } from "react-spinners";
import Swal from "sweetalert2";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
const objetoLoader = {
  display: "block",
  margin: "0 auto",
};
export const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();
  const cantidad = getTotalQuantityById(id);
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su producto se agrego exitosamente",
      showConfirmButton: true,
      timer: 1000,
    });
  };

  useEffect(() => {
    let itemCollection = collection(dataBase, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ProductDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
          onAdd={onAdd}
        />
      ) : (
        <h1>
          <CircleLoader cssOverride={objetoLoader} size={150} color="#000000" />
        </h1>
      )}
    </div>
  );
};
