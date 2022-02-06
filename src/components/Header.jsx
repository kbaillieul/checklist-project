import Button from "./Button";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import Divider from "@mui/material/Divider";

const Header = () => {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalHospitalIcon onClick={() => handleRoute("/fallarrest")} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Fall Arrest Checklist"
          onClick={() => handleRoute("/fallarrest")}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DirectionsCarIcon onClick={() => handleRoute("/lightvehicle")} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Light Vehicle Pre-Use Inspection"
          onClick={() => handleRoute("/lightvehicle")}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PrecisionManufacturingIcon
              onClick={() => handleRoute("/heavyequipment")}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Heavy Equipment Pre-Use Inspection"
          onClick={() => handleRoute("/heavyequipment")}
        />
      </ListItem>
    </List>
  );
};

export default Header;
