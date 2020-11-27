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

export interface ContactProps {}
export interface ContactState {
  object: string;
  email: string;
  message: string;
  tag: string;
}
export class Contact extends Component<ContactProps, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = {
      object: "",
      email: "",
      message: "",
      tag: "",
    };
    this.onChangeObject = this.onChangeObject.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeTag = this.onChangeTag.bind(this);
  }
  onChangeObject(event: any) {
    this.setState({
      object: event.target.value,
    });
  }
  onChangeEmail(event: any) {
    this.setState({
      email: event.target.value,
    });
  }
  onChangeMessage(event: any) {
    this.setState({
      message: event.target.value,
    });
  }
  onChangeTag(event: any) {
    this.setState({
      tag: event.target.value,
    });
  }
  sendEmail = () => {
    const { object, message, tag, email } = this.state;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: email,
        message: message,
        tag: tag,
        object: object,
      }),
    };
    fetch("https://assos.utc.fr/talentbrut/server/api/mail.php", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    const { object, message, tag, email } = this.state;
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
                  <InputLabel htmlFor="tag">Objet du contact</InputLabel>
                  <Select
                    id="tag"
                    label="tag"
                    value={tag}
                    onChange={(e) => this.onChangeTag(e)}
                  >
                    <MenuItem value={"Sponsoring"}>Sponsoring</MenuItem>
                    <MenuItem value={"Talent"}>Talent</MenuItem>
                    <MenuItem value={"Communication"}>Communication</MenuItem>
                    <MenuItem value={"Teams"}>Teams</MenuItem>
                    <MenuItem value={"Autre"}>Autre</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    id="object"
                    label="Titre"
                    value={object}
                    onChange={(e) => this.onChangeObject(e)}
                  />
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    label="Votre email"
                    type="email"
                    value={email}
                    onChange={(e) => this.onChangeEmail(e)}
                  />
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    id="message"
                    multiline
                    label="Description"
                    value={message}
                    onChange={(e) => this.onChangeMessage(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Send />}
                  onClick={() => this.sendEmail()}
                >
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
