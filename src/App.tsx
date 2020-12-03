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
import { Contact } from "./components/contact";
import { Notif } from "./components/notif";

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

function App() {
  const [page, setPage] = useState(getPage());
  const [notifOpen, setNotifOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState("");
  const [notifSeverity, setNotifSeverity] = useState(
    "success" as "success" | "info" | "warning" | "error" | undefined
  );
  const [notifMessage, setNotifMessage] = useState("Message de base");

  const changePageApp = (title: string, path: string) => {
    changePage(title, path);
    setPage(path);
  };
  const updateConnected = (connected: boolean, user: string) => {
    setUser(user);
    setConnected(connected);
  };
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
      case "contact":
        return <Contact notify={notify} />;
      default:
        return (
          <Button variant="contained" color="primary">
            DEFAULT PAGE
          </Button>
        );
    }
  };

  const notify = (
    severity: "success" | "info" | "warning" | "error" | undefined,
    message: string
  ) => {
    setNotifSeverity(severity);
    setNotifMessage(message);
    setNotifOpen(true);
  };

  const handleCloseNotif = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setNotifOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        handlerChangePage={changePageApp}
        currentPage={page}
        user={user}
        connected={connected}
        handlerConnected={updateConnected}
      />
      <Container>{renderPage(page)}</Container>
      <Notif
        open={notifOpen}
        message={notifMessage}
        severity={notifSeverity}
        handleClose={handleCloseNotif}
      />
    </ThemeProvider>
  );
}

export default App;
