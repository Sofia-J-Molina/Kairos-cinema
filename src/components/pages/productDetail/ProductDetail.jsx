import { ItemCount } from "../../common/ItemCount";
import "./ProductDetail.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <>
      <div className="Product-detail">
        <Card className="Card">
          <CardActionArea>
            <CardMedia
              component="img"
              image={productSelected.img}
              alt="green iguana"
              className="Card-img"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "center" }}
              >
                {productSelected.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                style={{ textAlign: "center", fontSize: "20px" }}
              >
                ${productSelected.price}
              </Typography>
              <Typography
                variant="body2"
                color="black"
                style={{ textAlign: "center", fontSize: "17px" }}
              >
                {productSelected.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {productSelected.stock > 0 ? (
          <ItemCount
            stock={productSelected.stock}
            initial={cantidad}
            onAdd={onAdd}
            className="ItemCount"
          />
        ) : (
          <h3>No hay stock</h3>
        )}
      </div>
    </>
  );
};
