import { useState } from "react";
import { sendLVToLocal } from "./local";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const LVChecklist = ({ onSubmit }) => {
  const defaultLV = {
    date: "",
    location: "",
    task: "",
  };
  const [lightVehicle, setLightVehicle] = useState(defaultLV);

  const submitChecklist = (e) => {
    //sendToLocal function in local.js stores checklist data into local storage
    sendLVToLocal(lightVehicle);
    onSubmit();
    setLightVehicle(defaultLV);
  };
  return (
    <div>
      <label>1. Date of Inspection</label>
      {/* <input
        type="text"
        value={lightVehicle.date}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, date: e.target.value })
        }
      /> */}
      <DatePicker
        selected={lightVehicle.date}
        onChange={(date) => setLightVehicle({ ...lightVehicle, date: date })}
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
