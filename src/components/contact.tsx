import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Favorite, Send, ThumbUp } from "@material-ui/icons";

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
          <Container>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item>
                <FormControl fullWidth>
                  <InputLabel htmlFor="why">Objet du contact</InputLabel>
                  <Select label="WHY">
                    <MenuItem value={10}>Sponsoring</MenuItem>
                    <MenuItem value={20}>Talent</MenuItem>
                    <MenuItem value={30}>Communication</MenuItem>
                    <MenuItem value={40}>Teams</MenuItem>
                    <MenuItem value={50}>Autre</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <TextField id="standard-basic" label="Titre" />
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    label="Votre email"
                    type="email"
                  />
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    multiline
                    label="Description"
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" endIcon={<Send />}>
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </Container>
        </CardActions>
      </Card>
    );
  }
}
