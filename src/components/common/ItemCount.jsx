import { Button } from "@mui/material";
import { useCount } from "../hooks/useCount";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "30px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", margin: "5px" }}>Stock: {stock}</h2>
        <Button variant="contained" onClick={decrement}>
          -
        </Button>
        <h2 style={{ color: "black" }}>{count}</h2>
        <Button variant="contained" onClick={increment}>
          +
        </Button>
        <Button variant="contained" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
