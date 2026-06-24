import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useMemo } from "react";
import getDesignTokens from "./Theme";
import { Helmet } from "react-helmet-async";

const Root = () => {
  const [mode, setmyMode] = useState(
    localStorage.getItem("mode") === null
      ? "light"
      : localStorage.getItem("mode"),
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleBtn = () => {
    theme.palette.mode === "light" ? setmyMode("dark") : setmyMode("light");

    localStorage.setItem(
      "mode",
      theme.palette.mode === "light" ? "dark" : "light",
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>My App</title>
        <meta name="description" content="This is the contact page" />
      </Helmet>

      <Header toggleBtn={toggleBtn} />

      <Outlet />

      <Footer />
    </ThemeProvider>
  );
};

export default Root;
