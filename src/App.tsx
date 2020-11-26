import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import { getPage } from "./lib/utils";
import { Navbar } from "./components/navbar";
import { TalentVoteCard } from "./components/talentVote";
import { Homepage } from "./components/homepage";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ab0237",
    },
    secondary: {
      main: "#f5f2f5",
    },
  },
});

const page = () => {
  const pathname = getPage();
  switch (pathname) {
    case "home":
      return <Homepage />;
    case "talent":
      return <TalentVoteCard />;
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
