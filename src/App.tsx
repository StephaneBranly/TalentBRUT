import React, { useState } from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import { getPage } from "./lib/utils";
import { Navbar } from "./components/navbar";
import { TalentVoteCard } from "./components/talentVote";
import { Homepage } from "./components/homepage";
import { Teams } from "./components/teams";
import { Sponsors } from "./components/sponsors";

import { changePage } from "./lib/utils";

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

const renderPage = (page: string) => {
  switch (page) {
    case "home":
      return <Homepage />;
    case "talent":
      return <TalentVoteCard />;
    case "teams":
      return <Teams />;
    case "sponsors":
      return <Sponsors />;
    default:
      return (
        <Button variant="contained" color="primary">
          DEFAULT PAGE
        </Button>
      );
  }
};

function App() {
  const [page, setPage] = useState(getPage());

  const changePageApp = (title: string, path: string) => {
    changePage(title, path);
    setPage(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar handlerChangePage={changePageApp} currentPage={page} />
      <Container>{renderPage(page)}</Container>
    </ThemeProvider>
  );
}

export default App;
