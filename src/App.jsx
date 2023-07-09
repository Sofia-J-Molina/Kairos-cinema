import { Layout } from "./components/layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuRoutes } from "./routes/menuRoutes";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>

          <Route path="*" element={<h1>Ruta no existente</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
