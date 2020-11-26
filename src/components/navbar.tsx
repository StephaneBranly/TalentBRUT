import classes from "*.module.css";
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Breadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { Grain, Home, Person, Group } from "@material-ui/icons";
import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
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
                <Link color="inherit" href="home">
                  <Home />
                  Accueil
                </Link>
                <Link color="inherit" href="teams">
                  <Group />
                  Teams
                </Link>
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
