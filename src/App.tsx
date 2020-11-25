import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#05b592",
    },
    secondary: {
      main: "#f2c7f2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Talent Br'UT</Button>
    </ThemeProvider>
  );
}

export default App;
