import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CompletedChecklistContext } from "./index";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Grid from "@mui/material/Grid";

const LVChecklist = () => {
  const { lightVehicleComplete } = useContext(CompletedChecklistContext);
  const navigate = useNavigate();
  const defaultLV = {
    key: "",
    type: "lightVehicle",
    date: null,
    employeeName: "",
    location: "",
    idNum: "",
    fuel: "",
    oil: "",
    coolant: "",
    confirm: "",
  };
  const [lightVehicle, setLightVehicle] = useState(defaultLV);

  const submitChecklist = (e) => {
    if (
      lightVehicle.date === "" ||
      lightVehicle.employeeName === "" ||
      lightVehicle.location === "" ||
      lightVehicle.idNum === "" ||
      lightVehicle.fuel === "" ||
      lightVehicle.oil === "" ||
      lightVehicle.coolant === ""
    ) {
      alert("Please complete all questions to submit checklist");
    } else {
      lightVehicle.key = uuidv4();
      lightVehicleComplete.update(lightVehicle);
      lightVehicleComplete.value();
      setLightVehicle(defaultLV);
      navigate("/light-vehicle/completed");
    }
  };
  return (
    <div className="form-container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              maxDate={new Date()}
              label="1. Date of Inspection"
              value={lightVehicle.date}
              onChange={(date) => {
                setLightVehicle({ ...lightVehicle, date: date });
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="2. Employee Name"
            value={lightVehicle.employeeName}
            onChange={(e) =>
              setLightVehicle({ ...lightVehicle, employeeName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="3. Location"
            value={lightVehicle.location}
            onChange={(e) =>
              setLightVehicle({ ...lightVehicle, location: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="4. Heavy Equipment ID Number"
            value={lightVehicle.idNum}
            onChange={(e) =>
              setLightVehicle({ ...lightVehicle, idNum: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              5. Fuel Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={lightVehicle.fuel}
              onChange={(e) =>
                setLightVehicle({ ...lightVehicle, fuel: e.target.value })
              }
            >
              <FormControlLabel value="OK" control={<Radio />} label="OK" />
              <FormControlLabel
                value="Issue"
                control={<Radio />}
                label="Issue"
              />
              <FormControlLabel value="NA" control={<Radio />} label="N/A" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              6. Oil Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={lightVehicle.oil}
              onChange={(e) =>
                setLightVehicle({ ...lightVehicle, oil: e.target.value })
              }
            >
              <FormControlLabel value="OK" control={<Radio />} label="OK" />
              <FormControlLabel
                value="Issue"
                control={<Radio />}
                label="Issue"
              />
              <FormControlLabel value="NA" control={<Radio />} label="N/A" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              7. Coolant Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={lightVehicle.coolant}
              onChange={(e) =>
                setLightVehicle({ ...lightVehicle, coolant: e.target.value })
              }
            >
              <FormControlLabel value="OK" control={<Radio />} label="OK" />
              <FormControlLabel
                value="Issue"
                control={<Radio />}
                label="Issue"
              />
              <FormControlLabel value="NA" control={<Radio />} label="N/A" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              8. Vehicle is in good working condition, clean, and ready for use.
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={lightVehicle.confirm}
              onChange={(e) =>
                setLightVehicle({ ...lightVehicle, confirm: e.target.value })
              }
            >
              <FormControlLabel value="OK" control={<Radio />} label="OK" />
              <FormControlLabel
                value="Issue"
                control={<Radio />}
                label="Issue"
              />
              <FormControlLabel value="NA" control={<Radio />} label="N/A" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Box textAlign="center">
          <Button
            variant="contained"
            className="submit"
            onClick={submitChecklist}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default LVChecklist;
