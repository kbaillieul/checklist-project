import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CompletedChecklistContext } from "./index";
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

const HEChecklist = () => {
  const { heavyEquipmentComplete } = useContext(CompletedChecklistContext);
  const navigate = useNavigate();
  const defaultHE = {
    key: "",
    type: "heavyEquipment",
    date: null,
    employeeName: "",
    location: "",
    idNum: "",
    hazard: "",
    fluid: "",
    alarm: "",
    hydraulics: "",
  };
  const [heavyEquip, setHeavyEquip] = useState(defaultHE);

  const submitChecklist = (e) => {
    if (
      heavyEquip.date === "" ||
      heavyEquip.employeeName === "" ||
      heavyEquip.location === "" ||
      heavyEquip.idNum === "" ||
      heavyEquip.hazard === "" ||
      heavyEquip.fluid === "" ||
      heavyEquip.alarm === "" ||
      heavyEquip.hydraulics === ""
    ) {
      alert("Please answer all questions to submit checklist");
    } else {
      heavyEquip.key = uuidv4();
      heavyEquipmentComplete.update(heavyEquip);
      heavyEquipmentComplete.value();
      setHeavyEquip(defaultHE);
      navigate("/heavy-equipment/completed");
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
              value={heavyEquip.date}
              onChange={(date) => {
                setHeavyEquip({ ...heavyEquip, date: date });
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="employee-name"
            label="2. Employee Name"
            value={heavyEquip.employeeName}
            onChange={(e) =>
              setHeavyEquip({ ...heavyEquip, employeeName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="location"
            label="3. Location"
            value={heavyEquip.location}
            onChange={(e) =>
              setHeavyEquip({ ...heavyEquip, location: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="equipment-id-number"
            label="4. Heavy Equipment ID Number"
            value={heavyEquip.idNum}
            onChange={(e) =>
              setHeavyEquip({ ...heavyEquip, idNum: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="nearby-hazards-radio-buttons-group">
              5. Nearby Hazards - Check for safety and environmental hazards
              around equipment and work site
            </FormLabel>
            <RadioGroup
              aria-labelledby="nearby-hazards-radio-buttons-group"
              name="nearby-hazards-radio-buttons-group"
              value={heavyEquip.hazard}
              onChange={(e) =>
                setHeavyEquip({ ...heavyEquip, hazard: e.target.value })
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
            <FormLabel id="fluid-levels-radio-buttons-group">
              6. Fluid Levels and Leaks - Check levels and potential leaks of
              engine oil, fuel, hydralic and radiator fluid.
            </FormLabel>
            <RadioGroup
              aria-labelledby="fluid-levels-radio-buttons-group"
              name="fluid-levels-radio-buttons-group"
              value={heavyEquip.fluid}
              onChange={(e) =>
                setHeavyEquip({ ...heavyEquip, fluid: e.target.value })
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
            <FormLabel id="backup-alarm-radio-buttons-group">
              7. Backup Alarm - Check backup alarm is working and loud enough to
              be heard in an operational environment.
            </FormLabel>
            <RadioGroup
              aria-labelledby="backup-alarm-radio-buttons-group"
              name="backup-alarm-radio-buttons-group"
              value={heavyEquip.alarm}
              onChange={(e) =>
                setHeavyEquip({ ...heavyEquip, alarm: e.target.value })
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
            <FormLabel id="hydraulics-radio-buttons-group">
              8. Hydraulics - Check for cylinders, hoses, and valves free from
              leaks and damage.
            </FormLabel>
            <RadioGroup
              aria-labelledby="hydraulics-radio-buttons-group"
              name="hydraulics-radio-buttons-group"
              value={heavyEquip.hydraulics}
              onChange={(e) =>
                setHeavyEquip({ ...heavyEquip, hydraulics: e.target.value })
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 5, mb: 3 }}
            onClick={submitChecklist}
            aria-label="submit-button"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default HEChecklist;
