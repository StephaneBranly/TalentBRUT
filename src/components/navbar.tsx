import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Breadcrumbs,
  Typography,
} from "@material-ui/core";
import { Home, Person, Group, Business, ContactMail } from "@material-ui/icons";
import React, { Component } from "react";

export interface NavbarProps {
  handlerChangePage: any;
  currentPage: string;
}

export class Navbar extends Component<NavbarProps> {
  render() {
    const { handlerChangePage, currentPage } = this.props;
    return (
      <AppBar position="sticky" id="navbar">
        {/* <img src={curtainnav} /> */}
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
                    currentPage == "home" ? "nav-page selected" : "nav-page"
                  }
                  onClick={() => {
                    handlerChangePage("Nouvelle page", "home");
                  }}
                >
                  Accueil
                </Typography>
                <Typography
                  className={
                    currentPage == "teams" ? "nav-page selected" : "nav-page"
                  }
                  onClick={() => {
                    handlerChangePage("Nouvelle page", "teams");
                  }}
                >
                  Teams
                </Typography>
                <Typography
                  className={
                    currentPage == "sponsors" ? "nav-page selected" : "nav-page"
                  }
                  onClick={() => {
                    handlerChangePage("Nouvelle page", "sponsors");
                  }}
                >
                  Sponsors
                </Typography>
                <Typography
                  className={
                    currentPage == "contact" ? "nav-page selected" : "nav-page"
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
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component="span"
                startIcon={<Person />}
              >
                login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
