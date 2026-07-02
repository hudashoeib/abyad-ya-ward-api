import { Box, Button, Container, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CircularWithValueLabel from "./CircularWithValueLabel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";

import { useGetproductsByNameQuery } from "../Redux/productsAPI";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

/** @type {number[]} */
const initialZeroBadgeIds = [];

/** @type {Record<number, number>} */
const initialZeroBadgeTimeouts = {};

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [zeroBadgeIds, setZeroBadgeIds] = useState(initialZeroBadgeIds);
  const zeroBadgeTimeoutsRef = useRef(initialZeroBadgeTimeouts);
  // @ts-ignore
  const { data, error, isLoading } = useGetproductsByNameQuery();

  //Selected Products
  const { selectedProducts } = useSelector(
    /** @param {{ cart: { selectedProducts: any[] } }} state */ (state) =>
      state.cart,
  );

  // @ts-ignore
  const handleAddToCart = (product) => {
    const productId = Number(product.id);
    const timeoutId = zeroBadgeTimeoutsRef.current[productId];
    if (timeoutId) {
      clearTimeout(timeoutId);
      delete zeroBadgeTimeoutsRef.current[productId];
      setZeroBadgeIds((prev) => prev.filter((id) => id !== productId));
    }
    dispatch(addToCart(product));
    console.log("Product added to cart:", product);
  };

  // @ts-ignore
  const handleIncreaseQuantity = (product) => {
    const itemById = selectedProducts.find(
      (itemUser) => itemUser.id === product.id,
    );
    if (itemById) {
      dispatch(increaseQuantity(product));
      return;
    }

    handleAddToCart(product);
  };

  // @ts-ignore
  const handleDecreaseQuantity = (product) => {
    const productId = Number(product.id);
    const itemById = selectedProducts.find(
      (itemUser) => itemUser.id === product.id,
    );
    if (itemById?.quantity === 1) {
      setZeroBadgeIds((prev) =>
        prev.includes(productId) ? prev : [...prev, productId],
      );

      if (zeroBadgeTimeoutsRef.current[productId]) {
        clearTimeout(zeroBadgeTimeoutsRef.current[productId]);
      }

      // @ts-ignore
      zeroBadgeTimeoutsRef.current[productId] = setTimeout(() => {
        setZeroBadgeIds((prev) => prev.filter((id) => id !== productId));
        delete zeroBadgeTimeoutsRef.current[productId];
      }, 1000);
    }

    dispatch(decreaseQuantity(product));
  };

  useEffect(() => {
    const timeouts = zeroBadgeTimeoutsRef.current;

    return () => {
      Object.values(timeouts).forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, []);

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
                    onClick={() => navigate(`/product-details/${product.id}`)}
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
                  {/* Switch Buttons (addTocart & Quantity) */}
                  {/* Quantity */}
                  {selectedProducts.some(
                    (itemUser) => itemUser.id === product.id,
                  ) || zeroBadgeIds.includes(Number(product.id)) ? (
                    <Stack
                      direction="row"
                      spacing={{ xs: 1.4, sm: 2 }}
                      sx={{ alignItems: "center", justifySelf: "center" }}
                      className="quantity-stack"
                    >
                      <AddIcon
                        sx={{
                          justifySelf: "center",
                          fontSize: { xs: "1rem", sm: "1.5rem" },
                        }}
                        onClick={() => handleIncreaseQuantity(product)}
                      />
                      {/* number on badge */}
                      <Badge
                        color="primary"
                        badgeContent={
                          selectedProducts.find(
                            (itemUser) => itemUser.id === product.id,
                          )?.quantity ?? 0
                        }
                        showZero
                      />
                      {/* minus */}
                      <RemoveIcon
                        sx={{
                          justifySelf: "center",
                          fontSize: { xs: "1rem", sm: "1.5rem" },
                        }}
                        onClick={() => handleDecreaseQuantity(product)}
                      />
                    </Stack>
                  ) : (
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
                  )}

                  {/* Add to cart Btn */}
                  {/* <Button
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
                  </Button> */}
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
