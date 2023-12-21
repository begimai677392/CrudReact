import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../index.css";
const ProductList = ({ readProducts, products, deleteProduct }) => {
  useEffect(() => {
    readProducts();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "100px",
        }}
      />
      <h2>
        {products.map((item, index) => (
          <Card
            key={index}
            style={{ maxWidth: "215px", margin: "16px", textAlign: "left" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name:{item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description:{item.descr}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price:{item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`edit/${item.id}`}>
                <Button size="small">Edit</Button>
              </Link>

              <Button size="small" onClick={(e) => deleteProduct(item.id)}>
                Delete
              </Button>
              <Link to={`/details/${item.id}`}>
                <Button size="small">Details</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </h2>
    </div>
  );
};

export default ProductList;
