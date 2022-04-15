import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CompletedChecklistContext } from "../../Contexts/CompletedChecklistContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
    <>
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
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "95%", m: 2 }} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "95%", m: 2 }}
            required
            id="employee-name"
            label="2. Employee Name"
            value={lightVehicle.employeeName}
            onChange={(e) =>
              setLightVehicle({ ...lightVehicle, employeeName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "95%", m: 2 }}
            required
            id="location"
            label="3. Location"
            value={lightVehicle.location}
            onChange={(e) =>
              setLightVehicle({ ...lightVehicle, location: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "95%", m: 2 }}
            required
            id="light-vehicle-id-number"
            label="4. Light Vehicle ID Number"
            value={lightVehicle.idNum}
            onChange={(e) =>
              setLightVehicle({ ...lightVehicle, idNum: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 2 }}>
            <FormLabel id="fuel-level-radio-buttons-group">
              5. Fuel Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="fuel-level-radio-buttons-group"
              name="fuel-level-radio-buttons-group"
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
          <FormControl sx={{ m: 2 }}>
            <FormLabel id="oil-level-radio-buttons-group">
              6. Oil Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="oil-level-radio-buttons-group"
              name="oil-level-radio-buttons-group"
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
          <FormControl sx={{ m: 2 }}>
            <FormLabel id="coolant-level-radio-buttons-group">
              7. Coolant Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="coolant-level-radio-buttons-group"
              name="coolant-level-radio-buttons-group"
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
          <FormControl sx={{ m: 2 }}>
            <FormLabel id="vehicle-condition-radio-buttons-group">
              8. Vehicle is in good working condition, clean, and ready for use.
            </FormLabel>
            <RadioGroup
              aria-labelledby="vehicle-condition-radio-buttons-group"
              name="vehicle-condition-radio-buttons-group"
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

        <Grid item xs={12} sm={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "25%" }}
              onClick={submitChecklist}
              aria-label="submit-button"
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LVChecklist;
