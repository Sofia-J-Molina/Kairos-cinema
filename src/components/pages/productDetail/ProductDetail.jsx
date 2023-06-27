import { ItemCount } from "../../ItemCount";

export const ProductDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log(data);
  };
  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
        <p>{productSelected.description}</p>
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>No hay stock</h3>
      )}
    </>
  );
};
