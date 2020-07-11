import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      flexGrow: 1
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div
      style={{ textAlignVertical: "center", textAlign: "center" }}
      className={classes.root}
    >
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h1> UPDATE DATA COVID KAB MIMIKA</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <h2>Tanggal : {date.toLocaleDateString()}</h2>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>POSITIF</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>DIRAWAT</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>SEMBUH</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>MENINGGAL</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>429</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>63</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>360</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>6</Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="secondary">
              Positif tambah
            </Button>
            <Button variant="contained" color="primary">
              Positif kurang
            </Button>
            <Button variant="contained" color="secondary">
              dirawat tambah
            </Button>
            <Button variant="contained" color="primary">
              dirawat kurang
            </Button>
            <Button variant="contained" color="secondary">
              sembuh kurang
            </Button>
            <Button variant="contained" color="primary">
              sembuh tambah
            </Button>
            <Button variant="contained" color="secondary">
              mati tambah
            </Button>
            <Button variant="contained" color="primary">
              mati kurang
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>sponsor1</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>sponsor2</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>sponsor3</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
