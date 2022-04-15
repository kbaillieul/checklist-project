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
    <>
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
            value={fallArrest.employeeName}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, employeeName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "95%", m: 2 }}
            required
            id="location"
            label="3. Location"
            value={fallArrest.location}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, location: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ width: "95%", m: 2 }}
            required
            id="harness-id-number"
            label="4. Harness ID Number"
            value={fallArrest.idNumber}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, idNumber: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            sx={{ width: "97.5%", m: 2 }}
            required
            id="task-description"
            label="5. Task Description"
            value={fallArrest.task}
            onChange={(e) =>
              setFallArrest({ ...fallArrest, task: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 2 }}>
            <FormLabel id="webbing-radio-buttons-group">
              6. Webbing - Check for frayed edges, broken fibers, pulled
              stitches, cuts, burns, and chemical damage.
            </FormLabel>
            <RadioGroup
              aria-labelledby="webbing-radio-buttons-group"
              name="webbing-radio-buttons-group"
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
          <FormControl sx={{ m: 2 }}>
            <FormLabel id="d-ring-radio-buttons-group">
              7. "D" Ring/Back Pads - Check “D” rings for distortion, cracks,
              breaks, and rough or sharp edges.
            </FormLabel>
            <RadioGroup
              aria-labelledby="d-ring-radio-buttons-group"
              name="d-ring-radio-buttons-group"
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
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "25%" }}
              onClick={submitChecklist}
              aria-label="submit-checklist-button"
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FAChecklist;
