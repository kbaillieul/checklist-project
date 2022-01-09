import React from "react";
import { useState } from "react";

const FAChecklist = () => {
  const [fallArrest, setFallArrest] = useState({
    employeeName: "",
    location: "",
    task: "",
    plan: false,
    alone: false,
    idNumber: "",
    webbing: "",
    dRing: "",
  });

  return (
    <div>
      <label>1. Employee Name</label>
      <input
        type="text"
        value={fallArrest.employeeName}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, employeeName: e.target.value })
        }
      />
      <div></div>
      <label>2. Location</label>
      <input
        type="text"
        value={fallArrest.location}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, location: e.target.value })
        }
      />
      <div></div>
      <label>3. Task Description</label>
      <input
        type="text"
        value={fallArrest.task}
        onChange={(e) => setFallArrest({ ...fallArrest, task: e.target.value })}
      />
      <div></div>
      <label>
        4. There is an applicable and realistic rescue plan in place for this
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
        5. I am not working alone. Working alone is never permitted in a
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
      <label>6. Harness ID Number</label>
      <input
        type="text"
        value={fallArrest.idNumber}
        onChange={(e) =>
          setFallArrest({ ...fallArrest, idNumber: e.target.value })
        }
      />
      <div></div>
      <label>
        7. Webbing - Check for frayed edges, broken fibers, pulled stitches,
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
        8. "D" Ring/Back Pads - Check “D” rings for distortion, cracks, breaks,
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
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};

export default FAChecklist;
