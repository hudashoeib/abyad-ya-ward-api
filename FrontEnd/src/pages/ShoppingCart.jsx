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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  minHeight: 60,
  padding: "0 16px",
}));
const ShoppingCart = () => {
  const selectedProducts = [{}, {}, {}, {}, {}, {}];
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
        {selectedProducts.map((product, index) => (
          <Item
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
            elevation={3}
          >
            {/* Img and Name */}

            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              sx={{ alignItems: "center" }}
            >
              <Avatar alt="Remy Sharp" src="T-shirts/2.jpg" />
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                title
              </Typography>
            </Stack>
            {/* Quantity */}
            {/* plus */}
            <Stack
              direction="row"
              spacing={{ xs: 1.5, sm: 2 }}
              sx={{ alignItems: "center" }}
            >
              <AddIcon
                sx={{
                  justifySelf: "center",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                }}
              />
              {/* number on badge */}
              <Badge color="primary" badgeContent={0} showZero />
              {/* minus */}
              <RemoveIcon
                sx={{
                  justifySelf: "center",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                }}
              />
            </Stack>

            <Typography
              variant="body1"
              color="initial"
              sx={{ textAlign: "center" }}
            >
              price
            </Typography>
            <DeleteOutlineOutlined
              sx={{
                justifySelf: "center",
                display: { xs: "block", sm: "none" },
              }}
            />
            <Typography
              variant="body1"
              color="error"
              sx={{ display: { xs: "none", sm: "block" } }}
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
    </Box>
  );
};

export default ShoppingCart;
