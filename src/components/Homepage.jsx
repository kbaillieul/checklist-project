import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import Background from "./Background.png";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const style = {
  margin: 2,
};

export default function Homepage() {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };
  return (
    <div>
      <Grid container spacing={8} sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          xs={false}
          sm={5}
          md={7}
          sx={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={7} md={5} elevation={6} square>
          <Typography variant="h1" color="primary.main" sx={{ marginTop: 3 }}>
            Welcome,
          </Typography>
          <Typography variant="h5" align="center">
            Select a checklist type:
          </Typography>

          <div className="divider">
            <br />
            <List
              sx={{
                margin: 9,
                width: "100%",
                maxWidth: 375,
              }}
            >
              <ListItem
                sx={style}
                onClick={() => handleRoute("/fall-arrest/completed")}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalHospitalIcon
                        sx={{ bgcolor: "primary.main" }}
                        className="icons"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Fall Arrest Checklist" />
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem
                sx={style}
                onClick={() => handleRoute("/light-vehicle/completed")}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <DirectionsCarIcon
                        sx={{ bgcolor: "primary.main" }}
                        className="icons"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Light Vehicle Pre-Use Inspection" />
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                sx={style}
                onClick={() => handleRoute("/heavy-equipment/completed")}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <PrecisionManufacturingIcon
                        sx={{ bgcolor: "primary.main" }}
                        className="icons"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Heavy Equipment Pre-Use Inspection" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
