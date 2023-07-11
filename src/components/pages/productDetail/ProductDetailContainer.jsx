import { useContext, useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { CircleLoader } from "react-spinners";
import Swal from "sweetalert2";
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
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(productFind);
      }, 2000);
    });
    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
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
