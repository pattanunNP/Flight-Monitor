import React from "react";
import {
  makeStyles,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  Paper,
  CardMedia,
} from "@material-ui/core";

import Clock from "react-live-clock";

import Gauge from "../Components/Gauge";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 220,
    width: 280,
    borderRadius: "30px",
    backgroundColor: "rgb(45,50,92)",
  },
  gauge_velocity: {
    padding: "0.8rem",
    position: "relative",
    height: "280px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.3)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_temp: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_altitude: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_height: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  xyz_pos: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_pressure: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_humitidty: {
    padding: "0.8rem",
    position: "relative",
    height: "250px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_no2: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_nh3: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
  gauge_co: {
    padding: "0.8rem",
    position: "relative",
    height: "210px",
    width: "210px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "rgba(55, 7, 94,0.5)",
    // boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
  },
ntrol: {
    padding: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const [spacing, setSpacing] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgb(45,50,92)",
          boxShadow: "0px 0px 0px 0px rgba(55, 7, 94,0.0)",
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            3 A.M. Shooting stars [ Flight Monitor ]
          </Typography>
          <Button
            style={{
              width: "auto",
              marginLeft: "10px",
              padding: "0.5rem",
              borderRadius: "30px",
              backgroundColor: "rgb(80,225,200)",
              color: "white",
            }}
          >
            <i
              className="fas fa-plug"
              style={{ color: "white", marginRight: "5px" }}
            ></i>{" "}
            Connected
          </Button>
        </Toolbar>
        <Toolbar>
          <Box display="flex" justifyContent="center">
            <h3 style={{ fontSize: "1em" }}>
              <i class="fas fa-clock"></i> TIME :
              <Clock
                format={"hh:mm:ss"}
                ticking={true}
                timezone={"Asia/Bangkok"}
              />{" "}
            </h3>
          </Box>
        </Toolbar>
      </AppBar>
     
     
    
      <Grid
        container
        className={classes.root}
        spacing={2}
        style={{ marginTop: "20px" }}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            <Grid item>
              <Card className={classes.gauge_velocity}>
                <CardMedia>
                  <Gauge
                    value={100}
                    min={0}
                    max={200}
                    label={"Velocity"}
                    units={"m/s"}
                  />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.gauge_altitude}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>Altitude</h1>
                    <h3 style={{ color: "white" }}>260.81 m</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.gauge_height}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>Height</h1>
                    <h3 style={{ color: "white" }}>0.0 m</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.xyz_pos}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>
                      {" "}
                      <i className="fas fa-arrows-alt"></i>X Y Z
                    </h1>
                    <h3 style={{ color: "white" }}>X : 0.1 degree</h3>
                    <h3 style={{ color: "white" }}>Y : 0.5 degree</h3>
                    <h3 style={{ color: "white" }}>Z : 0.0 degree</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.root}
        spacing={2}
        style={{ marginTop: "10px" }}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            <Grid item>
              <Card className={classes.gauge_pressure}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>Air Pressure</h1>
                    <h3 style={{ color: "white" }}>98266.36 Pa</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.gauge_pressure}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>
                      {" "}
                      <i class="fas fa-thermometer-quarter"></i>Temperature
                    </h1>
                    <h3 style={{ color: "white" }}>27 C</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.gauge_humitidty}>
                <CardMedia>
                  <Gauge
                    value={55}
                    min={0}
                    max={100}
                    color1={"#0278ae"}
                    color2={"#00b7c2"}
                    label={"Humitidity"}
                    units={"%RH"}
                  />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.gauge_no2}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>NO2</h1>
                    <h3 style={{ color: "white" }}>20 ppm</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.gauge_nh3}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>NH3</h1>
                    <h3 style={{ color: "white" }}>10 ppm</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.gauge_co}>
                <CardMedia>
                  <Typography>
                    <h1 style={{ color: "white" }}>CO</h1>
                    <h3 style={{ color: "white" }}>440 ppm</h3>
                  </Typography>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
