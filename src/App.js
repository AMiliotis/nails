import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#f2d2bd",
    },
    secondary: {
      main: "#f50057",
    },
    info: {
      main: "#017f10",
    },
    text: {
      secondary: "#ffda00",
    },
    background: {
      default: "#e5e5e0",
    },
    divider: "#000000",
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
