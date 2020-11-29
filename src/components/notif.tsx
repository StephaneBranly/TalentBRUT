import { Grid, Snackbar } from "@material-ui/core";
import React, { Component } from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

export interface NotifProps {
  severity: "success" | "info" | "warning" | "error" | undefined;
  message: string;
  open: boolean;
  handleClose: any;
}

export interface NotifState {
  open: boolean;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class Notif extends Component<NotifProps> {
  render() {
    const { severity, message, open, handleClose } = this.props;

    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    );
  }
}
