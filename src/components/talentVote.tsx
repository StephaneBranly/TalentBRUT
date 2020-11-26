import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import { Favorite, ThumbUp } from "@material-ui/icons";

export class TalentVoteCard extends Component {
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia image="orchestre.jpg" title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <IconButton>
                <Favorite style={{ color: "#FF0000" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <ThumbUp style={{ color: "#0F0FFF" }} />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}
