import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TeamLogo from "./TeamLogo";
import MatchTime from "./MatchTime";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    textAlign: "center"
  },
  text: {
    color: "white"
  },
  date: {
    textAlign: "left"
  },
  paper: {
    color: "#454545",
    backgroundColor: "#505050",
    textAlign: "center"
  },
  paper2: {
    backgroundColor: "#454545"
  }
}));

const MatchCard = ({ event, teamList }) => {
  const [homeTeam, setHomeTeam] = useState({});
  const [visitorTeam, setVisitorTeam] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const getTeamByKey = key => {
      let team = Object.values(teamList).find(team => team.id === key);
      return team || {};
    };
    setHomeTeam(getTeamByKey(event.participantIds[0]));
    setVisitorTeam(getTeamByKey(event.participantIds[1]));
  }, [event.participantIds, teamList]);

  /*
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.date} item xs={3}>
        <Typography className={classes.text} variant="h6">
          <MatchTime date={event.startDate} />
        </Typography>
      </Grid>

      <Grid item xs={9}>
        <Paper elevation={1} className={classes.paper}>
          <TeamLogo team={homeTeam} />
          <Typography className={classes.text} variant="h5">
            vs
          </Typography>
          <TeamLogo team={visitorTeam} />
        </Paper>
      </Grid>
    </Grid>
  );
};

*/
  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      direction="row"
      spacing={3}
    >
      <Grid className={classes.date} item xs={3}>
        <Typography className={classes.text} variant="h6">
          <MatchTime date={event.startDate} />
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Paper elevation={1} className={classes.paper}>
          <TeamLogo team={homeTeam} align="left" />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.text} variant="h5">
          vs
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={1} className={classes.paper}>
          <TeamLogo team={visitorTeam} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MatchCard;
