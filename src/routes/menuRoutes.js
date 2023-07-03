import { ItemListContainer } from "../components/pages/ItemListContainer/ItemListContainer";
import { ProductDetailContainer } from "../components/pages/productDetail/ProductDetailContainer";
import { CartContainer } from "../components/pages/cart/CartContainer";
import { Form } from "../components/pages/form/Form";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categorias",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
];
