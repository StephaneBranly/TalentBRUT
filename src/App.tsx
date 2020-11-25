import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import { getPage } from "./lib/utils";
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
  const pathname = getPage();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button variant="contained" color="primary">
          {pathname}
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
