import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              ></Grid>
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
