import { useState } from "react";
import { sendFAToLocal } from "./local";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FAChecklist = ({ onSubmit }) => {
  const navigate = useNavigate();
  //default FA checklist responses to reset form to
  const defaultFA = {
    key: "",
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
      //sendFAToLocal function in local.js stores checklist data into local storage
      sendFAToLocal(fallArrest);
      //call to refreshFA function in app.js to updated completed checklists
      onSubmit();
      //reset to default
      setFallArrest(defaultFA);
      navigate("/fallarrest");
    }
  };

  return (
    <div>
      <label>1. Date of Inspection</label>
      <DatePicker
        selected={fallArrest.date}
        showTimeSelect
        onChange={(date) => setFallArrest({ ...fallArrest, date: date })}
      />
      <br />
      <label>2. Employee Name</label>
      <input
        type="text"
        value={fallArrest.employeeName}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, employeeName: e.target.value })
        }
      />
      <br />
      <label>3. Location</label>
      <input
        type="text"
        value={fallArrest.location}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, location: e.target.value })
        }
      />
      <br />
      <label>4. Task Description</label>
      <input
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
      <label>7. Harness ID Number</label>
      <input
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
        and rough or sharp edges. The “D” ring should pivot freely. “D” ring
        back pads should also be inspected for damage.
      </label>
      <br />
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, dRing: e.target.value })
        }
        type="radio"
        value="OK"
        //control to keep from multiple radio buttons in the same question being checked
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
        <button className="submit" onClick={submitChecklist}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FAChecklist;
