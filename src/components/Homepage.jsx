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
import Box from "@mui/material/Box";

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
    <>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Grid
          xs={false}
          sm={4}
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
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" color="primary.main" sx={{ marginTop: 3 }}>
              Welcome,
            </Typography>
            <Typography variant="h5" align="center">
              Select a checklist type:
            </Typography>

            <List
              sx={{
                margin: 5,
                width: "100%",
                maxWidth: 450,
              }}
            >
              <ListItem
                sx={style}
                onClick={() => handleRoute("/fall-arrest/completed")}
              >
                <ListItemButton aria-label="fall-arrest-checklists">
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
                <ListItemButton aria-label="light-vehicle-checklist">
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
                <ListItemButton aria-label="heavy-equipment-checklist">
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
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
