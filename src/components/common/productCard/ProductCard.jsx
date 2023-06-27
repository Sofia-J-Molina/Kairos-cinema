import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ elemento }) => {
  return (
    <div>
      <Card sx={{ width: 300 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={elemento.img}
          title={elemento.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elemento.description}
          </Typography>
          <Typography variant="subtitle1" textAlign={"center"}>
            ${elemento.price}.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Agregar al carrito</Button>
          <Link to={`/itemDetail/${elemento.id}`}>
            <Button
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
