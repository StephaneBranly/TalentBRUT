import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Favorite, ThumbUp } from "@material-ui/icons";

export class Contact extends Component {
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Formulaire de contact
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <FormControl variant="outlined">
            <Container>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
              >
                <Grid item>
                  <InputLabel htmlFor="why">Objet du contact</InputLabel>
                  <Select label="WHY">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>
                <Grid item>
                  <IconButton>
                    <ThumbUp style={{ color: "#0F0FFF" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Container>
          </FormControl>
        </CardActions>
      </Card>
    );
  }
}
