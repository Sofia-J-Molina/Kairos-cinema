import { Layout } from "./components/layout/Layout";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@mui/icons-material";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />

          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>Ruta no existente</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
