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

const style = {
  backgroundColor: "background.paper",
  "&:hover": {
    opacity: [0.9, 0.8, 0.7],
  },
};
const Header = () => {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <div className="divider">
      <List
        sx={{
          width: "100%",
          maxWidth: 375,
        }}
      >
        <ListItem sx={style}>
          <ListItemAvatar>
            <Avatar>
              <LocalHospitalIcon
                sx={{ bgcolor: "primary.main" }}
                className="icons"
                onClick={() => handleRoute("/fall-arrest/completed")}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Fall Arrest Checklist"
            onClick={() => handleRoute("/fall-arrest/completed")}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={style}>
          <ListItemAvatar>
            <Avatar>
              <DirectionsCarIcon
                sx={{ bgcolor: "primary.main" }}
                onClick={() => handleRoute("/light-vehicle/completed")}
                className="icons"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Light Vehicle Pre-Use Inspection"
            onClick={() => handleRoute("/light-vehicle/completed")}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={style}>
          <ListItemAvatar>
            <Avatar>
              <PrecisionManufacturingIcon
                sx={{ bgcolor: "primary.main" }}
                onClick={() => handleRoute("/heavy-equipment/completed")}
                className="icons"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Heavy Equipment Pre-Use Inspection"
            onClick={() => handleRoute("/heavy-equipment/completed")}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Header;