import React from "react";
import { useState } from "react";
// import { sendToLocal } from "./local.js";
const FAChecklist = ({ onSubmit }) => {
  //state that holds checklist responses in an object
  const [fallArrest, setFallArrest] = useState({
    date: "",
    employeeName: "",
    location: "",
    task: "",
    plan: false,
    alone: false,
    idNumber: "",
    webbing: "",
    dRing: "",
  });
  //function called on submit button click that sends object of checklist responses to app.js function addChecklist
  const submitChecklist = (e) => {
    const newChecklist = JSON.stringify(fallArrest);
    onSubmit(newChecklist);
    setFallArrest({
      date: "",
      employeeName: "",
      location: "",
      task: "",
      plan: false,
      alone: false,
      idNumber: "",
      webbing: "",
      dRing: "",
    });
  };
  // const addChecklist = (e) => {
  //   const newChecklist = { id: "Fall Arrest", data: { fallArrest } };
  //   console.log(newChecklist);
  //   // sendToLocal(newChecklist);
  // };
  return (
    <div>
      <label>1. Date of Inspection (dd/mm/yyyy)</label>
      <input
        type="text"
        value={fallArrest.date}
        onChange={(e) => setFallArrest({ ...fallArrest, date: e.target.value })}
      />
      <div></div>
      <label>2. Employee Name</label>
      <input
        type="text"
        value={fallArrest.employeeName}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, employeeName: e.target.value })
        }
      />
      <div></div>
      <label>3. Location</label>
      <input
        type="text"
        value={fallArrest.location}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, location: e.target.value })
        }
      />
      <div></div>
      <label>4. Task Description</label>
      <input
        type="text"
        value={fallArrest.task}
        onChange={(e) => setFallArrest({ ...fallArrest, task: e.target.value })}
      />
      <div></div>
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
      <div></div>
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
      <div></div>
      <label>7. Harness ID Number</label>
      <input
        type="text"
        value={fallArrest.idNumber}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, idNumber: e.target.value })
        }
      />
      <div></div>
      <label>
        8. Webbing - Check for frayed edges, broken fibers, pulled stitches,
        cuts, burns, and chemical damage.
      </label>
      <div></div>
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, webbing: e.target.value })
        }
        type="radio"
        value="OK"
        name="OK"
        //control to keep from multiple radio buttons in the same question being checked
        checked={fallArrest.webbing === "OK"}
      ></input>
      OK <div></div>
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, webbing: e.target.value })
        }
        type="radio"
        value="Issue"
        name="Issue"
        checked={fallArrest.webbing === "Issue"}
      ></input>
      Issue <div></div>
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, webbing: e.target.value })
        }
        type="radio"
        value="NA"
        name="NA"
        checked={fallArrest.webbing === "NA"}
      ></input>
      N/A
      <div></div>
      <label>
        9. "D" Ring/Back Pads - Check “D” rings for distortion, cracks, breaks,
        and rough or sharp edges. The “D” ring should pivot freely. “D” ring
        back pads should also be inspected for damage.
      </label>
      <div></div>
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, dRing: e.target.value })
        }
        type="radio"
        value="OK"
        name="OK"
        //control to keep from multiple radio buttons in the same question being checked
        checked={fallArrest.dRing === "OK"}
      ></input>
      OK <div></div>
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, dRing: e.target.value })
        }
        type="radio"
        value="Issue"
        name="Issue"
        checked={fallArrest.dRing === "Issue"}
      ></input>
      Issue <div></div>
      <input
        onChange={(e) =>
          setFallArrest({ ...fallArrest, dRing: e.target.value })
        }
        type="radio"
        value="NA"
        name="NA"
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
