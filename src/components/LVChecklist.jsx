import React from "react";
import { useState } from "react";

const LVChecklist = () => {
  const [lightVehicle, setLightVehicle] = useState({
    employeeName: "",
    idNum: "",
    type: "",
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
      <label>2. Light Vehicle ID Number</label>
      <input
        type="text"
        value={lightVehicle.idNum}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, idNum: e.target.value })
        }
      />
      <div></div>
      <label>3. Inspection Type</label>
      <input
        type="text"
        value={lightVehicle.type}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, type: e.target.value })
        }
      />
      <div></div>
    </div>
  );
};

export default LVChecklist;
