import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Breadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { Home, Person, Group, Business, ContactMail } from "@material-ui/icons";
import React, { Component } from "react";

export interface NavbarProps {
  handlerChangePage: any;
}

export class Navbar extends Component<NavbarProps> {
  render() {
    const { handlerChangePage } = this.props;
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
                  onClick={() => {
                    handlerChangePage("Nouvelle page", "home");
                  }}
                >
                  HOME
                </Typography>
                <Typography
                  onClick={() => {
                    handlerChangePage("Nouvelle page", "teams");
                  }}
                >
                  Teams
                </Typography>
                <Link color="inherit" href="sponsors">
                  {/* <Business /> */}
                  Sponsors
                </Link>
                <Link color="inherit" href="contact">
                  {/* <ContactMail /> */}
                  Contact
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
