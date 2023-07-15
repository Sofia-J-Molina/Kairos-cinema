import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import "./ProductCard.css";
export const ProductCard = ({ elemento }) => {
  return (
    <Card className="card">
      <CardMedia
        image={elemento.img}
        title={elemento.title}
        className="CardMedia"
      />
      <CardContent className="cardContent">
        <Typography variant="h5" component="div" className="Title">
          {elemento.title}
        </Typography>
        <Typography variant="h6" textAlign={"center"} className="Title">
          Precio: $ {elemento.price}.
        </Typography>
      </CardContent>
      <CardActions className="card_actions">
        <IconButton aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <Link to={`/itemDetail/${elemento.id}`} className="Verdetalle">
          <Button size="medium" sx={{ textTransform: "none", color: "white" }}>
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
