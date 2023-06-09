import { Form } from "../components/pages/form/Form";
import { CartContainer } from "../components/pages/cart/CartContainer";
import { ProductDetailContainer } from "../components/pages/productDetail/ProductDetailContainer";
import { ItemListContainer } from "../components/pages/ItemListContainer/ItemListContainer";
import FormFormik from "../components/pages/formFormik/FormFormik";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import { FirebaseAuth } from "../components/pages/firebaseAuth/FirebaseAuth";

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
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "firebase-auth",
    path: "/firebase-auth",
    Element: FirebaseAuth,
  },
];
