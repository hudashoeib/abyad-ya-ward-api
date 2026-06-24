import React from "react";
import Typography from "@mui/material/Typography";
// @ts-ignore
import "./Fotter.css";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box>
      <Box sx={{ height: "5rem" }} className="footer-space"></Box>
      {/* footer Full Screen */}
      <Box
        className="footerFullScreen"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Typography variant="body2" color="initial">
          {" "}
          all rights reserved &copy; 2024
        </Typography>
      </Box>
      {/*  footer Mobile Screen" */}
      <Box
        className="footerMobileScreen"
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          display: { xs: "block", md: "none" },
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default Footer;
