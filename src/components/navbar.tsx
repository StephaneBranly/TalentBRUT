import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Breadcrumbs,
  Typography,
  Box,
} from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React, { Component } from "react";
import { casURL } from "../data/vars";
import { isConnected } from "../lib/utils";

export interface NavbarProps {
  handlerChangePage: any;
  currentPage: string;
  connected: boolean;
  user: string;
  handlerConnected: any;
}

export class Navbar extends Component<NavbarProps> {
  async componentDidMount() {
    const { handlerConnected } = this.props;
    const data = await isConnected();
    handlerConnected(data.connected, data.user);
  }
  login = () => {
    const currentURL = window.location.href;
    window.location.href =
      "https://assos.utc.fr/talentbrut/server/api/login.php?from=" + currentURL;
  };
  logout = () => {
    const { handlerConnected } = this.props;
    handlerConnected(false, "");
    window.open(
      "https://assos.utc.fr/talentbrut/server/api/logout.php",
      "_blank"
    );
  };

  render() {
    isConnected();
    const { handlerChangePage, currentPage, connected, user } = this.props;
    return (
      <Box mb={3}>
        <AppBar position="sticky" id="navbar">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Breadcrumbs separator="|">
                  <Typography
                    className={
                      currentPage === "home" ? "nav-page selected" : "nav-page"
                    }
                    onClick={() => {
                      handlerChangePage("Nouvelle page", "home");
                    }}
                  >
                    Accueil
                  </Typography>
                  <Typography
                    className={
                      currentPage === "teams" ? "nav-page selected" : "nav-page"
                    }
                    onClick={() => {
                      handlerChangePage("Nouvelle page", "teams");
                    }}
                  >
                    Teams
                  </Typography>
                  <Typography
                    className={
                      currentPage === "sponsors"
                        ? "nav-page selected"
                        : "nav-page"
                    }
                    onClick={() => {
                      handlerChangePage("Nouvelle page", "sponsors");
                    }}
                  >
                    Sponsors
                  </Typography>
                  <Typography
                    className={
                      currentPage === "contact"
                        ? "nav-page selected"
                        : "nav-page"
                    }
                    onClick={() => {
                      handlerChangePage("Nouvelle page", "contact");
                    }}
                  >
                    Contact
                  </Typography>
                </Breadcrumbs>
              </Grid>
              <Grid item>
                {connected ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component="span"
                    startIcon={<Person />}
                    onClick={() => this.logout()}
                  >
                    {user}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component="span"
                    startIcon={<Person />}
                    onClick={() => this.login()}
                  >
                    login
                  </Button>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
