import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";
export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Seguro que deseas vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, vaciar carrito",
      denyButtonText: `No, Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("El carrito se vacio exitosamente", "", "success");
      }
    });
  };
  return (
    <div>
      <Cart
        total={total}
        limpiar={limpiar}
        cart={cart}
        removeById={removeById}
      />
    </div>
  );
};
