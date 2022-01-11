import React from "react";
import { useState } from "react";

const LVChecklist = ({ onSubmit }) => {
  const [lightVehicle, setLightVehicle] = useState({
    date: "",
    idNum: "",
    type: "",
  });
  const submitChecklist = (e) => {
    const newChecklist = JSON.stringify(lightVehicle);
    onSubmit(newChecklist);
    setLightVehicle({
      date: "",
      idNum: "",
      type: "",
    });
  };
  return (
    <div>
      <label>1. Date</label>
      <input
        type="text"
        value={lightVehicle.date}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, date: e.target.value })
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
      <div>
        <button className="submit" onClick={submitChecklist}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LVChecklist;
