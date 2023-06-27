import { useState, useEffect } from "react";
import axios from "axios";

export const FetchingDeDatos = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = axios.get("http://localhost:5000/products");
    getData.then((res) => res.data).catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
};
