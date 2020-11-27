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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Favorite, Send, ThumbUp } from "@material-ui/icons";
import { validateEmail } from "../lib/utils";

export interface ContactProps {}
export interface ContactState {
  object: string;
  email: string;
  message: string;
  tag: string;
  dialog: boolean;
  status: boolean;
  statusM: string;
}
export class Contact extends Component<ContactProps, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = {
      object: "",
      email: "",
      message: "",
      tag: "",
      dialog: false,
      status: false,
      statusM: "",
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
  toggleDialog(val: boolean) {
    this.setState({
      dialog: val,
    });
  }
  toggleStatus(val: boolean, message: string = "") {
    this.setState({
      status: val,
      statusM: message,
    });
  }
  sendEmail = () => {
    const { object, message, tag, email } = this.state;
    if (!validateEmail(email)) {
      this.toggleStatus(true, "Adresse email invalide...");
    } else if (tag === "" || email === "" || object === "" || message === "") {
      this.toggleStatus(true, "Au moins un champ vide...");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: email,
          message: message.replace(/\n/g, "<br />"),
          tag: tag,
          object: object,
        }),
      };
      fetch(
        "https://assos.utc.fr/talentbrut/server/api/mail.php",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => this.toggleStatus(true, "Mail envoye"));
    }
    this.toggleDialog(false);
  };

  render() {
    const { object, message, tag, email, dialog, status, statusM } = this.state;
    return (
      <>
        <Dialog open={dialog}>
          <DialogTitle id="alert-dialog-title">{"Mail"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Confirmez l'envoie du mail
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              autoFocus
              onClick={() => this.toggleDialog(false)}
            >
              Annuler
            </Button>
            <Button color="primary" onClick={() => this.sendEmail()}>
              Envoyer
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={status}>
          <DialogTitle id="alert-dialog-title">{"Mail"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {statusM}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.toggleStatus(false)}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
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
                    onClick={() => this.toggleDialog(true)}
                  >
                    Envoyer
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </CardActions>
        </Card>
      </>
    );
  }
}
