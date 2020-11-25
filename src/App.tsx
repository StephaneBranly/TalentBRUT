import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import { getPage } from "./lib/utils";
import { Navbar } from "./components/navbar";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ab0237",
    },
    secondary: {
      main: "#fad20a",
    },
  },
});

const page = () => {
  const pathname = getPage();
  switch (pathname) {
    case "home":
      return (
        <Button variant="contained" color="primary">
          Homepage
        </Button>
      );
    default:
      return (
        <Button variant="contained" color="primary">
          DEFAULT PAGE
        </Button>
      );
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Container>{page()}</Container>
    </ThemeProvider>
  );
}

export default App;
