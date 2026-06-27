import { Box, Container } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CircularWithValueLabel from "./CircularWithValueLabel";

import { useGetproductsByNameQuery } from "../Redux/productsAPI";

import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { data, error, isLoading } = useGetproductsByNameQuery();

  // @ts-ignore
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("Product added to cart:", product);
  };
  if (isLoading) {
    return <CircularWithValueLabel />;
  }

  if (error) {
    return <h1>There is an error...</h1>;
  }

  if (!data || data.length === 0) {
    return <h1>No products found.</h1>;
  }
  if (data) {
    return (
      <Box>
        <Container
          sx={{
            mt: "4rem",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data?.map(
            (
              // @ts-ignore
              product,
              // @ts-ignore
              index,
            ) => (
              <Card key={index} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.imageLink || `T-shirts/${index + 1}.jpg`}
                    alt={product.productName || `Product ${index + 1}`}
                    sx={{ objectFit: "contain", mt: "1rem" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.productName || `Product ${index + 1}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {product.description ||
                        `Description for product ${index + 1}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{ justifyContent: "space-between", padding: "23px" }}
                >
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      padding: { xs: "7px 10px", sm: "10px 12px" },
                      lineHeight: 1,
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Typography variant="body1" color="blue">
                    {product.price ? `${product.price} $` : "400 $"}
                  </Typography>
                </CardActions>
              </Card>
            ),
          )}
        </Container>
        {/* <Box sx={{ height: "5rem" }} className="footer-space"></Box> */}
      </Box>
    );
  }
};

export default Products;
