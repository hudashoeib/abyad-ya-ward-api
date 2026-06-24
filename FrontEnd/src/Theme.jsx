// @ts-ignore
const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode

          //   Header Theme (bg ,txt):

          primary: {
            main: "#5B6CFF", // Header & Drawer BG
            light: "#E8EBFF", // Main text on header/drawer
            dark: "#2D3A8C", // Secondary text
            contrastText: "#FFFFFF",
          },

          //   Theme for page background and text:
          background: {
            default: "#F5F7FF", // Page background
            paper: "#FFFFFF", // Card background
          },

          text: {
            primary: "#1E2433", // Titles
            secondary: "#667085", // Paragraphs
            disabled: "#98A2B3", // Extra neutral text (good in both modes)
          },
          //  Button Theme (bg ,txt):
          success: {
            main: "#22C55E", // Button BG
            light: "#4ADE80", // Hover BG
            dark: "#14532D", // Button text
            contrastText: "#FFFFFF",
          },
        }
      : {
          // palette values for dark mode

          //   Header Theme (bg ,txt):

          primary: {
            main: "#6366F1", // Header & Drawer BG (vibrant indigo)
            light: "#EEF2FF", // Main text on header/drawer
            dark: "#C7D2FE", // Secondary text on header/drawer
            contrastText: "#FFFFFF",
          },

          background: {
            default: "#0F172A", // Full page background (deep slate)
            paper: "#1E293B", // Cards / containers
          },

          text: {
            primary: "#F8FAFC", // Titles
            secondary: "#CBD5E1", // Paragraphs
            disabled: "#94A3B8", // Extra text color (works everywhere)
          },

          success: {
            main: "#22C55E", // Button BG
            light: "#4ADE80", // Hover BG
            dark: "#052E16", // Button text
            contrastText: "#FFFFFF",
          },
        }),
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.8rem",
      },
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.1rem",
      },
    },
    body2: {
      fontSize: "0.85rem",
      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:900px)": {
        fontSize: "0.95rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          padding: "8px 16px",
          borderRadius: "10px",
          fontWeight: 600,
          "@media (min-width:600px)": {
            fontSize: "0.9rem",
            padding: "10px 20px",
          },
          "@media (min-width:900px)": {
            fontSize: "1rem",
            padding: "12px 24px",
          },
          "@media (min-width:1200px)": {
            fontSize: "1.05rem",
            padding: "14px 28px",
          },
        },
      },
    },
  },
});

export default getDesignTokens;
