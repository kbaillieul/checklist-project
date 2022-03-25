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

const FAChecklist = () => {
  let { fallArrestComplete } = useContext(CompletedChecklistContext);
  const navigate = useNavigate();
  //default FA checklist responses to reset form to
  const defaultFA = {
    key: "",
    type: "fallArrest",
    date: null,
    employeeName: "",
    location: "",
    task: "",
    plan: false,
    alone: false,
    idNumber: "",
    webbing: "",
    dRing: "",
  };
  //state that holds checklist responses in an object
  const [fallArrest, setFallArrest] = useState(defaultFA);

  //function called on submit button click that checks if all questions are answered, sends checklist responses to function to add to local storage, and resets checklist
  const submitChecklist = (e) => {
    if (
      fallArrest.date === "" ||
      fallArrest.employeeName === "" ||
      fallArrest.location === "" ||
      fallArrest.task === "" ||
      fallArrest.idNumber === "" ||
      fallArrest.webbing === "" ||
      fallArrest.dRing === ""
    ) {
      alert("Please answer all questions to submit checklist");
    } else {
      fallArrest.key = uuidv4();
      //sendFAToLocal function stores checklist data into local storage
      // addFallArrestChecklist(fallArrest);
      //call to refresh completedFA checklist array
      fallArrestComplete.update(fallArrest);
      fallArrestComplete.value();
      //reset to default
      setFallArrest(defaultFA);
      navigate("/fall-arrest/completed");
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
              value={fallArrest.date}
              onChange={(date) => {
                setFallArrest({ ...fallArrest, date: date });
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
            value={fallArrest.employeeName}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, employeeName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="3. Location"
            value={fallArrest.location}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, location: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="4. Harness ID Number"
            value={fallArrest.idNumber}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, idNumber: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="5. Task Description"
            value={fallArrest.task}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, task: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              6. Webbing - Check for frayed edges, broken fibers, pulled
              stitches, cuts, burns, and chemical damage.
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={fallArrest.webbing}
              onChange={(e) =>
                setFallArrest({ ...fallArrest, webbing: e.target.value })
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
              7. "D" Ring/Back Pads - Check “D” rings for distortion, cracks,
              breaks, and rough or sharp edges.
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={fallArrest.dRing}
              onChange={(e) =>
                setFallArrest({ ...fallArrest, dRing: e.target.value })
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
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value={fallArrest.plan}
                checked={fallArrest.plan}
                onChange={(e) =>
                  setFallArrest({ ...fallArrest, plan: e.target.checked })
                }
                control={<Checkbox />}
                label="8. There is an applicable and realistic rescue plan in place for this
          work"
                labelPlacement="start"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value={fallArrest.alone}
                checked={fallArrest.alone}
                onChange={(e) =>
                  setFallArrest({ ...fallArrest, alone: e.target.checked })
                }
                control={<Checkbox />}
                label="9. I am not working alone. Working alone is never permitted in a
            scenario requiring fall arrest."
                labelPlacement="start"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            className="submit"
            onClick={submitChecklist}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FAChecklist;
