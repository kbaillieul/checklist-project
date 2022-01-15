import React from "react";
import { useState } from "react";
import { sendToLocal } from "./local";

const LVChecklist = ({ onSubmit }) => {
  const [lightVehicle, setLightVehicle] = useState({
    date: "",
    idNum: "",
    type: "",
  });
  const [submittedLV, setSubmittedLV] = useState([]);
  const submitChecklist = (e) => {
    // const newChecklist = JSON.stringify(lightVehicle);
    // onSubmit(newChecklist);
    // const submitted = [...submittedLV, newChecklist];
    // // setSubmittedLV(submitted);
    // sendToLocal("light vehicle", submitted);
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
      <br />
      <label>2. Light Vehicle ID Number</label>
      <input
        type="text"
        value={lightVehicle.idNum}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, idNum: e.target.value })
        }
      />
      <br />
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
