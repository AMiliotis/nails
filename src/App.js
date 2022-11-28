import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";
import Image from "./components/background/background.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#171512",
    },
    secondary: {
      main: "#f2d7e8",
    },
    info: {
      main: "#017f10",
    },
    text: {
      secondary: "#E861A0",
    },
    background: {
      default: "#d1edea",
    },
    divider: {
      secondary: "#FFFFFF",
    },
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

theme.typography.h3 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.7rem",
  "@media (min-width:600px)": {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.1rem",
  "@media (min-width:600px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};

function App() {
  return (
    <Paper style={styles.paperContainer}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </Paper>
  );
}

export default App;
