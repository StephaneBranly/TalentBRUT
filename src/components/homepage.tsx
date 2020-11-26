import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

export class Homepage extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Talent BR'UT
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lalent Br’UT est l’association qui organise la STAR, la Soirée
                  des Talents et Artistes Remarquables. La STAR est un concours
                  de talents au sein de l’UTC, pour les UTCéens, par les
                  UTCéens. Talent Br’UT propose alors de donner une scène aux
                  étudiants qui souhaitent partager leur talent avec le reste de
                  la famille UTCéenne et donne ainsi l’opportunité aux UTCéens
                  de découvrir les talents, parfois insoupçonnés, de leurs
                  camarades.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  De quel genre de talents parle-t-on ?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Absolument tous les talents nous intéressent !! Que ça soit un
                  talent connu (le chant par exemple) ou bien un talent
                  atypique, voire totalement inconnu (résoudre un Rubik’s cube
                  les yeux bandés tout en effectuant une annale de MT23, le tout
                  en apnée bien sûr, par exemple). Donc tu l’as compris, si tu
                  possèdes un talent (ou que tu connais quelqu’un de talentueux)
                  susceptible d’impressionner (et que la réalisation de ce
                  talent est faisable en assurant la sécurité et en respectant
                  la pudeur du talent comme des spectateurs) alors la scène de
                  Talent Br’UT est faite pour toi ?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Si tu veux plus d’informations, que tu as envie de rejoindre
                  l’asso, de participer à l’événement en tant que talent ou bien
                  que tu veux partager une idée avec nous, n’hésite pas à nous
                  contacter
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Site en construction
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Le site de Talent Br'UT est actuellement en construction. Il
                  est dev par @stephane_branly #JaiDevCa
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
