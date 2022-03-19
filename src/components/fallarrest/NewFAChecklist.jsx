import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CompletedChecklistContext } from "./index";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const FAChecklist = () => {
  let { fallArrestComplete } = useContext(CompletedChecklistContext);
  const navigate = useNavigate();
  //default FA checklist responses to reset form to
  const defaultFA = {
    key: "",
    type: "fallArrest",
    date: "",
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
      <div className="date-picker">
        <label className="date-picker-label">1. Date of Inspection:</label>
        <DatePicker
          className="text-Input"
          selected={fallArrest.date}
          showTimeSelect
          onChange={(date) => setFallArrest({ ...fallArrest, date: date })}
          maxDate={new Date()}
        />
      </div>
      <label>2. Employee Name: </label>
      <input
        className="text-Input"
        type="text"
        value={fallArrest.employeeName}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, employeeName: e.target.value })
        }
      />
      <br />
      <label>3. Location: </label>
      <input
        className="text-Input"
        type="text"
        value={fallArrest.location}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, location: e.target.value })
        }
      />
      <br />
      <label>4. Task Description: </label>
      <input
        className="text-Input"
        type="text"
        value={fallArrest.task}
        onChange={(e) => setFallArrest({ ...fallArrest, task: e.target.value })}
      />
      <br />
      <label>
        5. There is an applicable and realistic rescue plan in place for this
        work{" "}
      </label>
      <input
        type="checkbox"
        value={fallArrest.plan}
        checked={fallArrest.plan}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, plan: e.target.checked })
        }
      />
      <br />
      <label>
        6. I am not working alone. Working alone is never permitted in a
        scenario requiring fall arrest.{" "}
      </label>
      <input
        type="checkbox"
        value={fallArrest.alone}
        checked={fallArrest.alone}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, alone: e.target.checked })
        }
      />
      <br />
      <label>7. Harness ID Number: </label>
      <input
        className="text-Input"
        type="text"
        value={fallArrest.idNumber}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, idNumber: e.target.value })
        }
      />
      <br />
      <label>
        8. Webbing - Check for frayed edges, broken fibers, pulled stitches,
        cuts, burns, and chemical damage.
      </label>
      <br />
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, webbing: e.target.value })
        }
        type="radio"
        value="OK"
        //control to keep from multiple radio buttons in the same question being checked
        checked={fallArrest.webbing === "OK"}
      ></input>
      OK <br />
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, webbing: e.target.value })
        }
        type="radio"
        value="Issue"
        checked={fallArrest.webbing === "Issue"}
      ></input>
      Issue <br />
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, webbing: e.target.value })
        }
        type="radio"
        value="NA"
        checked={fallArrest.webbing === "NA"}
      ></input>
      N/A
      <br />
      <label>
        9. "D" Ring/Back Pads - Check “D” rings for distortion, cracks, breaks,
        and rough or sharp edges.
      </label>
      <br />
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, dRing: e.target.value })
        }
        type="radio"
        value="OK"
        checked={fallArrest.dRing === "OK"}
      ></input>
      OK <br />
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, dRing: e.target.value })
        }
        type="radio"
        value="Issue"
        checked={fallArrest.dRing === "Issue"}
      ></input>
      Issue <br />
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, dRing: e.target.value })
        }
        type="radio"
        value="NA"
        checked={fallArrest.dRing === "NA"}
      ></input>
      N/A
      <div>
        <Box textAlign="center">
          <Button
            variant="contained"
            className="submit"
            onClick={submitChecklist}
          >
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default FAChecklist;
