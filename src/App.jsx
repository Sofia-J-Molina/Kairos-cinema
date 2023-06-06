import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Login />
    </div>
  );
};

export default App;
