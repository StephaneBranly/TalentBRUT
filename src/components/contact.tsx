import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  Box,
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
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { ArrowForwardIos, Favorite, Send, ThumbUp } from "@material-ui/icons";
import { validateEmail } from "../lib/utils";
import { Helmet } from "react-helmet";

export interface ContactProps {
  notify: any;
}
export interface ContactState {
  object: string;
  email: string;
  message: string;
  tag: string;
  dialog: boolean;
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

  sendCheck = () => {
    const { object, message, tag, email } = this.state;
    const { notify } = this.props;

    if (tag === "" || email === "" || object === "" || message === "") {
      notify("error", "Au moins un champ vide...");
    } else if (!validateEmail(email)) {
      notify("error", "Adresse email invalide...");
    } else {
      this.toggleDialog(true);
    }
  };
  sendEmail = () => {
    const { object, message, tag, email } = this.state;
    const { notify } = this.props;

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
    ).then((response) => {
      response.json();
      notify("success", "Mail envoye");
    });
    // .then((data) => console.log.data);

    this.toggleDialog(false);
  };

  render() {
    const { object, message, tag, email, dialog } = this.state;
    return (
      <>
        <Helmet>
          <title>Talent Br'UT - Contact</title>
          <meta name="description" content="Nested component" />
        </Helmet>
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
                      id="email"
                      label="Votre email"
                      type="email"
                      value={email}
                      onChange={(e) => this.onChangeEmail(e)}
                    />
                  </FormControl>
                </Grid>

                <Grid item>
                  <Box mt={5}>
                    <FormControl fullWidth>
                      <TextField
                        id="object"
                        label="Titre"
                        value={object}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <ArrowForwardIos />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => this.onChangeObject(e)}
                      />
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item>
                  <FormControl fullWidth>
                    <TextField
                      id="message"
                      multiline
                      label="Description"
                      value={message}
                      variant="outlined"
                      onChange={(e) => this.onChangeMessage(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Send />}
                    onClick={() => this.sendCheck()}
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
