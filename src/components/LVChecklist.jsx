import React from "react";
import { useState } from "react";

const LVChecklist = () => {
  const [lightVehicle, setLightVehicle] = useState({
    employeeName: "",
    location: "",
    task: "",
  });
  return (
    <div>
      <label>1. Employee Name</label>
      <input
        type="text"
        value={lightVehicle.employeeName}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, employeeName: e.target.value })
        }
      />
      <div></div>
      <label>2. Location</label>
      <input
        type="text"
        value={lightVehicle.location}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, location: e.target.value })
        }
      />
      <div></div>
      <label>3. Task Description</label>
      <input
        type="text"
        value={lightVehicle.task}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, task: e.target.value })
        }
      />
      <div></div>
    </div>
  );
};

export default LVChecklist;
