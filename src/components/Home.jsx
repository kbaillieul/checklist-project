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
        bgcolor: "inherit",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalHospitalIcon onClick={() => handleRoute("/fall-arrest")} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Fall Arrest Checklist"
          onClick={() => handleRoute("/fall-arrest")}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DirectionsCarIcon onClick={() => handleRoute("/light-vehicle")} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Light Vehicle Pre-Use Inspection"
          onClick={() => handleRoute("/light-vehicle")}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PrecisionManufacturingIcon
              onClick={() => handleRoute("/heavy-equipment")}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Heavy Equipment Pre-Use Inspection"
          onClick={() => handleRoute("/heavy-equipment")}
        />
      </ListItem>
    </List>
  );
};

export default Header;
