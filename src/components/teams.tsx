import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Chip,
  Card,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Avatar,
  Zoom,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { Component } from "react";
import { teams } from "../data/teams";

const avatarGroupRender = (team: any) => {
  const mapped = team.composition.map((member: any) => {
    const firstLetter = member.name[0].toUpperCase();
    const borderColor = member.resp ? "#ab0237" : "#A0A0A0";
    return (
      <Grid item>
        <Avatar style={{ backgroundColor: borderColor }}>{firstLetter}</Avatar>
      </Grid>
    );
  });
  return (
    <Grid container spacing={1}>
      {mapped}
    </Grid>
  );
};

const teamsRender = teams.content.map((team) => {
  const avatarGroup = avatarGroupRender(team);
  return (
    <Zoom in={true}>
      <Grid key={team.name} item>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>{team.name}</Typography>
              </Grid>
              <Grid item> {avatarGroup}</Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{team.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Zoom>
  );
});

export class Teams extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        spacing={3}
      >
        {teamsRender}
      </Grid>
    );
  }
}
