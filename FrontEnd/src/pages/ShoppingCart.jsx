import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";

import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

import Divider from "@mui/material/Divider";

import { useSelector } from "react-redux";
// Cart Actions
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/cartSlice";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";

/** @typedef {{ id: number, quantity: number, productName?: string, imageLink?: string, price?: number }} CartProduct */
/** @typedef {{ cart: { selectedProducts: CartProduct[] } }} RootState */

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  minHeight: 60,
  padding: "0 16px",
}));
const ShoppingCart = () => {
  // const selectedProducts = [{}, {}, {}, {}, {}, {}];
  //  const dispatch = useDispatch();
  const { selectedProducts } = useSelector(
    /** @param {RootState} state */ (state) => state.cart,
  );
  /** @type {CartProduct[]} */
  const cartItems = selectedProducts;
  const dispatch = useDispatch();

  /** @param {CartProduct} product */
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  /** @param {CartProduct} product */
  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  /** @param {CartProduct} product */
  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 5,
          gap: { xs: 1, sm: 2 },
          width: { xs: "95%", sm: "70%" },
        }}
      >
        {/* map iterate Item */}
        {cartItems.map((product) => (
          <Item
            key={product.id}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr) auto auto auto",
                md: "minmax(0, 1fr) 120px 70px 80px",
              },
              alignItems: "center",
              columnGap: { xs: 0.5, sm: 3 },
              width: "100%",
            }}
            elevation={3}
          >
            {/* Img and Name */}

            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              sx={{ alignItems: "center", minWidth: 0, justifySelf: "start" }}
            >
              <Avatar
                alt={product.productName}
                src={product.imageLink || `T-shirts/${product.id}.jpg`}
              />
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  textAlign: "left",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  overflowWrap: "anywhere",
                }}
              >
                {product.productName}
              </Typography>
            </Stack>
            {/* Quantity */}
            {/* plus */}
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
              <Badge color="primary" badgeContent={product.quantity} showZero />
              {/* minus */}
              <RemoveIcon
                sx={{
                  justifySelf: "center",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                }}
                onClick={() => handleDecreaseQuantity(product)}
              />
            </Stack>

            <Typography
              variant="body1"
              color="initial"
              sx={{
                textAlign: "center",
                justifySelf: "center",
                px: { xs: 0.5, sm: 0 },
              }}
            >
              {product.price}
            </Typography>
            <DeleteOutlineOutlined
              sx={{
                justifySelf: "center",
                display: { xs: "block", sm: "none" },
              }}
              onClick={() => handleRemoveFromCart(product)}
            />
            <Typography
              variant="body1"
              color="error"
              sx={{
                display: { xs: "none", sm: "block" },
                justifySelf: "center",
              }}
              onClick={() => handleRemoveFromCart(product)}
            >
              Delete
            </Typography>
          </Item>
        ))}

        {/* Total price Card*/}
        <Card
          className="Summary-card"
          variant="outlined"
          sx={{
            width: { xs: "70%", sm: "40%" },
            boxShadow:
              "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
            mt: 3,
            borderRadius: "12px",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              Summary
            </Typography>
          </Box>
          <Divider sx={{ opacity: 1 }} />
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography gutterBottom variant="body2" component="div">
                subTotal:
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                $4.50
              </Typography>
            </Stack>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", mt: 2 }}
          >
            CheckOut
          </Button>
        </Card>
      </Container>
      <ProductDetails />
    </Box>
  );
};

export default ShoppingCart;
